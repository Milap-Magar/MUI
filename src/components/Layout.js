import React from "react";
import { Drawer, Typography } from "@mui/material";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
`;

export const Layout = ({ children }) => {
  return (
    <div>
      {/* Side bar */}
      <Drawer>
        <div>
          <Typography variant="h5">Note App</Typography>
        </div>
      </Drawer>
      {/* Main section */}
      <Wrapper>{children}</Wrapper>
    </div>
  );
};
