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
  font-size: calc(1.5vw + 1.5vh + 0.3vmin);
  ${media.phone`margin: 0 auto; padding-bottom: 20px;text-align:center; font-size: calc(2.0vw + 2.0vh + 0.9vmin); margin: 0`};
`;
const H1Link = styled( Link )`
  color: #fff;
  text-decoration: none;
`;

const Background = styled.div`
  background: hsl(216, 60%, 52%);
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
