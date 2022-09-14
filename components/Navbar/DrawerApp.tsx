import React, {useState} from "react";
import {Box, IconButton, SwipeableDrawer} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {DrawerLinkNotConnected} from "./Navlinks";


const drawerWidth = 300;


export const DrawerApp: React.FC<{}> = props => {
     const [mobileOpen, setMobileOpen] = useState(false);

     const handleDrawerToggle = () => {
          setMobileOpen(!mobileOpen);
     }

     const closeDrawer = () => {
          setMobileOpen(false);
     }

     return (
          <div>
               <IconButton color={"inherit"} onClick={handleDrawerToggle}>
                    <MenuIcon/>
               </IconButton>
               <SwipeableDrawer
                    anchor={"left"}
                    open={mobileOpen}
                    onClose={closeDrawer}
                    onOpen={() => setMobileOpen(true)}
               >
                    <div style={{width: drawerWidth}}>
                         <Box>
                              <DrawerLinkNotConnected/>
                         </Box>
                    </div>
               </SwipeableDrawer>
          </div>
     );
};