import React from 'react';
import {Button, Card, CardActionArea, Grid, Paper, Typography} from "@mui/material";
import Image from "next/image";

//import image
import electronic from "../../images/product/electronique.svg";
import book from "../../images/product/ebook.svg";
import work from "../../images/product/work.svg";
import access from "../../images/product/accessibility.svg";

interface productLinkProps {
    name: string;
    image: string;
    link: string;
}

const ProdictLinkList = [
    {
        name: "Produit électronique",
        image: electronic,
        link: "/produit/1"
    },
    {
        name: "Produit 2",
        image: book,
        link: "/produit/2"
    }, {
        name: "Produit 3",
        image: work,
        link: "/produit/3"
    },
    {
        name: "Produit 4",
        image: access,
        link: "/produit/4"
    }

]

const styles = {
    paper: {
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: "#f5f5f5"
    }
}


const CardLink = ({link, image, name}: productLinkProps) => {
    return (
        <Card variant={"outlined"}>
            <CardActionArea sx={{
                padding: "2vh",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "column"
            }}>
                <Image
                    src={image}
                    alt={name}
                    width={80}
                    height={80}
                />
                <br/>
                <div>
                    <Typography variant={"h6"}>
                        {name}
                    </Typography>
                </div>
            </CardActionArea>
        </Card>
    );
}


export const ProductLink = () => {
    return (

        <Paper style={styles.paper} elevation={0}>
            <Typography variant={"h5"}>
                Acheter votre produit, on a tout ce qu'il vous faut
            </Typography>
            <br/>
            <Grid container spacing={2}>
                {
                    ProdictLinkList.map((product, index) =>
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <CardLink name={product.name} image={product.image} link={product.link}/>
                        </Grid>
                    )
                }
            </Grid>
            <Button sx={{textTransform: "none", marginTop: "2vh"}}>
                Voir des autres catalogue de produit
            </Button>
        </Paper>

    );
};