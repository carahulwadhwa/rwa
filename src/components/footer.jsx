import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {
	return (
		<footer className='py-14'>
			<div className='container'>
				<div className='row'>
					<div className='basis-full max-w-full md:basis-5/12 md:max-w-5/12 shrink-0 p-4 text-center md:text-left'>
						<StaticImage
							src='../images/logo.png'
							loading='eager'
							width={250}
							alt='Logo of R. Wadhwa &amp; Associates'
						/>
					</div>
					<div className='basis-full max-w-full md:basis-7/12 md:max-w-7/12 shrink-0 flex items-center px-4'>
						<div className='w-full'>
							<div className='border-b-2 border-black border-solid'>
								<nav className='py-4 flex md:block justify-center md:justify-start'>
									<ul className='flex flex-col text-center md:flex-row p-4 md:p-0 gap-y-4 md:gap-x-8'>
										<li>
											<Link
												className='font-semibold text-gray hover:text-green duration-500 md:text-sm lg:text-base'
												to='/'>
												Home
											</Link>
										</li>
										<li>
											<Link
												className='font-semibold text-gray hover:text-green duration-500 md:text-sm lg:text-base'
												to='/about/'>
												About Us
											</Link>
										</li>
										<li>
											<Link
												className='font-semibold text-gray hover:text-green duration-500 md:text-sm lg:text-base'
												to='/our-team/'>
												Our Team
											</Link>
										</li>
										<li>
											<Link
												className='font-semibold text-gray hover:text-green duration-500 md:text-sm lg:text-base'
												to='/#services'>
												Services
											</Link>
										</li>
										<li>
											<Link
												className='font-semibold text-gray hover:text-green duration-500 md:text-sm lg:text-base'
												to='/blog/'>
												Blog
											</Link>
										</li>
										<li>
											<Link
												className='font-semibold text-gray hover:text-green duration-500 md:text-sm lg:text-base'
												to='/contact/'>
												Contact Us
											</Link>
										</li>
									</ul>
								</nav>
							</div>
							<div className='py-4 flex flex-col md:flex-row gap-y-4 md:gap-y-0 items-center justify-between'>
								<p className='text-xs font-bold'>
									Copyright &copy; R. Wadhwa Associates | <Link to='/privacy-policy'>Privacy Policy</Link>
								</p>
								<p className='text-xs font-bold'>
									Designed &amp; Developed by{" "}
									<a
										href='https://establishonline.io'
										target='_blank'
										rel='noreferrer'>
										EstablishOnline.io
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
