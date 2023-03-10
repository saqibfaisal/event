import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import {  useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccountCircle from "@mui/icons-material/AccountCircle";
import QuizIcon from "@mui/icons-material/Quiz";
import FlagIcon from "@mui/icons-material/Flag";
import DetailsIcon from "@mui/icons-material/Details";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ApartmentIcon from "@mui/icons-material/Apartment";
import Logout from "@mui/icons-material/Logout";
import { Button, Menu, MenuItem } from "@mui/material";
const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
    backgroundColor: "#343a40",
    color: "white",
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
    backgroundColor: "#343a40",
});

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

function Dashboard(props) {
    const { workarea, heading } = props;
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    let Navigate = useNavigate()
    return (
        <div>
            <Box sx={{ display: "flex", flexGrow: 1 }}>
                <AppBar
                    sx={{
                        backgroundColor: "#003B5F",
                        padding: "5px",
                    }}
                    position="fixed"
                    open={open}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{
                                marginRight: 2,
                                ...(open && { display: "none" }),
                            }}
                        >
                            <MenuIcon fontSize="large" />
                        </IconButton>
                        <Typography variant="h4" noWrap component="div">
                            {heading}
                        </Typography>

                        <Box>
                            {auth && (
                                <div>
                                    <IconButton
                                        size="large"
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        onClick={handleMenu}
                                        color="inherit"
                                    >
                                        <AccountCircle fontSize="large" />
                                    </IconButton>
                                    <Menu
                                        id="menu-appbar"
                                        anchorEl={anchorEl}
                                        anchorOrigin={{
                                            vertical: "top",
                                            horizontal: "right",
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: "top",
                                            horizontal: "right",
                                        }}
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                    >
                                        <MenuItem  >
                                            {/* // onClick={()=>Log()}> */}
                                            <ListItemIcon >
                                                <Logout fontSize="small" />
                                            </ListItemIcon >
                                            Logout
                                        </MenuItem>
                                        {/* <MenuItem> */}
                                            <Button sx={{color:"black" ,backgroundColor:"black"}}>Connect Metamask</Button>
                                        {/* </MenuItem> */}
                                    </Menu>
                                </div>
                            )}
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box>
                    <Drawer
                        ModalProps={{ backgroundColor: "red" }}
                        variant="permanent"
                        open={open}
                    >
                        <DrawerHeader sx={{ backgroundColor: "#343a40", padding: "5px" }}>
                            <IconButton onClick={handleDrawerClose}>
                                {theme.direction === "rtl" ? (
                                    <ChevronRightIcon color="error" fontSize="large" />
                                ) : (
                                    <ChevronLeftIcon color="error" fontSize="large" />
                                )}
                            </IconButton>
                        </DrawerHeader>
                        <List>
                            {/* <ListItem
                                className="sideBtns"
                                // onClick={() => {
                                //   navigate("/admincourse");
                                // }}
                                disablePadding
                                sx={{ display: "block" }}
                            >
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? "initial" : "center",
                                        px: 2.5,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : "auto",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <AccountBalanceIcon color="primary" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Course form"
                                        sx={{ opacity: open ? 1 : 0 }}
                                    />
                                </ListItemButton>
                            </ListItem>
                            <ListItem
                                disablePadding
                                className="sideBtns"
                                sx={{ display: "block" }}
                            >
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? "initial" : "center",
                                        px: 2.5,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : "auto",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <DetailsIcon color="primary" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="course detail"
                                        sx={{ opacity: open ? 1 : 0 }}
                                    />
                                </ListItemButton>
                            </ListItem> */}
                            <ListItem
                                onClick={() => {
                                    Navigate("/eventCreate");
                                }}
                                disablePadding
                                className="sideBtns"
                                sx={{ display: "block" }}
                            >
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? "initial" : "center",
                                        px: 2.5,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : "auto",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <QuizIcon color="primary" />
                                    </ListItemIcon>
                                    <ListItemText primary="Create" sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                            </ListItem>
                            {/* <ListItem
                                disablePadding
                                className="sideBtns"
                                sx={{ display: "block" }}
                            >
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? "initial" : "center",
                                        px: 2.5,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : "auto",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <AccountCircle color="primary" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Register User"
                                        sx={{ opacity: open ? 1 : 0 }}
                                    />
                                </ListItemButton>
                            </ListItem>
                            <ListItem
                                disablePadding
                                className="sideBtns"
                                sx={{ display: "block" }}
                            >
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? "initial" : "center",
                                        px: 2.5,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : "auto",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <AssignmentIcon color="primary" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="createresult"
                                        sx={{ opacity: open ? 1 : 0 }}
                                    />
                                </ListItemButton>
                            </ListItem>
                            <ListItem
                                disablePadding
                                className="sideBtns"
                                sx={{ display: "block" }}
                            >
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? "initial" : "center",
                                        px: 2.5,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : "auto",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <FlagIcon color="primary" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Country"
                                        sx={{ opacity: open ? 1 : 0 }}
                                    />
                                </ListItemButton>
                            </ListItem>
                            <ListItem
                                disablePadding
                                className="sideBtns"
                                sx={{ display: "block" }}
                            >
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? "initial" : "center",
                                        px: 2.5,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : "auto",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <ApartmentIcon color="primary" />
                                    </ListItemIcon>
                                    <ListItemText primary="City" sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                            </ListItem> */}
                            {/* <Divider sx={{ backgroundColor: "#0277bd" }} /> */}
                            {/* <ListItem
                onClick={() => {
                  navigate("/");
                }}
                disablePadding
                sx={{ display: "block" }}
                className="sideBtns"
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <HomeIcon fontSize="large" color="success" />
                  </ListItemIcon>
                  <ListItemText primary="Home" sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem> */}
                        </List>
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        pt: 9,
                    }}
                >
                    {workarea}
                </Box>
            </Box>
        </div>
    );
}

export default Dashboard;