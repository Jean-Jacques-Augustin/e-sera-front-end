import { Button, Grid, Paper, Typography } from "@mui/material";
import Head from "next/head";
import React from "react";
import TextFields from "../components/Custom";
import style from "/styles/Pages.module.css";

export default function Connexion() {
      // State
      const [email, setEmail] = React.useState("");
      const [password, setPassword] = React.useState("");

      // Gestion des erreurs state
      const [emailError, setEmailError] = React.useState(false);
      const [passwordError, setPasswordError] = React.useState(false);

      // Gestion des erreurs message
      function handleConnexion() {
            email === "" ? setEmailError(true) : setEmailError(false);
            password === "" ? setPasswordError(true) : setPasswordError(false);
      }

      function Connexion() {
            if (emailError || passwordError) {
                  console.log("Se connecter");
            } else {
                  handleConnexion();
            }
      }

      return (
            <div className={style.centered}>
                  <Head>
                        <title>Connexion</title>
                        <meta
                              lang="fr"
                              name="description"
                              content="Connectez-vous pour avoir un accès un cours compatible à votre niveau"
                        />
                        <link rel="icon" href="/favicon.ico" />
                  </Head>
                  <Paper className={style.connexion} variant={"outlined"}>
                        <Grid
                              container
                              direction="row"
                              justifyContent="center"
                              alignItems="center"
                              spacing={2}
                        >
                              <Grid item md={12} xs={12}>
                                    <Typography
                                          variant={"h5"}
                                          fontWeight={"bold"}
                                          align={"center"}
                                    >
                                          Connexion
                                    </Typography>
                              </Grid>
                              <Grid item md={12} xs={12}>
                                    <TextFields
                                          type={"email"}
                                          error={emailError}
                                          value={email}
                                          label={"Adresse e-mail"}
                                          onChange={(e) =>
                                                setEmail(e.target.value)
                                          }
                                          helperText={
                                                emailError
                                                      ? "Veuillez saisir votre adresse e-mail"
                                                      : ""
                                          }
                                    />
                              </Grid>
                              <Grid item md={12} xs={12}>
                                    <TextFields
                                          type={"password"}
                                          error={passwordError}
                                          value={password}
                                          label={"Mot de passe"}
                                          onChange={(e) =>
                                                setPassword(e.target.value)
                                          }
                                          helperText={
                                                passwordError
                                                      ? "Veuillez saisir votre mot de passe"
                                                      : ""
                                          }
                                    />
                              </Grid>
                              <Grid item md={12} xs={12}>
                                    <Button
                                          size={"large"}
                                          color={"primary"}
                                          fullWidth
                                          variant="outlined"
                                          style={{ textTransform: "none" }}
                                          onClick={Connexion}
                                    >
                                          Se connecter
                                    </Button>
                              </Grid>
                        </Grid>
                  </Paper>
            </div>
      );
}
