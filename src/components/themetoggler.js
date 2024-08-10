import React from "react";
import { connect } from "react-redux";
import { changeTheme } from "../Redux/action";
import ContrastIcon from "@mui/icons-material/Contrast";
import IconButton from "@mui/material/IconButton";
import { iconColorDark, iconColorLight } from "./theme";


const ThemeToggler = ({ theme, changeTheme }) => {
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    changeTheme(newTheme);
  };

  return (
   

      <IconButton aria-label="details" size="medium" onClick={toggleTheme}>
        <ContrastIcon fontSize="inherit" sx={{ color: theme === "light" ? iconColorLight : iconColorDark }} />
      </IconButton>
  );
};

const mapStateToProps = (state) => ({
  theme: state.theme,
});

const mapDispatchToProps = {
  changeTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(ThemeToggler);
