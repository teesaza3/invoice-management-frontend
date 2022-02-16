import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#FFA234",
    // fontFamily: 'Prompt',
    fontFamily: "Sarabun",
  },
});

const pages = [
  "ดูใบแจ้งหนี้ทั้งหมด",
  "ผู้จ่ายใบแจ้งหนี้ทั้งหมด",
  "ยอดรวมรายรับ",
];
const settings = ["โปรไฟล์", "แก้ไข้ข้อมูล", "ออกจากระบบ"];
const notification = [
  "ดูใบแจ้งหนี้ทั้งหมด",
  "ผู้จ่ายใบแจ้งหนี้ทั้งหมด",
  "ยอดรวมรายรับ",
];
const ResponsiveAppBar = () => {
  const classes = useStyles();
  let navigate = useNavigate();

  const [menu, setMenu] = React.useState("");
  const [notifyCount, setNotifyCount] = React.useState(2);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElNoti, setAnchorElNoti] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget.innerText);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleOpenNotiMenu = (event) => {
    setNotifyCount(0);
    setAnchorElNoti(event.currentTarget);
  };
  const handleCloseNotiMenu = () => {
    setAnchorElNoti(null);
  };

  const handleCloseNavMenu = (event) => {};

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  function changePage(page) {
    switch (page) {
      case "ดูใบแจ้งหนี้ทั้งหมด":
        navigate("allbill");
        break;
      case "ผู้จ่ายใบแจ้งหนี้ทั้งหมด":
        navigate("payer");
        break;
      case "ยอดรวมรายรับ":
        navigate("allget");
        break;
      default:
        navigate("/");
    }
    // setMenu(event.target.innerText);
    console.log(page);
  }

  function notificationsLabel(count) {
    if (count === 0) {
      return "no notifications";
    }
    if (count > 99) {
      return "more than 99 notifications";
    }
    return `${count} notifications`;
  }

  return (
    <AppBar style={{ backgroundColor: "#FFA234" }} position="static">
      <Container maxWidth="l">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 1, display: { xs: "none", md: "flex" } }}
          >
            BILLGUARD
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => changePage(page)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
            <IconButton
              onClick={handleOpenNotiMenu}
              sx={{ p: 2 }}
              aria-label={notificationsLabel(notifyCount)}
            >
              <Badge badgeContent={notifyCount} color="secondary">
                <NotificationsIcon sx={{ fontSize: 30 }} />
              </Badge>
            </IconButton>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElNoti}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              open={Boolean(anchorElNoti)}
              onClose={handleCloseNotiMenu}
            >
              {notification.map((notis) => (
                <MenuItem key={notis} onClick={handleCloseNotiMenu}>
                  <Typography textAlign="center">{notis}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
