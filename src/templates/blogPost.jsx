import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";

import Layout from "../components/layout";
import { Seo } from "../components/seo";

export const query = graphql`
	query ($slug: String) {
		post: contentfulBlogPost(slug: { eq: $slug }) {
			title
			slug
			content {
				raw
			}
			bannerImage {
				url
			}
			createdAt(formatString: "DD MMM, YYYY")
		}
	}
`;

const Post = ({ data }) => {
	const title = data.post.title;
	const postContent = data.post.content;
	const bgImage = data.post.bannerImage;
	const date = data.post.createdAt;

	const options = {
		renderMark: {
			[MARKS.BOLD]: (text) => <b className='font-bold'>{text}</b>,
		},
		renderNode: {
			[INLINES.HYPERLINK]: (node, children) => {
				const { uri } = node.data;
				return (
					<a
						href={uri}
						target='_blank'
						rel='noreferrer'
						className='text-green hover:text-blue duration-500'>
						{children}
					</a>
				);
			},
			[BLOCKS.PARAGRAPH]: (node, children) => {
				return <p className='pb-4'>{children}</p>;
			},
			[BLOCKS.EMBEDDED_ASSET]: (node) => {
				const { gatsbyImageData, description } = node.data.target;
				return (
					<GatsbyImage
						image={getImage(gatsbyImageData)}
						alt={description}
					/>
				);
			},
		},
	};

	return (
		<Layout>
			<section
				style={{ backgroundImage: `url(${bgImage.url})` }}
				className='bg-cover bg-no-repeat relative'>
				<div className='absolute h-full w-full z-0'>
					<div className='flex flex-wrap h-full w-full'>
						<div className='mt-80 rounded-tr-10xl bg-white basis-full max-w-full shrink-0 md:basis-9/12 md:max-w-9/12 lg:basis-7/12 lg:max-w-7/12'></div>
					</div>
				</div>
				<div className='container relative z-10'>
					<div className='row'>
						<div className='mt-80 basis-full max-w-full shrink-0 md:basis-9/12 md:max-w-9/12 lg:basis-7/12 lg:max-w-7/12 px-4'>
							<div className='p-8 lg:p-16 !pl-0'>
								<h1 className='mb-4 text-4xl lg:text-5xl text-blue font-bold'>{title}</h1>
								<p className='text-sm text-blue'>{date}</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<div className='container'>
				{postContent && (
					<div className='row'>
						<div className='basis-full max-w-full shrink-0 px-4 pb-8 pt-12'>
							<div className='chapter-content'>{renderRichText(postContent, options)}</div>
						</div>
					</div>
				)}
			</div>
		</Layout>
	);
};

export default Post;

export const Head = () => <Seo />;
