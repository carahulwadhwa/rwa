import React, { Component } from "react";
import PropTypes from "prop-types";

class Tab extends Component {
	static propTypes = {
		activeTab: PropTypes.string.isRequired,
		label: PropTypes.string.isRequired,
		onClick: PropTypes.func.isRequired,
	};

	onClick = () => {
		const { label, onClick } = this.props;
		onClick(label);
	};

	onKeyDown = () => {
		const { label, onKeyDown } = this.props;
		onKeyDown(label);
	};

	render() {
		const {
			onClick,
			onKeyDown,
			props: { activeTab, label },
		} = this;

		let className = "py-4 lg:py-6 px-6 lg:px-4 border-t-4 lg:border-t-0 lg:border-l-4 border-gray text-gray text-xl font-bold cursor-pointer whitespace-nowrap lg:whitespace-normal";

		if (activeTab === label) {
			className += " tab-active";
		}

		return (
			<li
				className={className}
				onClick={onClick}
				onKeyDown={onKeyDown}>
				{label}
			</li>
		);
	}
}

export default Tab;
