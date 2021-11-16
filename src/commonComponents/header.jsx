/** @format */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  title: {
    color: "#3ec1d5",
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },

  title2: {
    color: "#3ec1d5",
    paddingRight: "45vw",
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },

  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },

  headerStyle: {
    padding: "15px ",
    fontSize: "15px",
    fontWeight: "bold",
    textTransform: "capitalize",
  },

  mobileHeaderStyle: {
    padding: "5px ",
    fontSize: "15px",
    textTransform: "capitalize",
  },

  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },

  root: {
    borderRadius: 10,
    border: 0,
    height: 180,
    padding: "0px 0px 0px 0px ",
  },
}));

const HeaderComponent = () => {
  const classes = useStyles();
  const [open] = React.useState(false);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const anchorRef = React.useRef(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Button className={classes.mobileHeaderStyle} href="/">
          Home
        </Button>
      </MenuItem>
      <MenuItem>
        <Button
          className={classes.mobileHeaderStyle}
          color="inherit"
          href="/#about"
        >
          About
        </Button>
      </MenuItem>
      <MenuItem>
        <div className="dropdown">
          <Button
            className={classes.mobileHeaderStyle}
            href="/#services"
            endIcon={<ArrowDropDownIcon />}
          >
            Services
          </Button>
          <div className="dropdown-contentTwo">
            <a href="/applicationDev">Blockchain Developments</a>
            <a href="/ifsservices">Blockchain Consultancy</a>
            <a href="/wso2Support">dApps Front End</a>
            <a href="/wso2Support">Wallets/Token Integration</a>
            <a href="/itRecurit">IT Recruitment</a>
          </div>
        </div>
      </MenuItem>
      {/* <MenuItem>
        <Button
          className={classes.mobileHeaderStyle}
          color='inherit'
          href='/careers'>
          Careers
        </Button>
      </MenuItem> */}
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar
        position="fixed"
        style={{
          background: "#fff",
        }}
      >
        <div className={classes.sectionDesktop}>
          <div className="container">
            <Toolbar>
              <a href="/">
                <img
                  alt="companyLogo"
                  src="img/companyLogo/InnoViz@2x.png"
                  width="150"
                  height="150"
                />
              </a>
              <Typography className={classes.title} />
              <Button className={classes.headerStyle} href="/">
                Home
              </Button>
              <Button className={classes.headerStyle} href="/">
                About
              </Button>
              <div className="dropdown">
                <Button
                  href="/#services"
                  className={classes.headerStyle}
                  endIcon={<ArrowDropDownIcon />}
                >
                  Services
                </Button>
                <div className="dropdown-content">
                  <a href="/applicationDev">Blockchain Developments</a>
                  <a href="/ifsservices">Blockchain Consultancy</a>
                  <a href="/wso2Support">dApps Front End</a>
                  <a href="/wso2Support">Wallets/Token Integration</a>
                  <a href="/itRecurit">Tallents Aquisition</a>
                </div>
              </div>
              {/* <Button className={classes.headerStyle} href='/careers'>
                Careers
              </Button> */}
              <a href="#contact" className="ready-btn-header">
                Contact us
              </a>
            </Toolbar>
          </div>
        </div>
        <div className={classes.sectionMobile}>
          <IconButton
            aria-label="menu"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="defult"
          >
            <Toolbar>
              <a href="/">
                <img
                  src="img/companyLogo/InnoViz@2x.png"
                  width="150"
                  height="150"
                />
              </a>
              <Typography className={classes.title2} />
            </Toolbar>
            <a href="#contact" className="ready-btn-header">
              Contact us
            </a>
            <MenuIcon />
          </IconButton>
        </div>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
};
export default HeaderComponent;
