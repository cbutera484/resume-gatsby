import React from "react";
import PortfolioEntry from "./portfolio-entry";
import Data from "../../data/portfolio.json";
import styled from "styled-components";

const PortfolioEntriesContainer = styled.div`
  width: 100% !important;
  padding: 0 !important;
`;

const PortfolioEntries = () => (
  <PortfolioEntriesContainer className="container">
    {Data.portfolioItems.map(item => (
      <PortfolioEntry key={item.title} portfolioItem={item} />
    ))}
  </PortfolioEntriesContainer>
);

export default PortfolioEntries;
