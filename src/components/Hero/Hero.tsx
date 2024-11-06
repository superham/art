import Stack from "@mui/material/Stack";
import { Container, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./Hero.css";
import { createTheme, ThemeProvider } from "@mui/material";

const bio = "This is a bio";

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
          <Typography variant='h3'>Shannon Ilg</Typography>
          {bio}
        </Stack>
        <Stack className='link-stack'>
          {"Shop"}
          {"Contact"}
          <InstagramIcon />
        </Stack>
      </Container>
    </ThemeProvider>
  );
}

export default Hero;
