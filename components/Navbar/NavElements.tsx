import React from "react";
import {Hidden, Toolbar, Typography} from "@mui/material";
import {NavlinksNotConnected} from "./Navlinks";
import style from "/styles/Navbar.module.css";
import {DrawerApp} from "./DrawerApp";

export const NavElements: React.FC<{}> = props => {
    return (
        <Toolbar className={style.navbar}>
            <Typography
                variant={"h6"}
                className={"titre"}
                fontWeight={"bold"}
            >
                E-Sera
            </Typography>

            <Hidden mdDown>
                <NavlinksNotConnected/>
            </Hidden>
            <Hidden mdUp>
                <DrawerApp/>
            </Hidden>
        </Toolbar>
    );
};