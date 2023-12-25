import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import { ThemeProvider } from '@mui/material/styles';
import theme from "./utils/theme.js";

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App;
