import React from "react";
import {AppBar, Container} from "@mui/material";
import {NavElements} from "./NavElements";


export const Navbar = () => {
    return (
        <AppBar role={"navigation"} color={"inherit"} elevation={0}>
            <Container>
                <NavElements/>
            </Container>
        </AppBar>
    );
};