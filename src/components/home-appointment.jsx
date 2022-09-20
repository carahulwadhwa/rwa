import React from "react";
import Form from "./appointment-form";

import Card from "./card";

const HomeAppointment = () => {
	return (
		<section className='bg-light_gray py-32 bg-[url("../images/appointment-image.jpg")] bg-cover bg-no-repeat relative'>
			<div className='container'>
				<div className='row justify-center'>
					<div className='basis-full max-w-full shrink-0'></div>
				</div>
				<div className='row justify-center'>
					<div className='basis-11/12 max-w-11/12 md:basis-8/12 md:max-w-8/12 lg:basis-6/12 lg:max-w-6/12 xl:basis-5/12 xl:max-w-5/12 shrink-0 px-4'>
						<Card
							color='white'
							radius='br'>
							<h2 className='text-3xl text-center text-blue font-bold mb-8'>Request an Appointment</h2>
							<Form
								bg='transparent'
								text='gray'
							/>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HomeAppointment;
