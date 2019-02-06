const path = require('path')

exports.createPages = ({graphql, actions }) => {
  
  const { createPage } = actions

  const loadPosts =  new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
    resolve(
      graphql(`
        {
          allContentfulBlogPost(limit: 100){
            edges {
              node {
                slug
              }
            }
          }
        }
      `).then((result) => {
        if(result.errors){
          reject(result.errors)
        }
        const posts = result.data.allContentfulBlogPost.edges
        posts.forEach(({node}, index) => {
          const prev = index === 0 ? null : posts[index - 1].node
          const next = index === (posts.length - 1) ? null : posts[index + 1].node
          createPage({
            path: node.slug,
            component: blogPostTemplate, 
            context: {
              slug: node.slug,
              prev,
              next
            }
          })
        })
      })
      )
    }) 

    const loadPages = new Promise((resolve, reject) => {
      const pageTemplate = path.resolve(`src/templates/page.js`)
      resolve(
        graphql(`
          {
            allContentfulPage{
              edges{
                node{
                  slug
                }
              }
            }
          }
        `).then(result => {
          if(result.errors){
            reject(result.errors)
          }
          result.data.allContentfulPage.edges.forEach(({node})=>{
            createPage({
              path: node.slug,
              component: pageTemplate, 
              context: {
                slug: node.slug
              }
            })
          })
        })
      )
    })
  return Promise.all([loadPosts, loadPages])
}

// exports.createPages = ({ graphql, actions }) => {

//   const { createPage } = actions

//   const loadPosts = new Promise((resolve, reject) => {
//     graphql(`
//       {
//         allContentfulBlogPost(
//           sort: { fields: [publishDate], order: DESC }
//           limit: 10000
//         ) {
//           edges {
//             node {
//               slug
//               publishDate 
//             }
//           }
//         }
//       }
//     `).then( result => {
//       if(result.errors){
//         reject(result.errors)
//       }
//        // Create each post
//       result.data.allContentfulBlogPost.edges.forEach(({node}) => {
//         createPage({
//           path: node.slug,
//           component: blogPostTemplate,
//           context: {
//             slug: node.slug
//           },
//         })
//       })
//       resolve()
//     })
//   })

//   const loadPages = new Promise((resolve, reject) => {
//     graphql(`
//       {
//         allContentfulPage {
//           edges {
//             node {
//               slug
//             }
//           }
//         }
//       }
//     `).then(result => {
//       const pages = result.data.allContentfulPage.edges
//       pages.map(({ node }) => {
//         createPage({
//           path: `${node.slug}/`,
//           component: path.resolve(`./src/templates/page.js`),
//           context: {
//             slug: node.slug,
//           },
//         })
//       })
//       resolve()
//     })
//   })

//   return Promise.all([loadPosts, loadPages])
// }