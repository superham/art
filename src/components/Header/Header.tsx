import { Container, Typography } from "@mui/material";
import "./Header.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { Button } from "@mui/material";

export function Header() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Playwrite GB S", "cursive"].join(","),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container className='hero-container'>
        <Typography variant='h3'>Shannon Ilg</Typography>
        <div className='link-container'>
          <Button variant='text'>About</Button>
          <Button variant='text'>Commissions</Button>
          <Button variant='text'>Contact</Button>
          <Button variant='text'>Print Store</Button>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default Header;
