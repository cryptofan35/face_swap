import React from "react";
import { useStyles } from "./style";

const Homepage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.title}>Choose Your Preferred Styles</div>
        <div className={classes.subContainer}>
          <div className={classes.boxItem}>
            <div className={classes.imgBox}>
              <div className={classes.subImg}>
                <img
                  src="https://static.fotor.com/app/minitools/avatar/static/media/business.ee5f57b5.jpg"
                  data-src="https://static.fotor.com/app/minitools/avatar/static/media/business.ee5f57b5.jpg"
                  className={classes.imgGroup}
                  alt="img"
                />
              </div>
            </div>
            <p>Professional Styles</p>
            <div className={classes.selectBtn}>Select</div>
          </div>
          <div className={classes.boxItem}>
            <div className={classes.imgBox}>
              <div className={classes.subImg}>
                <img
                  src="https://static.fotor.com/app/minitools/avatar/static/media/business.ee5f57b5.jpg"
                  data-src="https://static.fotor.com/app/minitools/avatar/static/media/business.ee5f57b5.jpg"
                  className={classes.imgGroup}
                  alt="img"
                />
              </div>
            </div>
            <p>Professional Styles</p>
            <div className={classes.selectBtn}>Select</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
