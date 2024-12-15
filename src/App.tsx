import { Container } from "@mui/material";
import WovenImageList from "./components/WovenImageList/WovenImageList";
import Stack from "@mui/material/Stack";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// another idea
// hav ea showcase for a single art at the top of the woven list to display?

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
