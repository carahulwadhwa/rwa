import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import { Seo } from "../components/seo";
import ArrowButton from "../components/arrow-button";

import ArrowRight from "../images/arrow-right.inline.svg";
import ArrowLeft from "../images/arrow-left.inline.svg";

class Blog extends React.Component {
	render() {
		const { data } = this.props;
		const posts = data.posts.edges;
		const { currentPage, numPages } = this.props.pageContext;
		const isFirst = currentPage === 1;
		const isLast = currentPage === numPages;
		const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString();
		const nextPage = (currentPage + 1).toString();

		return (
			<Layout>
				<section className='py-16 px-8 rounded-tr-10xl'>
					<div className='container'>
						<div className='row'>
							<div className='basis-full max-w-full shrink-0 px-4 pt-16 pb-12'>
								<h2 className='text-4xl mb-4 lg:text-5xl font-bold text-blue leading-tight'>From our Blog</h2>
							</div>
						</div>
						<div className='row gap-y-8'>
							{posts.map(({ node }) => {
								return (
									<div
										key={node.slug}
										className='basis-full max-w-full shrink-0 p-4 md:basis-6/12 md:max-w-6/12 lg:basis-4/12 lg:max-w-4/12'>
										<div className='flex flex-col h-full rounded-tl-10xl rounded-br-10xl shadow-lg'>
											<GatsbyImage
												image={node.bannerImage.gatsbyImageData}
												className='h-44 rounded-tl-10xl'
												alt={node.bannerImage.description}
											/>
											<div className='flex-1 flex flex-col justify-between p-4 pb-8'>
												<div>
													<div className='text-gray/75 text-xs'>{node.createdAt}</div>
													<Link
														className='text-xl font-bold'
														to={`/blog/${node.slug}/`}>
														{node.title}
													</Link>
												</div>
												<ArrowButton
													to={`/blog/${node.slug}/`}
													content='Read The Post'
													buttonClasses='mr-4'
													size='sm'
												/>
											</div>
										</div>
									</div>
								);
							})}
						</div>
						<div className='row'>
							<div className='flex justify-between w-full mt-8 border-t border-light_gray border-solid'>
								{!isFirst ? (
									<Link
										to={`/blog/${prevPage}`}
										className='p-4'
										rel='prev'>
										<ArrowLeft className='w-6 h-6 fill-gray hover:fill-green duration-500' />
									</Link>
								) : (
									<span>&nbsp;</span>
								)}
								<ul className='flex'>
									{Array.from({ length: numPages }, (_, i) => (
										<li key={`pagination-number${i + 1}`}>
											<Link
												className={`block p-4 text-gray border-t-2 border-solid duration-500 ${i + 1 === currentPage ? "border-green text-green" : "border-transparent hover:text-green"}`}
												to={`/blog/${i === 0 ? "" : i + 1}`}>
												{i + 1}
											</Link>
										</li>
									))}
								</ul>
								{!isLast ? (
									<Link
										to={`/blog/${nextPage}`}
										className='p-4'
										rel='next'>
										<ArrowRight className='w-6 h-6 fill-gray hover:fill-green duration-500' />
									</Link>
								) : (
									<span>&nbsp;</span>
								)}
							</div>
						</div>
					</div>
				</section>
			</Layout>
		);
	}
}

export default Blog;

export const query = graphql`
	query BlogPostsQuery($skip: Int!, $limit: Int!) {
		posts: allContentfulBlogPost(sort: { fields: title, order: DESC }, limit: $limit, skip: $skip) {
			edges {
				node {
					slug
					title
					createdAt(formatString: "DD MMM, YYYY")
					bannerImage {
						gatsbyImageData
						description
					}
				}
			}
		}
	}
`;

export const Head = () => (
	<Seo
		title='Blog Page'
		description='All our thoughts in one place'
	/>
);
