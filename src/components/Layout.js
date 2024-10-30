import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  // background: #f9f9f9;
  width: 100%;
`;

export const Layout = ({ children }) => {
  return (
    <div>
      <Wrapper>{children}</Wrapper>
    </div>
  );
};
