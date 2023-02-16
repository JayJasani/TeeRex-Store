import { makeStyles } from "@mui/styles";
import { appColor } from "assets/color";

export const useStyles = makeStyles((theme) => ({
  search: {
    justifyContent: "center",
    alignItems: "center",
    "& input": {
      fontFamily: "Poppins",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderRadius: "0px",
      borderTop: "none !important",
      borderLeft: "none !important",
      borderRight: "none !important",
      borderBottom: `1px solid ${appColor.black}`,
    },
  },
  checkFilter: {
    boxShadow: appColor.boxShadow,
    borderRadius: "23px",
  },
}));
