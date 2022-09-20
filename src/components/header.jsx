import React, { Component } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import MenuIcon from "../images/bars-light.inline.svg";
import CloseButton from "../images/xmark-light.inline.svg";

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isActive: false,
		};

		this.toggleClass = this.toggleClass.bind(this);
	}

	toggleClass() {
		this.setState((state) => ({ isActive: !state.isActive }));
	}

	render() {
		return (
			<header className='sticky top-0 bg-white z-50'>
				<div className='container'>
					<div className='row'>
						<div className='shrink-0 basis-6/12 max-w-6/12 lg:basis-4/12 lg:max-w-4/12 p-4'>
							<Link to='/'>
								<StaticImage
									src='../images/logo.png'
									loading='eager'
									width={250}
									alt='Logo of R. Wadhwa &amp; Associates'
								/>
							</Link>
						</div>
						<div className='shrink-0 basis-6/12 max-w-6/12 lg:basis-8/12 lg:max-w-8/12 flex items-center justify-end p-4'>
							<div className='block lg:hidden pointer'>
								<MenuIcon
									className='w-6 h-6 fill-green'
									onClick={this.toggleClass}
								/>
							</div>
							<nav className={`block fixed lg:relative top-0 -right-full lg:right-0 h-full lg:h-auto w-80 lg:w-auto bg-white lg:duration-[0ms] transition-[right] shadow-[0_0_10px_0_rgba(105,105,105,1)] lg:shadow-none ${this.state.isActive ? "right-0 duration-500" : ""}`}>
								<div className='flex justify-end p-4 lg:hidden pointer'>
									<CloseButton
										className='w-8 h-8 fill-green'
										onClick={this.toggleClass}
									/>
								</div>
								<ul className='flex flex-col lg:flex-row gap-x-8'>
									<li>
										<Link
											className='font-semibold text-gray hover:text-green/50 duration-500 p-4 lg:p-0 block lg:inline-block text-xl lg:text-base'
											activeClassName='text-green hover:!text-green'
											to='/'>
											Home
										</Link>
									</li>
									<li>
										<Link
											className='font-semibold text-gray hover:text-green/50 duration-500 p-4 lg:p-0 block lg:inline-block text-xl lg:text-base'
											activeClassName='text-green hover:!text-green'
											to='/about/'>
											About Us
										</Link>
									</li>
									<li>
										<Link
											className='font-semibold text-gray hover:text-green/50 duration-500 p-4 lg:p-0 block lg:inline-block text-xl lg:text-base'
											activeClassName='text-green hover:!text-green'
											to='/our-team/'>
											Our Team
										</Link>
									</li>
									<li>
										<Link
											className='font-semibold text-gray hover:text-green/50 duration-500 p-4 lg:p-0 block lg:inline-block text-xl lg:text-base'
											activeClassName='text-green hover:!text-green'
											to='/#services'>
											Services
										</Link>
									</li>
									<li>
										<Link
											className='font-semibold text-gray hover:text-green/50 duration-500 p-4 lg:p-0 block lg:inline-block text-xl lg:text-base'
											activeClassName='text-green hover:!text-green'
											to='/blog/'>
											Blog
										</Link>
									</li>
									<li>
										<Link
											className='font-semibold text-gray hover:text-green/50 duration-500 p-4 lg:p-0 block lg:inline-block text-xl lg:text-base'
											activeClassName='text-green hover:!text-green'
											to='/contact/'>
											Contact Us
										</Link>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;
