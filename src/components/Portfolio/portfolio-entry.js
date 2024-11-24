import React from "react";
import styled from "styled-components";
import Spinner from "react-spinkit";
import media from "../../utils/style-utils";

const Logo = styled.img`
  height: auto;
  width: auto;
  max-width: 100%;
  ${media.phone`margin-bottom: 10px`};
  margin: 0 auto;
`;

const PortfolioLink = styled.a`
  text-decoration: none;
`;

const PortfolioEntryContainer = styled.div`
  margin-bottom: 100px;
  ${media.phone`margin-bottom: 50px`};
  display: flex;
  align-items: center;
  justify-content: center;
  ${media.phone`display: block`};
  font-size: 16px ${media.phone`font-size: 14px`};
`;

const H3 = styled.h3`
  font-size: 28px;
  margin: 0 0 0px 0;
  font-weight: bold;
`;

const LeftColumn = styled.div`
  text-align: center;
`;

const Description = styled.div``;
const Technologies = styled.div`
  margin-top: 20px;
`;

const Platforms = styled.div`
  margin-bottom: 20px;
`;

const RightColumn = styled.div``;

const PortfolioEntry = props => 
	<PortfolioEntryContainer className="row">
		<LeftColumn className="six columns">
			<PortfolioLink target="_blank" href={props.portfolioItem.url}>
				{` `}
				<Logo
					src={`/img/portfolio/${props.portfolioItem.logo}`}
					alt="{props.portfolioItem.title} Logo"
					loader={<Spinner name="folding-cube" color="steelblue" />}
				/>
			</PortfolioLink>
		</LeftColumn>
		<RightColumn className="six columns">
			<div>
				<H3>
					<PortfolioLink target="_blank" href={props.portfolioItem.url}>
						{props.portfolioItem.title}
					</PortfolioLink>
				</H3>
				<Platforms>{props.portfolioItem.platforms}</Platforms>
				<Description>{props.portfolioItem.description}</Description>
				<PortfolioLink target="_blank" href={props.portfolioItem.url}>
          Launch Site
				</PortfolioLink>
				<Technologies>
					<strong>Technology used:</strong> {props.portfolioItem.technology}
				</Technologies>
				<a
					rel="noopener noreferrer"
					target="_blank"
					href={props.portfolioItem.git}
				>
					{props.portfolioItem.git}
				</a>
			</div>
		</RightColumn>
	</PortfolioEntryContainer>

;

export default PortfolioEntry;
