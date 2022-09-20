const path = require(`path`);
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
	reporter.info(`The website has been built!`);
};
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const postTemplate = path.resolve(`src/templates/blogPost.jsx`);

	return graphql(`
		query {
			allContentfulBlogPost(sort: { fields: title, order: DESC }) {
				edges {
					node {
						slug
					}
				}
			}
		}
	`).then((result) => {
		if (result.errors) {
			throw result.errors;
		}

		// Create blog posts
		const posts = result.data.allContentfulBlogPost.edges;

		posts.forEach(({ node, index }) => {
			createPage({
				path: `/blog/${node.slug}`,
				component: postTemplate,
				context: {
					slug: node.slug,
				},
			});
		});

		// Create blog post list pages
		const postsPerPage = 6;
		const numPages = Math.ceil(posts.length / postsPerPage);

		Array.from({ length: numPages }).forEach((_, i) => {
			createPage({
				path: i === 0 ? `/blog/` : `/blog/${i + 1}`,
				component: path.resolve("./src/templates/blog.jsx"),
				context: {
					limit: postsPerPage,
					skip: i * postsPerPage,
					numPages,
					currentPage: i + 1,
				},
			});
		});
	});
};
