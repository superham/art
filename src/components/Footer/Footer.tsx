import "./Footer.css";
import { createTheme, ThemeProvider, Button } from "@mui/material";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import headShot from "../../assets/ilgHeadShot.jpg";
import { smScreen } from "../../constants/constants";
import useWindowDimensions from "../../use/useWindowDimensions";

export default function Footer() {
  const { width } = useWindowDimensions();

  const theme = createTheme({
    typography: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
    },
  });

  let isXS = false;

  if (width <= smScreen) {
    isXS = true;
  }

  return (
    <ThemeProvider theme={theme}>
      <div className='footer-container'>
        {!isXS && <hr className='footer-divider' />}
        <Button
          variant='text'
          color='primary'
          startIcon={<KeyboardDoubleArrowUpIcon />}
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
          sx={{ marginLeft: "2rem" }}
        >
          Back to Top
        </Button>
        <div className='about-section' id='about-section'>
          <img src={headShot} alt='Shannon Ilg headshot' className='headshot' />

          <div className='text'>
            Hi, I'm Shannon Ilg and I like to make art. You can find more of my
            work on my instagram or if you want to buy a print or request a
            commission you can find the links at the top of the page. Half of
            the proceeds are donated to charities focusing on conservation.
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
