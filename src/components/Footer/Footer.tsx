import "./Footer.css";
import { createTheme, ThemeProvider, Button } from "@mui/material";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import headShot from "../../assets/ilgHeadShot.jpg";
import { smScreen } from "../../constants/constants";
import useWindowDimensions from "../../use/useWindowDimensions";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";

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
        <Card
          sx={{
            minWidth: "345px",
            maxWidth: "600px",
            margin: "auto",
            marginTop: "2rem",
            marginBottom: "2rem",
            padding: "1rem",
          }}
        >
          <div className='about-section' id='about-section'>
            <CardContent>
              {isXS ? (
                <img
                  src={headShot}
                  alt='Shannon Ilg headshot'
                  className='headshotXS'
                />
              ) : (
                <img
                  src={headShot}
                  alt='Shannon Ilg headshot'
                  className='headshot'
                />
              )}
            </CardContent>

            <Typography className='text' variant='body1'>
              Hi, I'm Shannon Ilg and I like to make art.
            </Typography>
          </div>
          <CardContent>
            <Typography variant='body1'>
              You can find more of my work on my Instagram or if you want to buy
              a print or request a commission you can find the links at the top
              of the page.
            </Typography>
            <br />
            <Typography variant='body1'>
              Half of the proceeds are donated to charities focusing on
              conservation and the environment.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </ThemeProvider>
  );
}
