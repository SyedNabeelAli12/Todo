import * as React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import IconButton from "@mui/material/IconButton";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import ToDoCard from "../components/card";
import AddToDoDialog from "../components/dialogBox";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import Themetoggler from "../components/themetoggler";
import { connect } from "react-redux";
import { changeTheme } from "../Redux/action";
import { useSelector } from "react-redux";


import {
  backgroundColorDark,
  backgroundColorlight,
  barColorDark,
  barColorLight,
  iconColorDark,
  iconColorLight,
  textColorDark,
  textColorLight,
} from "../components/theme";
import Chat from "../components/chat";


function Home(props) {
  const drawerBleeding = 30;
  
  const Root = styled("div")(({ theme }) => ({
    height: "100%",
    backgroundColor:
      theme.palette.mode === "light"
        ? (mytheme === "light" ? backgroundColorlight: backgroundColorDark)
        : theme.palette.background.default,
  }));
  
  const StyledBox = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
  }));
  
  const Puller = styled("div")(({ theme }) => ({
    width: 30,
    height: 6,
    backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
    borderRadius: 3,
    position: "absolute",
    top: 10,
    left: "calc(50% - 15px)",
  }));
  const mytheme = useSelector((state) => state.theme);
  const navigate = useNavigate();
  const { window } = props;
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState(null);
  const [row, setRow] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);

  const toggleDrawer = (newOpen, data) => () => {
    setOpen(newOpen);
    setData(data);
    
  };


  const closeDrawer = () =>{
    setOpen(false)
  }

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3001/todo/");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setRow(result);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  useEffect(() => {
   

    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

    const getTextColor = (theme, textColorLight, textColorDark) => (
      theme === 'light' ? textColorLight : textColorDark
    );
    
    const getIconColor = (theme, iconColorLight, iconColorDark) => (
      theme === 'light' ? iconColorLight : iconColorDark
    );

    const getBackgroundColor = (theme, backgroundColorlight, backgroundColorDark) => (
      theme === 'light' ? backgroundColorlight : backgroundColorDark
    );

    const textColor = getTextColor(mytheme, textColorLight, textColorDark);
    const iconColor = getIconColor(mytheme, iconColorLight, iconColorDark);
  return (
    
    <Root>
      <CssBaseline />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(30% - ${drawerBleeding}px)`,
            overflow: "visible",
          },
        }}
      />
      <Box>
        <Box
          sx={{
            color: textColor,
            backgroundColor: mytheme === "light" ? barColorLight : barColorDark,
            height: "40px",
            width: "100%",
            justifyContent: "space-between",

            display: "-webkit-flex",
            alignItems: "center",
            position:'fixed',
            zIndex:1
          }}
        >
          <span>Welcome User {props.user.name}</span>
          <span style={{ flex: 1, textAlign: "center" }}>
            Todo Marker Application
          </span>
          {/* <button onClick={handleLogout}>Logout</button> */}
          <Box>
            {" "}
            <IconButton
              aria-label="details"
              size="medium"
              onClick={handleLogout}
            >
              <LogoutIcon
                fontSize="inherit"
                sx={{
                  color: iconColor,
                }}
              />
            </IconButton>
            <Themetoggler />
          </Box>
        </Box>

        <Box sx={{ padding: 1, display:'flex', width: '1000px', minHeight:'700px', maxHeight:'1000px'}}>
          <TableContainer component={Paper} sx={{
            marginTop:'50px',
            backgroundColor: mytheme === "light" ? barColorLight : barColorDark}}>
          <AddToDoDialog user={props.user} refresh= {fetchData}/>
            <Table sx={{ minWidth: 600, }} aria-label="simple table">
              <TableHead >
                <TableRow>
                  <TableCell sx={{color: textColor}}>Id</TableCell>
                  <TableCell align="center" sx={{color: textColor}}>Title</TableCell>
                  <TableCell align="center" sx={{color: textColor}}>Description</TableCell>
                  <TableCell align="center"sx={{color: textColor}}>Completed</TableCell>
                  <TableCell align="center"sx={{color: textColor}}>Due Date</TableCell>
                  <TableCell align="center"sx={{color: textColor}}>Details</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {row.map((item) => (
                  <TableRow
                    key={item.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 },color: mytheme === "light" ? textColorLight : textColorDark}}
                  >
                    <TableCell component="th" scope="row" sx={{color: textColor}}>
                      {item.id}
                    </TableCell>
                    <TableCell align="center" sx={{color: textColor}}>{item.title}</TableCell>
                    <TableCell align="center" sx={{color: textColor}}>{item.description}</TableCell>
                    <TableCell align="center" sx={{color: textColor}}>
                      {item.completed ? (
                        <CheckCircleIcon color="success" />
                      ) : (
                        <CancelIcon color="error" />
                      )}
                    </TableCell>
                    <TableCell align="center" sx={{color: textColor}}>{item.dueDate}</TableCell>
                    <TableCell align="center" sx={{color: textColor}}>
                      <IconButton

                        aria-label="details"
                        size="medium"
                        onClick={toggleDrawer(true, item)}
                      >
                        <OpenInBrowserIcon fontSize="inherit"  sx={{color: iconColor}}/>
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box>  <Chat user={props.user}/></Box>
        <SwipeableDrawer
          container={container}
          anchor="bottom"
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={() => {}}
          swipeAreaWidth={drawerBleeding}
          disableSwipeToOpen={false}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <StyledBox
            sx={{
              position: "absolute",
              top: (-drawerBleeding),
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              visibility: "visible",
              right: 0,
              left: 0,
              
            }}
          >
            <Puller />
            <Typography sx={{ p: 2, color: "text.secondary" }}>
              {data?.id ?? " "}
            </Typography>
          </StyledBox>
          <StyledBox
            sx={{
              px: 2,
              pb: 2,
              height: "100%",
              overflow: "auto",
            }}
          >
            <ToDoCard
              image={data?.image}
              title={data?.title}
              description={data?.description}
              id={data?.id}
              dueDate={data?.dueDate}
              refresh= {fetchData}
              completed ={data?.completed}
              closeDrawer = {closeDrawer}
            />
          </StyledBox>
        </SwipeableDrawer>
      </Box>
    </Root>
  );
}

Home.propTypes = {
  window: PropTypes.func,
};

export default Home;
