import React from "react";

const Card = ({ children, color, radius }) => {
	return (
		<div className={`p-8 lg:p-16 mb-4 h-full bg-${color} rounded-${radius}-10xl`}>
			<div>{children}</div>
		</div>
	);
};

export default Card;
