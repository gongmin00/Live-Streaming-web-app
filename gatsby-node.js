/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.onCreatePage = ({
    page,
    actions
  }) => {
    const {
      createPage
    } = actions
    // Make the front page match everything client side.
    // Normally your paths should be a bit more judicious.
    if (page.path === `/`) {
      page.matchPath = `/*`
      createPage(page)
    }
  }