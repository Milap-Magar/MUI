import React from "react";
import { Button, Drawer, IconButton, Typography } from "@mui/material";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Create from "../pages/Create";

const Wrapper = styled.div`
  width: 100%;
`;

export const Layout = ({ children }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/create");
  };
  return (
    <div>
      {/* Side bar */}
      <Drawer>
        <div>
          <Typography variant="h5">Note App</Typography>
          <Button onClick={handleNavigate}>
            Create
          </Button>
        </div>
      </Drawer>
      {/* Main section */}
      <Wrapper>{children}</Wrapper>
    </div>
  );
};
