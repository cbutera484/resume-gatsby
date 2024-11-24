import React from "react";
import styled from "styled-components";
import Spinner from "react-spinkit";
import media from "../../utils/style-utils";

const Logo = styled.img`
  height: auto;
  width: auto;
  max-width: 60%;
  ${media.phone`margin-bottom: 10px`};
  margin: 0 auto;
`;

const ResumeEntryContainer = styled.div`
  margin-bottom: 100px;
  ${media.phone`margin-bottom: 50px`};
  display: flex;
  align-items: center;
  justify-content: center;
  ${media.phone`display: block`};
  font-size: 16px;
  ${media.phone`font-size:  14px;`};
`;

const H3 = styled.h3`
  font-size: 28px;
  margin: 0 0 0px 0;
  font-weight: bold;
`;

const LeftColumn = styled.div`
  text-align: center;
`;

const Year = styled.div``;
const Location = styled.div``;
const Position = styled.div`
  font-weight: bold;
  margin-top: 10px;
`;

const Description = styled.div``;
const Technologies = styled.div`
  margin-top: 20px;
`;

const RightColumn = styled.div``;

const ResumeEntry = props => 
	<ResumeEntryContainer className="row">
		<LeftColumn className="five columns">
			<Logo
				src={`/img/resume/logos/${props.resumeItem.logo}`}
				alt="{props.resumeItem.title} Logo"
				loader={<Spinner name="folding-cube" color="steelblue" />}
			/>
		</LeftColumn>
		<RightColumn className="seven columns">
			<div>
				<H3>{props.resumeItem.title}</H3>
				<Location>{props.resumeItem.location}</Location>
				<Year>{props.resumeItem.year}</Year>
				<Position>{props.resumeItem.position}</Position>
				<Description>{props.resumeItem.description}</Description>

				<Technologies>
					<strong>Technology used:</strong> {props.resumeItem.technology}
				</Technologies>
			</div>
		</RightColumn>
	</ResumeEntryContainer>

;

export default ResumeEntry;
