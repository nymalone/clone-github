import "react-calendar-heatmap/dist/styles.css";

import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "./styles/GlobalStyles";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Profile from "./pages/Profile";
import Repo from "./pages/Repo";

import { ThemeName, themes } from "./styles/theme";

function App() {
  const [themeName, setThemeName ] = useState<ThemeName>('light');
  // o tema atual vai ser uma referência aos temas que eu tenho guardado só que com nome do tema atual
  const currentTheme = themes[themeName] // o tema atual é uma referencia ao tema que eu tenho guardado
  // após isso vou no meu global styles e modifico a parte do :root

  // é o meu header (ao clique na imagem) que vai fazer a mudança de theme

  return (
    <ThemeProvider theme={currentTheme}>
      <BrowserRouter>
        <Header themeName={themeName} setThemeName={setThemeName} />

        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/:username" element={<Profile />} />
          <Route path="/:username/:reponame" element={<Repo />} />
        </Routes>

        <Footer />
        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
