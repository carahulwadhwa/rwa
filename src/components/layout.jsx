import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";
import DisclaimerPopup from "./disclaimer-popup";

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<DisclaimerPopup />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
