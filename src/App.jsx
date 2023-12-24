import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import { ThemeProvider } from '@mui/material/styles';
import theme from "./utils/theme.js";






function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App;
