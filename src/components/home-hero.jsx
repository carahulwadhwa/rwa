import React from "react";

import ArrowButton from "./arrow-button";

const Hero = () => {
	return (
		<section className="bg-[url('../images/hero-image.jpg')] bg-cover bg-no-repeat relative">
			<div className='absolute h-full w-full z-0'>
				<div className='flex flex-wrap h-full w-full'>
					<div className='mt-48 rounded-tr-10xl bg-white basis-full max-w-full shrink-0 md:basis-9/12 md:max-w-9/12 lg:basis-7/12 lg:max-w-7/12'></div>
				</div>
			</div>
			<div className='container relative z-10'>
				<div className='row'>
					<div className='mt-48 basis-full max-w-full shrink-0 md:basis-9/12 md:max-w-9/12 lg:basis-7/12 lg:max-w-7/12 px-4'>
						<div className='p-8 lg:p-16'>
							<h1 className='mb-4 text-4xl lg:text-5xl text-blue font-bold'>A 360&deg; Financial Solution</h1>
							<p>We are committed to providing tailor-made services for each client's individual needs. We take care of all the essentials for you and offer proactive advice on how you can improve your personal or business finances.</p>
							<ArrowButton
								to='/contact/'
								content='Book an Appointment'
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
