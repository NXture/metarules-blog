import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import Seo from "../components/seo"
import { Badge, Card, CardBody, CardSubtitle } from "reactstrap"
import { GatsbyImage } from "gatsby-plugin-image"
import { slugify } from "../utils/utilityFunctions"
import authors from "../utils/authors"
import { Disqus } from "gatsby-plugin-disqus"

const BlogPost = ({ data, pageContext, location }) => {
  const post = data.markdownRemark.frontmatter
  const author = authors.find(x => x.name === post.author)

  const baseUrl = "https://metarules.tech"
  const siteUrl = "https://metarules.tech"

  const DisqusConfig = {
    url: siteUrl + pageContext.slug,
    identifier: data.markdownRemark.id,
    title: post.title,
  }
  return (
    <Layout
      pageTitle={post.title}
      postAuthor={author}
      authorImage={data.file.childImageSharp.gatsbyImageData}
    >
      <Seo
        author={post.author}
        title={post.title}
        keywords={post.tags}
        description={post.description}
        url={siteUrl}
        pathname={location.pathname}
      />
      <Card>
        <GatsbyImage
          className="card-image-top"
          image={post.image.childImageSharp.gatsbyImageData}
          alt="Posts"
        />
        <CardBody>
          <CardSubtitle>
            <span className="text-info">{post.date}</span> by{" "}
            <span className="text-info">{post.author}</span>
          </CardSubtitle>
          <span style={{ fontStyle: "italic" }}>Tags: </span>
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
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
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
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/fluent/48/000000/facebook-new.png"
                alt="facebook"
              />{" "}
            </a>
          </li>
          <li>
            <a
              href={
                "https://twitter.com/share?url=" +
                baseUrl +
                pageContext.slug +
                "&text=" +
                post.title +
                "&via" +
                "twitterHandle"
              }
              className="twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/color/48/000000/twitter-circled--v1.png"
                alt="twitter"
              />
            </a>
          </li>
          <li>
            <a
              href={
                "https://plus.google.com/share?url=" +
                baseUrl +
                pageContext.slug
              }
              className="google"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/fluent/48/000000/google-plus.png"
                alt="google plus"
              />
            </a>
          </li>
          <li>
            <a
              href={
                "https://www.linkedin.com/shareArticle?url=" +
                baseUrl +
                pageContext.slug
              }
              className="linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/color/48/000000/linkedin.png"
                alt="Linkedin"
              />
            </a>
          </li>
        </ul>
      </div>
      <Disqus config={DisqusConfig} />
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
            gatsbyImageData(transformOptions: { fit: INSIDE })
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
