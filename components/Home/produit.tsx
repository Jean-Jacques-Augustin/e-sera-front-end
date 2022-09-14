import React from "react";
import {Divider, Grid, Typography} from "@mui/material";
import {ProductInit} from "./productInit";
import {ProductData} from "./fakeProductData";


export const Produit = () => {
    return (
        <>
            <div>
                <br/>
                <Typography variant={"h5"}>
                    Recément ajouté
                </Typography>
                <Divider/>
                <br/>
                <Grid container spacing={2}>
                    {
                        ProductData.map((product, index) =>
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <ProductInit
                                    date={new Date(product.date)}
                                    name={product.name}
                                    description={product.description}
                                    image={product.image}
                                    proprietary={product.proprietary}
                                    prix={product.price}
                                />
                            </Grid>
                        )
                    }
                </Grid>
            </div>
            <div>
                <br/>
                <Typography variant={"h5"}>
                    Produit populaires
                </Typography>
                <Divider/>
                <br/>
                <Grid container spacing={2}>
                    {
                        ProductData.map((product, index) =>
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <ProductInit
                                    date={new Date(product.date)}
                                    name={product.name}
                                    description={product.description}
                                    image={product.image}
                                    proprietary={product.proprietary}
                                    prix={product.price}
                                />
                            </Grid>
                        )
                    }
                </Grid>
            </div>
        </>
    );
};