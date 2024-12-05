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
      <div className='header-wrapper'>
        <Container className='header-container'>
          <Typography variant='h3' className='name'>
            Shannon Ilg
          </Typography>
          <div className='link-container'>
            <Button variant='text'>About</Button>
            <Button variant='text'>Contact</Button>
            <Button variant='text'>Print Store</Button>
          </div>
        </Container>
        <hr className='header-divider' />
      </div>
    </ThemeProvider>
  );
}

export default Header;
