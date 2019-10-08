const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const categories = require('json!./content/categories.json')


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const blogCategories = path.resolve(`./src/templates/blog-categories.js`)
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })

  // make categories page
  categories.map(category => {

  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}



// Make sitemap
const sm = require(`sitemap`)


//const pages = edge.node.frontmatter.path
function pagesToSitemap(pages) {
  const urls = pages.map((p) => {
    if (p.path !== undefined) {
      return {
        url: p.path,
        changefreq: 'daily',
        priority: 0.7
      }
    }
  })
  // remove undefined (template pages)
  return urls.filter(u => u !== undefined)
}

function generateSiteMap(pages) {
  const sitemap = sm.createSitemap({
    hostname: 'http://localhost:8000',
    cacheTime: '60000',
    urls: pagesToSitemap(pages),
  })
  fs.writeFileSync(
    `${__dirname}/public/sitemap.xml`,
    sitemap.toString()
  )
}

exports.onPostBuild = ({pages, callback}) => {
  generateSiteMap(pages)
  callback()
}
