import {AppBar, Container} from "@mui/material";

export const Footer = () => {
    return (
        <AppBar sx={{
            top: "auto",
            bottom: 0,
        }}
                position={"relative"}
                elevation={0}
        >
            <Container>
                <h1>Footer</h1>
            </Container>
        </AppBar>
    );
};