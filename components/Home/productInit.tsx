import React from "react";

import {Button, Card, CardContent, CardMedia, Typography} from "@mui/material";


interface productInitProps {
    date: Date;
    name: string;
    description: string;
    image: string;
    proprietary: string;
    prix: number
}

const styles = {
    card_action: {
        display: "flex",
        flexDirection: "column"

    }
}


export const ProductInit = ({image, name, prix}: productInitProps) => {
    return (
        <Card variant={"outlined"}>
            <CardMedia
                component="img"
                height="200"
                image={image}
                alt={name}
            />
            <CardContent>
                <Typography variant="h5">
                    {name}
                </Typography>
                <Typography fontWeight={"bold"} variant="h5">
                    {prix} Ariary
                </Typography>
            </CardContent>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "2vh 2vh 2vh 2vh",
            }}>
                <Button size="medium">Ajouter au panier</Button>
                <Button size="medium">Voir</Button>
            </div>
        </Card>
    );
};