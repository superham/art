import "./App.css";
import { Container } from "@mui/material";
import WovenImageList from "./components/WovenImageList/WovenImageList";
import Stack from "@mui/material/Stack";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <Container maxWidth='md'>
      <Stack>
        <Hero />
        <WovenImageList />
      </Stack>
    </Container>
  );
}

export default App;
