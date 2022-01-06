import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  btn: {
    width: "75%",
    marginTop: "20px",
    backgroundColor: "#900c3e",
    fontWeight: "500",
    "&:hover": { backgroundColor: "pink", color: "black" },
  },
});

export default useStyle;
