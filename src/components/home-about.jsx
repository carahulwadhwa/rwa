import React from "react";

import ArrowButton from "./arrow-button";
import OurTeam from "../images/our-team.inline.svg";
import WhoWeAre from "../images/who-we-are.inline.svg";
import Card from "./card";

const HomeAbout = () => {
	return (
		<section className='bg-light_gray py-32'>
			<div className='container'>
				<div className='row justify-evenly'>
					<div className='basis-full max-w-full lg:basis-5/12 lg:max-w-5/12 shrink-0 mb-16 lg:mb-0 px-4'>
						<Card
							color='white'
							radius='tl'>
							<WhoWeAre className='m-auto max-w-[200px] w-full' />
							<h2 className='text-center text-green text-2xl font-bold mt-8 mx-2 mb-4'>Who We Are</h2>
							<p className='text-center'>R. Wadhwa &amp; Associates is one of the leading Chartered Accountancy firms specializing in Financial &amp; Tax Advisory. The firm also provides a gamut of services like accounting, auditing, financial services and much more.</p>
							<div className='text-right'>
								<ArrowButton
									to='/about/'
									content='Read Our Story'
									buttonClasses='mr-4'
								/>
							</div>
						</Card>
					</div>
					<div className='basis-full max-w-full lg:basis-5/12 lg:max-w-5/12 shrink-0 px-4'>
						<Card
							color='white'
							radius='br'>
							<OurTeam className='m-auto max-w-[200px] w-full' />
							<h2 className='text-center text-green text-2xl font-bold mt-8 mx-2 mb-4'>Our Team</h2>
							<p className='text-center'>The unique professional background of the team at R. Wadhwa &amp; Associates helps us to approach problems in innovative ways and make sure to handle all matters promptly and effectively.</p>
							<div className='text-right'>
								<ArrowButton
									to='/our-team/'
									content='Meet our Team'
									buttonClasses='mr-4'
								/>
							</div>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HomeAbout;
