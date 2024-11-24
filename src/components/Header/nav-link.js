import React from "react";
import PropTypes from "prop-types";
import media from "../../utils/style-utils";
import styled from "styled-components";
import Link from "gatsby-link";

const NavLink = styled( Link )`
  padding: 1rem;
  color: #fff;
  text-decoration: none;
  font-size: 28px;

  &:hover {
    color: #222;
  }
  .is-active {
    color: #222;
  }
  ${media.tablet`font-size: 24px;`};
  ${media.phone`padding: 0: font-size: 20px;`};
`;

class MainNavLink extends React.Component {
	render () {
		return (
			<NavLink activeClassName="is-active" to={this.props.href}>
				{this.props.text}
			</NavLink>
		);
	}
}

MainNavLink.propTypes = {
	text: PropTypes.string,
	href: PropTypes.string
};

// const MainNavLink = props =>
// 	<li
// 		style={{

// 		}}
// 	>
// 		{props.text}
// 	</li>

// ;

export default MainNavLink;
