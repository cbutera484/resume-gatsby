import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import HeadShotImage from "../img/headshot-1.jpg";
import media from "../utils/style-utils";

const H3 = styled.h3`
  text-align: center;
  margin-top: 25px;
  font-weight: normal;
`;

const HeadShot = styled.img`
  border-radius: 5000px;
  background-color: #ccc;
  max-width: 15%;
  height: auto;
  width: auto;
  margin: 0 auto;
  display: block;
  box-shadow: 3px 7px 14px #666;
  ${media.phone`max-width: 40%;`};
`;

const IndexPage = () => 
	<div>
		<HeadShot
			src={HeadShotImage}
			alt="Chris Butera Headshot"
			className="headshot"
		/>

		<H3>Lead Front-End Engineer</H3>
		<p>
      Hi, I{`'`}m Chris. A Front-End Engineer based in New York with almost 20
      years professional experience building highly scalable, award winning
      websites.
		</p>
		<p>
      My current toolset includes{` `}
			<strong>Javascript, React, Vue, Svelte, Vite, HTML5/CSS3, Webpack</strong>
			{` `}and I also have experience with <strong>PHP, Laravel,</strong> and
      various content management systems including{` `}
			<strong>Joomla, Wordpress, and Drupal</strong>.
		</p>
		<p>
      My non-tech hobbies include <strong>racing cars</strong>,{` `}
			<strong>running marathons</strong>, and <strong>playing golf</strong>
		</p>
		<p>
      Check out my <Link to="/resume">Resume</Link> to view my experience or my
			{` `}
			<Link to="/portfolio">Portfolio</Link> to view some of my work!
		</p>
		<p>
      This site built with React and Gatsby. See the source code on{` `}
			<a
				rel="noopener noreferrer"
				target="_blank"
				href="https://github.com/cbutera484/resume-gatsby"
			>
        Git
			</a>
		</p>
		<p>
      I{`'`}m currently working on an updated version using{` `}
			<strong>React/Remix</strong> that will be launching soon!{` `}
		</p>
	</div>

;

export default IndexPage;
