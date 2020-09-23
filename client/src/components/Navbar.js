import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bar: {
    backgroundColor: "black",
    padding: "10px",
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Google Books Search
          </Typography>
          <Button color="inherit" href="/">
            Search
          </Button>

          <Button color="inherit" href="/saved">
            Saved
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}