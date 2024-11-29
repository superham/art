import Stack from "@mui/material/Stack";
import { Container, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./Hero.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { Link } from "@mui/material";

export function Hero() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Playwrite GB S", "cursive"].join(","),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ mt: 2 }}>
        <Stack className='hero-stack'>
          <div
            style={{
              position: "sticky",
              top: 0,
            }}
          >
            <Typography variant='h3'>Shannon Ilg</Typography>
          </div>
        </Stack>
        <Stack className='link-stack'>
          {/* <InstagramIcon /> */}
          {/* <Typography variant='body1'>
            <a
              href='https://www.instagram.com/dreamerbell2/'
              target='_blank'
              rel='noreferrer'
            >
              @dreamerbell2
            </a>
          </Typography> */}
          <Link
            href='https://www.instagram.com/dreamerbell2/'
            style={{ display: "flex" }}
          >
            <InstagramIcon />

            <Typography fontFamily='unset'>@dreamerbell2</Typography>
          </Link>
        </Stack>
      </Container>
    </ThemeProvider>
  );
}

export default Hero;
