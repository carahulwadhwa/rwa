import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Cookies from "js-cookie";

const DisclaimerPopup = () => {
	const [isOpen, setIsOpen] = React.useState(false);

	React.useEffect(() => {
		setTimeout(() => {
			setIsOpen(true);
		}, 3000);
	}, []);

	const handleButtonClick = () => {
		setIsOpen(false);
		Cookies.set("Disclaimer", "true", { expires: 365 });
	};

	const disclaimerCookie = Cookies.get("Disclaimer");

	if (disclaimerCookie) {
		console.log("Cookie set already");
		return null;
	}

	return (
		<Transition.Root
			appear={true}
			show={isOpen}
			as={Fragment}
			enter='ease-out delay-1000 duration-300'
			enterFrom='opacity-0'
			enterTo='opacity-100'
			leave='ease-in duration-200'
			leaveFrom='opacity-100'
			leaveTo='opacity-0'>
			<Dialog
				as='div'
				className='relative z-10'
				onClose={handleButtonClick}>
				<Transition.Child
					as={Fragment}
					enter='ease-out delay-1000 duration-300'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='ease-in duration-200'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'>
					<div className='fixed inset-0 bg-light_gray/80 transition-opacity' />
				</Transition.Child>

				<div className='fixed inset-x-0 bottom-0 top-32 z-10 overflow-y-auto'>
					<div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
						<Transition.Child
							as={Fragment}
							enter='ease-out duration-300'
							enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
							enterTo='opacity-100 translate-y-0 sm:scale-100'
							leave='ease-in duration-200'
							leaveFrom='opacity-100 translate-y-0 sm:scale-100'
							leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'>
							<Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl'>
								<div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
									<div className='sm:flex sm:items-center sm:justify-center'>
										<div className='mt-3 text-center sm:mt-0 sm:text-left'>
											<Dialog.Title
												as='h3'
												className='text-3xl px-4 font-bold text-blue'>
												Disclaimer
											</Dialog.Title>
											<div className='my-4 px-4'>
												<p className='mb-4'>As per the provisions of the Code of Ethics issued by the ICAI, we are not permitted to solicit work and advertise. The user acknowledges the following:</p>
												<ul class='list-disc child:mb-3 child:ml-4'>
													<li>There has been no advertisement, personal communication, solicitation, invitation or inducement of any sort whatsoever from us or any of our members to solicit any work through this website.</li>
													<li>The user wishes to gain more information about us for his/her own information and use.</li>
													<li>The information about us is provided to the user only on his/her specific request and any information obtained or materials downloaded from this website is completely at the user's volition and any transmission, receipt or use of this site would not create any Chartered Accountant-Client relationship.</li>
												</ul>
												<div className='flex flex-col items-center mt-6'>
													<button
														onClick={handleButtonClick}
														className='py-2 px-4 duration-700 bg-green text-white font-bold rounded-tl-xl rounded-br-xl border-2 border-green border-solid hover:bg-white hover:text-green'>
														I Accept
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
};

export default DisclaimerPopup;
