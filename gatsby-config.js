require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
	siteMetadata: {
		title: `R Wadhwa & Associates`,
		description: `A 360 degree financial solution!`,
		image: `/logo-icon.jpg`,
		siteUrl: `https://www.carwadhwa.com`,
	},
	plugins: [
		"gatsby-plugin-postcss",
		"gatsby-plugin-image",
		"gatsby-plugin-sitemap",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: `gatsby-source-contentful`,
			options: {
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
				spaceId: process.env.CONTENTFUL_SPACE_ID,
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images/",
			},
			__key: "images",
		},
		{
			resolve: "gatsby-plugin-react-svg",
			options: {
				rule: {
					include: /\.inline\.svg$/,
				},
			},
		},
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				icon: "./src/images/favicon.png",
			},
		},
	],
};
