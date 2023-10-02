import { makeStyles } from "@mui/styles";
import dot from "assets/icons/dot.jpg";
export const useStyles = makeStyles(() => ({
  root: {
    height: "calc(100vh - 64px)",
    width: "100%",
    position: "relative",
    // backgroundColor: "#161719",
    overflow: "hidden",
    backgroundImage: `url(${dot})`,
    backgroundRepeat: "repeat",
  },
  container: {
    position: "relative",
    zIndex: 10,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: "18px",
    fontWeight: "600",
    lineHeight: "24px",
    color: "#fff",
    marginBottom: "32px",
  },
  subContainer: {
    display: "flex",
  },
  boxItem: {
    width: "408px",
    borderRadius: "4px",
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#fff",
    cursor: "pointer",
    backgroundColor: "#1e1f22",
    marginLeft: "40px",
    "&:first-of-type": {
      marginLeft: "0px",
    },
  },
  imgBox: {
    width: "100%",
    marginBottom: "16px",
    position: "relative",
    borderRadius: "4px",
    overflow: "hidden",
  },
  subImg: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  selectBtn: {
    backgroundColor: "#221ff6",
    padding: "9px 38.5px",
    width: "fit-content",
    borderRadius: "4px",
    color: "#fff",
    marginTop: "16px",
  },
  imgGroup: {
    maxWidth: "100%",
    maxHeight: "100%",
    width: "auto",
    height: "auto",
  },
}));
