import React from "react";

import Layout from "../components/layout";
import { Seo } from "../components/seo";
import Tabs from "../components/tabs";

const Team = () => {
	return (
		<Layout>
			<section
				id='services'
				className='py-16 px-8 bg-black rounded-tr-10xl'>
				<div className='container'>
					<div className='row'>
						<div className='basis-full max-w-full shrink-0 py-12 px-4'>
							<h2 className='text-4xl lg:text-5xl font-bold text-white leading-tight'>
								Meet Our
								<br />
								Leadership Team
							</h2>
						</div>
					</div>
					<Tabs>
						<div label='CA. Ramesh Wadhwa'>
							<h3 className='text-2xl font-bold pb-2'>CA. Ramesh Wadhwa</h3>
							<p>Founder and Senior Partner of R. Wadhwa &amp; Associates, CA. Ramesh Wadhwa has worked assiduously in both Direct and Indirect Taxes for the past 37 years.</p>
							<p>A Fellow member of the Institute of Chartered Accountants of India, CA. Ramesh Wadhwa has contributed a plethora of articles and critiques in several professional journals and publications, sharing his hands-on knowledge of the finer nuances of Direct and Indirect Tax practice in India with the core intention of contributing to the growth of the profession of Chartered Accountancy. A B.Com graduate, he has also completed the Post Qualification Course (PQC) on Information System Audit (ISA) of the Institute of Chartered Accountants of India.</p>
						</div>
						<div label='CA. Lavneet Relan'>
							<h3 className='text-2xl font-bold pb-2'>CA. Lavneet Relan</h3>
							<p>An astute professional, CA. Lavneet Relan has risen from a humble and conscientious Article Assistant to an indispensable resource at R. Wadhwa &amp; Associates.</p>
							<p>Having spent over a decade with the firm, Lavneet has developed in-depth knowledge of Taxation and Accounting. A postgraduate in Commerce, Lavneet has also authored a book on the Income Tax Act, 1961 called “Understanding Indian Income Tax Law: Income tax Basics.” He achieved this remarkable feat at the modest age of 25.</p>
						</div>
						<div label='CA. Rahul Wadhwa'>
							<h3 className='text-2xl font-bold pb-2'>CA. Rahul Wadhwa</h3>
							<p>The newest member of the team, CA. Rahul Wadhwa has brought a fresh perspective and driven work ethic to the R. Wadhwa team. A graduate in Economics from the University of Delhi, he has shown a keen interest in Direct and Indirect Tax litigation. He has also assisted CA. Ramesh Wadhwa on several cases. He has also handled several other assignments such as preparing a legal opinion, reply to show cause notices, appeals, income & other tax returns, etc.</p>
							<p>CA. Rahul Wadhwa has completed the Post Qualification Diploma In International Taxation and the Certificate Course on Goods and Services Tax hosted by the Institute of Chartered Accountants of India.</p>
						</div>
					</Tabs>
				</div>
			</section>
		</Layout>
	);
};

export default Team;

export const Head = () => (
	<Seo
		title='Our Team'
		description='Meet the people behind R Wadhwa &amp; Associates'
	/>
);
