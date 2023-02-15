import { makeStyles } from "@mui/styles";
import { appColor } from "assets/color";

export const useStyles = makeStyles((theme) => ({
  productsCard: {
    boxShadow: appColor.boxShadow,
    padding: "20px",
    maxWidth: "300px",
    margin: "auto",
    "& p": {
      fontFamily: "Poppins !important",
      fontSize: "1rem",
    },
  },
  imageHolder: {
    "& img": {
      aspectRatio: "1",
    },
  },
  buttonContainer: {
    "& button": {
      textTransform: "capitalize",
      fontFamily: "Poppins",
    },
  },
}));
