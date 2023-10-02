import React from "react";
import { useStyles } from "./style";
import { Link } from "react-router-dom";
import dropIcon from "assets/icons/dropdown.svg";

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Link to="/" className={classes.logo}>
          <img
            src="https://pub-static.fotor.com/static/web/lib/fotor-bundle/9d3a9d230faf9f901b16.svg"
            alt="logo"
            className={classes.logoImg}
          />
        </Link>
        <div className={classes.avatar}>
          AI Avatar{" "}
          <img src={dropIcon} alt="drop" className={classes.dropIcon} />
        </div>
        <div className={classes.view}>
          <div className={classes.avatarTxt}>View My Generated Avatars</div>
        </div>
        <div className={classes.buttonGroup}>
          <div className={classes.register}>Sign up</div>
          <div className={classes.login}>Sign in</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
