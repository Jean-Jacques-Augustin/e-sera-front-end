import React from "react";
import {Button, Paper, Typography} from "@mui/material";


const styles = {
    paper: {
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: "#f5f5f5"
    }
}

export const Introduction: React.FC<{}> = props => {

    return (
        <div>
            <br/>
            <Paper elevation={0} color={"primary"} style={styles.paper}>
                <br/>
                <Typography variant={"h3"}>
                    Bienvenue dans E-sera
                </Typography>
                <br/>
                <Typography fontWeight={"bold"} variant={"h6"}>
                    Qui sommes-nous ?
                </Typography>
                <br/>
                <Typography variant={"h6"} align={"justify"}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores aspernatur autem
                    consequuntur debitis delectus doloremque error expedita fugiat fugit hic impedit magni
                    necessitatibus nemo nihil non odio qui quos, rem, repellendus saepe sunt suscipit ut velit
                    veritatis. Accusamus consequuntur dolor explicabo id magni modi molestiae nisi quibusdam tempora
                    vitae! Aspernatur esse neque, odit quis sequi sit tempore voluptatibus? Molestias?
                </Typography>
                <br/>
                <Button>
                    Comment ça marche ?
                </Button>
            </Paper>
        </div>
    );
};