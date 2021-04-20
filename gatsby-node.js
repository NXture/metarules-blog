const path = require(`path`)
const { slugify } = require("./src/utils/utilityFunctions")
const { createFilePath } = require(`gatsby-source-filesystem`)
const authors = require(`./src/utils/authors`)
const _ = require(`lodash`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const templates = {
    singlePost: path.resolve(`./src/templates/single-post.js`),
    tagsPage: path.resolve(`./src/templates/tags-page.js`),
    tagPosts: path.resolve(`./src/templates/tag-posts.js`),
    postList: path.resolve(`./src/templates/post-list.js`),
    authorPosts: path.resolve(`./src/templates/author-posts.js`),
  }

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              author
              tags
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: templates.singlePost,
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
        imageUrl: authors.find(x => x.name === node.frontmatter.author)
          .imageUrl,
      },
    })

    let tags = []
    _.each(result.data.allMarkdownRemark.edges, edge => {
      if (_.get(edge, "node.frontmatter.tags")) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })

    let tagPostCounts = {}
    tags.forEach(tag => {
      tagPostCounts[tag] = (tagPostCounts[tag] || 0) + 1
    })

    tags = _.uniq(tags)

    createPage({
      path: `/tags`,
      component: templates.tagsPage,
      context: {
        tags,
        tagPostCounts,
      },
    })

    //Create tag Posts Pages
    tags.forEach(tag => {
      createPage({
        path: `/tag/${slugify(tag)}`,
        component: templates.tagPosts,
        context: {
          tag,
        },
      })
    })

    const postsPerPage = 2
    const numberOfPages = Math.ceil(
      result.data.allMarkdownRemark.edges.length / postsPerPage
    )

    Array.from({ length: numberOfPages }).forEach((_, index) => {
      const isFirstPage = index === 0
      const currentPage = index + 1

      if (isFirstPage) return

      createPage({
        path: `/page/${currentPage}`,
        component: templates.postList,
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          currentPage: currentPage,
          numberOfPages: numberOfPages
        },
      })
    })

    authors.forEach(author => {
      createPage({
        path: `/author/${slugify(author.name)}`,
        component: templates.authorPosts,
        context: {
          authorName: author.name,
          imageUrl: author.imageUrl,
        },
      })
    })
  })
}
