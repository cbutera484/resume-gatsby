import React from "react";
import MainNav from "./nav";
import Link from "gatsby-link";
import styled from "styled-components";
import media from "../../utils/style-utils";

const Container = styled.div`
  margin: 0 auto;
  max-width: 1366px;
  padding: 1rem 1rem;
`;

const H1 = styled.h1`
  margin: 1rem 0;
  font-size: 28px
    ${media.phone`margin: 0 auto; padding-bottom: 20px;text-align:center; font-size: 20px; margin: 0`};
`;
const H1Link = styled( Link )`
  color: #fff;
  text-decoration: none;
  &:hover {
    color: #222;
  }
  ${media.phone`&:hover {
    color: #fff;
  }`};
`;

const Background = styled.div`
  background: hsl(216, 60%, 52%);
  box-shadow: 1px 2px 7px #666;
  top: 0;
  z-index: 1;
  position: sticky;
  ${media.phone`top: -50px`};
`;

class Header extends React.Component {
	render () {
		return (
			<Background>
				<Container className="container">
					<div className="row">
						<div className="four columns">
							<H1>
								<H1Link to="/"> Chris Butera</H1Link>
							</H1>
						</div>
						<div className="eight columns">
							<MainNav />
						</div>
					</div>
				</Container>
			</Background>
		);
	}
}

export default Header;
