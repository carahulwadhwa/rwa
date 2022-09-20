import React from "react";
import { Link } from "gatsby";

import GreenArrow from "../images/green-arrow.inline.svg";

const ArrowButton = ({ to, content, buttonClasses, iconClasses, size }) => {
	let sizeBool = true;

	if (size === "sm") {
		sizeBool = false;
	}

	return (
		<Link
			to={to}
			className={`text-blue hover:text-green text-base ${sizeBool ? `lg:text-xl` : null} font-bold inline-flex items-center mt-4 fill-green hover:fill-blue duration-500 ${buttonClasses}`}>
			{content}
			<GreenArrow className={`ml-2 w-6 h-6 ${sizeBool ? `lg:w-10 lg:h-10 lg:ml-4` : null} ${iconClasses}`} />
		</Link>
	);
};

export default ArrowButton;
