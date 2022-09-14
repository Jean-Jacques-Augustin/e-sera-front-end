import type {NextPage} from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import {Introduction} from "../components/Home/introduction";
import {Container, Toolbar} from "@mui/material";
import {Produit} from "../components/Home/produit";
import {ProductLink} from "../components/Home/productLink";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>E-Sera</title>
                <meta lang="fr"/>
                <meta
                    name="Accueil"
                    content="Formation discussion et conseil en Droit"
                />
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={styles.main}>
                <Toolbar/>
                <Container>
                    <Introduction/>
                    <Produit/>
                    <ProductLink/>
                </Container>
            </main>
        </div>
    );
};

export default Home;