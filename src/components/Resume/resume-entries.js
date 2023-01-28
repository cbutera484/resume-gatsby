import React from "react";
import ResumeEntry from "./resume-entry";
import Data from "../../data/resume.json";
import styled from "styled-components";

const ResumeEntriesContainer = styled.div`
  width: 100% !important;
  padding: 0 !important;
`;

const ResumeEntries = () => (
  <ResumeEntriesContainer className="container">
    {Data.resumeItems.map(item => (
      <ResumeEntry key={item.title} resumeItem={item} />
    ))}
  </ResumeEntriesContainer>
);

export default ResumeEntries;
