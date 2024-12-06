import { Container, Typography } from "@mui/material";
import "./Header.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { Button } from "@mui/material";
import Contact from "../Contact/Contact";
import Popover from "@mui/material/Popover";
import { useState } from "react";

export function Header() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Playwrite GB S", "cursive"].join(","),
    },
  });

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <div className='header-wrapper'>
        <Popover
          open={isPopoverOpen}
          onClose={() => {
            setIsPopoverOpen(false);
          }}
          anchorReference='anchorPosition'
          anchorPosition={{ top: 0, left: 0 }}
          PaperProps={{
            sx: {
              backgroundColor: "transparent",
              boxShadow: "none",
              height: "auto",
            },
          }}
        >
          <Contact />
        </Popover>

        <Container className='header-container'>
          <Typography variant='h3' className='name'>
            Shannon Ilg
          </Typography>
          <div className='link-container'>
            <Button variant='text' href='#about-section'>
              About
            </Button>
            <Button
              variant='text'
              onClick={() => {
                setIsPopoverOpen(true);
              }}
            >
              Contact
            </Button>
            <Button variant='text'>Print Store</Button>
          </div>
        </Container>
        <hr className='header-divider' />
      </div>
    </ThemeProvider>
  );
}

export default Header;
