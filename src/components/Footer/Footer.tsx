import "./Footer.css";
import { createTheme, ThemeProvider, Button } from "@mui/material";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import headShot from "../../assets/ilgHeadShot.jpg";

export default function Footer() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className='footer-container'>
        <hr className='footer-divider' />
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
            Hi, I'm Shannon Ilg and I like to make art.
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
