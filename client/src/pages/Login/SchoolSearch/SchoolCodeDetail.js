import React from "react";
import styled from "styled-components";

const SchoolCodeDetailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-bottom: 0.1rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  &:hover {
    background-color: #fff79f;
  }
  .sido {
    font-size: 0.8rem;
  }
  & + & {
    border-top: 1px solid #c4c4c4;
  }
`;

const SchoolCodeDetail = ({ data, onClick }) => {
  return (
    <SchoolCodeDetailContainer onClick={() => onClick(data)}>
      {/* <div>{data.SCHUL_NM}</div>
      <div className="sido">{data.LCTN_SC_NM}</div> */}
      <div>{data.schoolName}</div>
      <div className="sido">{data.schoolAddress}</div>
    </SchoolCodeDetailContainer>
  );
};

export default SchoolCodeDetail;
