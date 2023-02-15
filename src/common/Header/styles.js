import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  header_main: {
    height: "80px",
    marginLeft: "auto",
    background: "black",
    position: "fixed",
    width: "100%",
    top: 0,
    zIndex: "9999",
    "& a": {
      textDecoration: "none",
      color: "white",
      margin: "0 20px",
    },
  },
}));
