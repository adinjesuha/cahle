const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const loadPosts = new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
    resolve(
      graphql(`
        {
          allContentfulBlogPost(limit: 100) {
            edges {
              node {
                slug
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        const posts = result.data.allContentfulBlogPost.edges
        posts.forEach(({ node }, index) => {
          const prev = index === 0 ? null : posts[index - 1].node
          const next = index === posts.length - 1 ? null : posts[index + 1].node
          createPage({
            path: `noticias-y-eventos/${node.slug}`,
            component: blogPostTemplate,
            context: {
              slug: node.slug,
              prev,
              next,
            },
          })
        })
      })
    )
  })
  return Promise.all([loadPosts])
}

