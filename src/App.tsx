import "./App.css";
import { Container } from "@mui/material";
import WovenImageList from "./components/WovenImageList/WovenImageList";
import Stack from "@mui/material/Stack";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Container maxWidth='md' style={{ minWidth: "375px" }}>
      <Stack>
        <Hero />

        <WovenImageList />

        <Footer />
      </Stack>
    </Container>
  );
}

export default App;
