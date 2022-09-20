import * as React from "react";

import Layout from "../components/layout";
import { Seo } from "../components/seo";
import ArrowButton from "../components/arrow-button";

import NotFound from "../images/not-found.inline.svg";

const PageNotFound = () => {
	return (
		<Layout>
			<div>
				<NotFound className='w-full' />
			</div>
			<div className='container p-8'>
				<div className='row'>
					<div className='basis-full max-w-full shrink-0 px-4 text-center'>
						<h1 className='text-9xl font-bold pt-4 pb-8'>404</h1>
						<h2 className='text-3xl font-bold pb-2'>Uh oh! I think you're lost.</h2>
						<p className='text-xl'>it looks like the page you're looking for doesn't exist</p>
						<ArrowButton
							to='/'
							content='Go back home'
							buttonClasses='justify-center'
						/>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default PageNotFound;

export const Head = () => (
	<Seo
		title='Page Not Found'
		description="Oops! We couldn't find that page!"
	/>
);
