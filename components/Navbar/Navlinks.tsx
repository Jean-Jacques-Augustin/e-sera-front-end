import React from "react";
//Icons
import HomeIcon from '@mui/icons-material/Home';
import GridViewIcon from '@mui/icons-material/GridView';
import WorkIcon from '@mui/icons-material/Work';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import Link from "next/link";
import style from "/styles/Navbar.module.css"
import {ListItemButton, ListItemIcon, ListItemText, Typography} from "@mui/material";

export const routesConnected = [
    {name: "Accueil", path: "/", icon: <HomeIcon/>},
    {name: "Cours", path: "/cours", icon: <GridViewIcon/>},
    {name: "Travaux pratique", path: "/tp", icon: <WorkIcon/>},
    {
        name: "Exercices",
        path: "/exercices",
        icon: <ArchitectureIcon/>,
    },
];

export const routeNotConnected = [
    {
        name: "Connexion",
        path: "/connexion",
        icon: <LockPersonIcon style={{fontSize: "20px"}}/>,
    }
];


export const NavlinksConnected: React.FC<{}> = props => {
    return (
        <div>
            {routesConnected.map((route, index) => (
                <Link
                    href={route.path}
                    key={index}
                >
                    <a className={style.nlink}>
                        <Typography>
                            {route.name}
                        </Typography>
                    </a>
                </Link>
            ))}
        </div>
    );
};

export const NavlinksNotConnected: React.FC<{}> = props => {
    return (
        <div className={style.flexRow}>
            {routeNotConnected.map((route, index) => (
                <Link
                    key={index}
                    href={route.path}
                >
                    <a className={style.nlink}>
                        <Typography>
                            {route.name}
                        </Typography>
                    </a>
                </Link>
            ))}
        </div>
    );
};

export const DrawerLinkNotConnected: React.FC<{}> = props => {
    return (
        <div>
            {routeNotConnected.map((route, index) => (
                <Link
                    key={index}
                    href={route.path}
                >
                    <ListItemButton

                    >
                        <ListItemIcon>
                            {route.icon}
                        </ListItemIcon>
                        <ListItemText primary={route.name}/>
                    </ListItemButton>
                </Link>
            ))}
        </div>
    );
};

export const DrawerLinkConnected: React.FC<{}> = props => {
    return (
        <div>
            {routesConnected.map((route, index) => (
                <Link
                    key={index}
                    href={route.path}
                >
                    <ListItemButton

                    >
                        <ListItemIcon>
                            {route.icon}
                        </ListItemIcon>
                        <ListItemText primary={route.name}/>
                    </ListItemButton>
                </Link>
            ))}
        </div>
    );
};

