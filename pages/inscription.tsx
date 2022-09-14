import style from "/styles/Pages.module.css";
import React from "react";
import {Button, Grid, Paper, Typography} from "@mui/material";
import TextFields from "../components/Custom";

export default function Inscription() {

     // State
     const [name, setName] = React.useState("");
     const [niveau, setNiveau] = React.useState("");
     const [num, setNum] = React.useState("");
     const [email, setEmail] = React.useState("");
     const [password, setPassword] = React.useState("");

     // Gestion des erreurs state
     const [nameError, setNameError] = React.useState(false);
     const [niveauError, setNiveauError] = React.useState(false);
     const [numError, setNumError] = React.useState(false);
     const [emailError, setEmailError] = React.useState(false);
     const [passwordError, setPasswordError] = React.useState(false);

     // Gestion des erreurs message
     function handleInscription() {
          name === "" ? setNameError(true) : setNameError(false);
          niveau === "" ? setNiveauError(true) : setNiveauError(false);
          num === "" ? setNumError(true) : setNumError(false);
          email === "" ? setEmailError(true) : setEmailError(false);
          password === "" ? setPasswordError(true) : setPasswordError(false);
     }

     return (
          <div className={style.centered}>
               <Paper className={style.inscription} variant={"outlined"}>

                    <Grid
                         container
                         direction="row"
                         justifyContent="center"
                         alignItems="center"
                         spacing={2}
                    >
                         <Grid item md={12} xs={12}>
                              <Typography variant={"h5"} fontWeight={"bold"} align={"center"}>
                                   Inscription
                              </Typography>
                         </Grid>

                         <Grid item md={12} xs={12}>
                              <TextFields label={"Nom et prénom"}
                                          value={name}
                                          onChange={(e) => setName(e.target.value)}
                                          type={"name"}
                                          error={nameError}
                                          helperText={
                                               nameError ? "Veuillez saisir votre nom et prénom" : ""
                                          }
                              />
                         </Grid>

                         <Grid item md={6} xs={12}>
                              <TextFields label={"Niveau"}
                                          value={niveau}
                                          onChange={(e) => setNiveau(e.target.value)}
                                          type={"niveau"}
                                          error={niveauError}
                                          helperText={
                                               niveauError ? "Veuillez saisir votre niveau" : ""
                                          }
                              />
                         </Grid>

                         <Grid item md={6} xs={12}>
                              <TextFields label={"Numéro d'inscription"}
                                          value={num}
                                          onChange={(e) => setNum(e.target.value)}
                                          type={"num"}
                                          error={numError}
                                          helperText={
                                               numError ? "Veuillez saisir votre numéro d'inscription" : ""
                                          }
                              />
                         </Grid>

                         <Grid item md={12} xs={12}>
                              <TextFields
                                   type={"email"}
                                   error={emailError}
                                   value={email}
                                   label={"Adresse e-mail"}
                                   onChange={(e) => setEmail(e.target.value)}
                                   helperText={
                                        emailError ? "Veuillez saisir votre adresse e-mail" : ""
                                   }
                              />
                         </Grid>
                         <Grid item md={12} xs={12}>
                              <TextFields
                                   type={"password"}
                                   error={passwordError}
                                   value={password}
                                   label={"Mot de passe"}
                                   onChange={(e) => setPassword(e.target.value)}
                                   helperText={
                                        passwordError ? "Veuillez saisir votre mot de passe" : ""
                                   }
                              />
                         </Grid>
                         <Grid item md={12} xs={12}>
                              <Button
                                   size={"large"}
                                   color={"primary"}
                                   fullWidth
                                   variant="outlined"
                                   style={{textTransform: "none"}}
                                   onClick={handleInscription}
                              >
                                   Inscription
                              </Button>
                         </Grid>
                    </Grid>
               </Paper>
          </div>
     );
};