import { Button, styled, Link, AppBar, Box, Toolbar } from "@mui/material";
import { Logo } from "../../assets";
import RoutePaths from "../../global/constants/route-paths";
import CButton from "./c-button";

const Header = () => {
  const pages = [
    {
      id: 0,
      title: "Home",
      link: RoutePaths.LANDING_PAGE,
    },
    {
      id: 1,
      title: "Translate",
      link: RoutePaths.TRANSLATE,
    },
    {
      id: 2,
      title: "Pricing",
      link: RoutePaths.PRICING,
    },
  ];

  return (
    <AppBarStyled position="sticky">
      <Toolbar disableGutters>
        <NavBarContainerStyled>
          <Link href="/">
            <img src={Logo} alt="alef-digital" />
          </Link>

          <NavBarBoxStyled>
            {pages.map((page) => (
              <NavBtnStyled
                key={page.id}
                // isSelected={location.pathname === page.link}
                onClick={() => {
                  // handleCloseNavMenu();
                }}
              >
                {page.title}
              </NavBtnStyled>
            ))}
          </NavBarBoxStyled>

          <ButtonBoxStyled>
            <LoginBtnStyled disableRipple>Log in</LoginBtnStyled>
            <CButton>Sign up</CButton>
          </ButtonBoxStyled>
        </NavBarContainerStyled>
      </Toolbar>
    </AppBarStyled>
  );
};

const AppBarStyled = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  color: theme.palette.custom.black,
  height: "96px",
  boxShadow: "none",
  padding: "15px 0",
}));

const NavBarContainerStyled = styled(Box)(() => ({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "30px",
  display: "flex",
  justifyContent: "space-between",
  flexGrow: 1,
  alignItems: "center",
}));

const NavBarBoxStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "70px",

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const ButtonBoxStyled = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "30px",
}));

const LoginBtnStyled = styled(Button)(({ theme }) => ({
  background: "none",
  color: theme.palette.custom.black,
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "18.219px",
  cursor: "pointer",

  "&:hover": {
    background: "none",
  },
}));

const NavBtnStyled = styled(Box)(({ theme, isSelected }) => ({
  color: theme.palette.custom.black,
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "normal",
  border: 0,
  background: "none",
  cursor: "pointer",
  textDecoration: isSelected ? "underline" : "",
  textUnderlineOffset: isSelected ? "10px" : "",

  "&:hover": {
    textDecoration: "underline",
    textUnderlineOffset: "10px",
  },
}));

export default Header;
