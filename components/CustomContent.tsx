import {Button, Card, CardActions, CardContent, CardHeader, Typography} from "@mui/material";
import React from "react";

interface CustomContentProps {
    date: Date;
}

export default function CustomContent() {
    return (
        <div>
            <Card>
                <CardHeader
                    title={"lorem"}
                />
                <CardContent>
                    <Typography> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolor ducimus
                        earum fugit totam. Aut consequatur earum eum facere, illo ipsum itaque quae quas quidem sequi
                        ullam ut veniam vitae.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        variant="contained"
                        color="primary"
                        size="medium"
                        type="submit"
                    >
                        Hello word
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}
