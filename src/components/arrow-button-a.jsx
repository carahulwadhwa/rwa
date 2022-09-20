import React from "react";

import GreenArrow from "../images/green-arrow.inline.svg";

const ArrowButtonA = ({ to, content, buttonClasses, iconClasses }) => {
	return (
		<a
			href={to}
			className={`text-blue hover:text-green text-base font-bold inline-flex items-center mt-2 mr-4 fill-green hover:fill-blue duration-500 ${buttonClasses}`}
			target='_blank'
			rel='noreferrer'>
			{content}
			<GreenArrow className={`ml-2 w-6 h-6 ${iconClasses}`} />
		</a>
	);
};

export default ArrowButtonA;
