import Stack from "@mui/material/Stack";
import { Container } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./Hero.css";

const bio = "This is a bio";

export function Hero() {
  return (
    <Container>
      <Stack className='hero-stack'>
        <h1>Shannon Ilg</h1>
        {bio}
      </Stack>
      <Stack className='link-stack'>
        {"Shop"}
        {"Contact"}
        <InstagramIcon />
      </Stack>
    </Container>
  );
}

export default Hero;
