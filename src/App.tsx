import "./App.css";
import { Container } from "@mui/material";
import WovenImageList from "./components/WovenImageList/WovenImageList";
import Stack from "@mui/material/Stack";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Container maxWidth='lg' style={{ minWidth: "375px" }}>
      <Stack>
        <Header />

        <WovenImageList />

        <Footer />
      </Stack>
    </Container>
  );
}

export default App;
