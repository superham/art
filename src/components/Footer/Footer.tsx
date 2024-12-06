import "./Footer.css";
import { createTheme, ThemeProvider } from "@mui/material";

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
        <div className='footer-text' id='about-section'>
          'Hi name is Shannon, i like to make art and stuff'
        </div>
      </div>
    </ThemeProvider>
  );
  // copywrite notice
  // social media links
  // contact info
  // bio

  // another idea
  // hav ea showcase for a single art at the top of the woven list to display?
}
