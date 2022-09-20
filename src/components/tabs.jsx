import React, { Component } from "react";
import PropTypes from "prop-types";

import Tab from "./tab";

class Tabs extends Component {
	static propTypes = {
		children: PropTypes.instanceOf(Array).isRequired,
	};

	constructor(props) {
		super(props);

		this.state = {
			activeTab: this.props.children[0].props.label,
		};
	}

	onClickTabItem = (tab) => {
		this.setState({ activeTab: tab });
	};

	onKeyDownTabItem = (tab) => {
		this.setState({ activeTab: tab });
	};

	render() {
		const {
			onClickTabItem,
			onKeyDownTabItem,
			props: { children },
			state: { activeTab },
		} = this;

		return (
			<div className='row'>
				<div className='basis-full max-w-full lg:basis-2/12 lg:max-w-2/12 shrink-0 px-4'>
					<ul className='flex lg:block flex-nowrap mb-4 lg:mb-0 overflow-auto'>
						{children.map((child, i) => {
							const { label } = child.props;

							return (
								<Tab
									activeTab={activeTab}
									key={label}
									label={label}
									onClick={onClickTabItem}
									onKeyDown={onKeyDownTabItem}
								/>
							);
						})}
					</ul>
				</div>
				<div className='basis-full max-w-full lg:basis-10/12 lg:max-w-10/12 shrink-0 px-4'>
					<div className='relative text-white border-t-2 border-white py-8 child:mb-4'>
						{children.map((child) => {
							if (child.props.label !== activeTab) return undefined;
							return child.props.children;
						})}
					</div>
				</div>
			</div>
		);
	}
}

export default Tabs;
