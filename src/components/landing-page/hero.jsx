import { Stack, Typography, styled } from "@mui/material";
import { ArabGuy, BusinessMan, Chinese, TealSideRound } from "../../assets";
import { HeroData } from "../../cms/hero-data";
import CButton from "../shared/c-button";

const Hero = () => {
  const { hero } = HeroData;
  return (
    <HeroStyled>
      <LeftContainer>
        <Typography variant="body-large" fontWeight="500" lineHeight="49px">
          {hero.title}
        </Typography>
        <Typography
          variant="body-medium"
          color="primary.contrastText"
          lineHeight="normal"
        >
          {hero.description}
        </Typography>
        <CButton

        // onClick={() => navigate(hero.getStartedLink)}
        >
          {hero.getStartedButton}
        </CButton>
      </LeftContainer>
      <RightContainer>
        {/* Responsive stack for different screen sizes */}
        <Stack
          flexDirection={{ xs: "column", sm: "row", md: "row" }}
          spacing={10}
        >
          {/* Each stack item for a picture and a box */}
          <Stack flexDirection="column" spacing={10}>
            <img src={BusinessMan} alt="businessman" />
            <div className="teal-box">
              Arabic boasts around <strong>30</strong> diverse dialects, spoken
              by over <strong>420 million</strong> people worldwide.
            </div>
          </Stack>

          <Stack flexDirection="column" spacing={10}>
            <Typography className="pink-box">
              Our blend of <strong>advanced AI</strong> and{" "}
              <strong>expert human touch </strong>
              guarantees accurate translations, preserving your message&apos;s
              integrity.
            </Typography>
            <img src={Chinese} alt="chinese" />
          </Stack>

          <Stack flexDirection="column" spacing={10}>
            <img src={ArabGuy} alt="arabian" />
            <div className="teal-box-2">
              <img src={TealSideRound} />
              <p>Embrace accuracy and convenience with our platform.</p>
            </div>
          </Stack>
        </Stack>
      </RightContainer>
    </HeroStyled>
  );
};
const HeroStyled = styled(Stack)(({ theme }) => ({
  maxWidth: "1300px",
  margin: "0 auto",
  padding: "30px",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: "20px",

  // Media queries for tablet and desktop sizes
  [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
    maxWidth: "100%",
    margin: "0 auto",
    padding: "0px",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
}));

const LeftContainer = styled(Stack)(({ theme }) => ({
  gap: "20px",
  width: "453px",

  p: {
    margin: "0px",
  },

  button: {
    margin: "0 auto",
    width: "177px",
  },

  // Media queries for tablet and desktop sizes
  //the minimum width of the viewport is equal to or greater than the value specified in the media query
  [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
    button: {
      margin: "0px",
    },
  },
}));

const RightContainer = styled(Stack)(({ theme }) => ({
  gap: "20px",
  flexWrap: "wrap",

  ".pink-box": {
    padding: "38px 20px 38px 19px",
    width: "100%",
    borderRadius: "20px",
    background: "#97057e33",
  },

  ".teal-box": {
    width: "100%",
    padding: "45px 19px 38px 20px",
    borderRadius: "20px",
    background: "#48a19733",
  },

  ".teal-box-2": {
    width: "100%",
    borderRadius: "20px",
    background: "#48a19733",
    color: theme.palette.custom.black,
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "21px",
    letterSpacing: "-0.54px",
    position: "relative",

    p: {
      margin: "0",
      padding: "140px 30px 53px 29px",
    },

    img: {
      position: "absolute",
      right: "10px",
    },
  },

  [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
    ".pink-box": {
      width: "209px",
    },

    ".teal-box": {
      width: "242px",
    },

    ".teal-box-2": {
      width: "175px",
    },
  },
}));
export default Hero;
