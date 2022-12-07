import React from "react";

import { makeStyles } from "@mui/styles";

import { Box, Typography } from "@mui/material";

//set footer to botto of screen 
const useStyles = makeStyles({
    footer: {
        backgroundColor: "#7D84B2",
        color: "#fff",
        padding: "1rem",
        textAlign: "center",
        position: "fixed",
        bottom: 0,
        width: "100%"
    },
});

const Footer = () => {
    const classes = useStyles();
    return (
        <Box className={classes.footer}>
            <Typography variant="body2">
                &copy; {new Date().getFullYear()} All rights reserved.
            </Typography>
        </Box>
    );
}

export default Footer;
