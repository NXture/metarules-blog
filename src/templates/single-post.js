import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import Seo from "../components/seo"
import { Badge, Card, CardBody, CardSubtitle } from "reactstrap"
import { GatsbyImage } from "gatsby-plugin-image"
import { slugify } from "../utils/utilityFunctions"
import authors from "../utils/authors"
//import kebabCase from "lodash/kebabCase"
//import { Disqus } from "gatsby-plugin-disqus"

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark.frontmatter
  const author = authors.find(x => x.name === post.author)

  const baseUrl = "https://gatsby.co.uk/"

  return (
    <Layout
      pageTitle={post.title}
      postAuthor={author}
      authorImage={data.file.childImageSharp.gatsbyImageData}
    >
      <Seo title={post.title} />
      <Card>
        <GatsbyImage
          className="card-image-top"
          image={post.image.childImageSharp.gatsbyImageData}
          alt="blog post image"
        />
        <CardBody>
          <CardSubtitle>
            <span className="text-info">{post.date}</span> by{" "}
            <span className="text-info">{post.author}</span>
          </CardSubtitle>
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
          <ul className="post-tags">
            {data.markdownRemark.frontmatter.tags.map(tag => (
              <li key={tag}>
                <Link to={`/tag/${slugify(tag)}`}>
                  <Badge color="primary" className="text-uppercase">
                    {tag}
                  </Badge>
                </Link>
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
      <h3 className="text-center">Share this post</h3>
      <div className="text-center social-share-links">
        <ul>
          <li>
            <a
              href={
                "https://www.facebook.com/sharer/sharer.php?u=" +
                baseUrl +
                pageContext.slug
              }
              className="facebook"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://img.icons8.com/doodle/48/000000/facebook-new.png"
                alt="facebook icon"
              />
            </a>
          </li>
          <li>
            <a
              href={
                "https://www.twitter.com/share?url=" +
                baseUrl +
                pageContext.slug +
                "&text=" +
                post.title +
                "&via" +
                "twitterhanddle"
              }
              className="twitter"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://img.icons8.com/doodle/48/000000/twitter--v1.png"
                alt="twitter icon"
              />
            </a>
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export default BlogPost

export const postQuery = graphql`
  query blogPostBySlug($slug: String!, $imageUrl: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        author
        date(formatString: "MMM Do YYYY")
        tags
        image {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
      fields {
        slug
      }
    }
    file(relativePath: { eq: $imageUrl }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`
