import HomePage from "./Pages/HomePage";
import DetailsPage from './Pages/DetailsPage';
import About from './Pages/About';
import Layout from "./layouts/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [err, setErr] = useState(null);
  const url = 'https://dattebayo-api.onrender.com/characters';

  async function fetching(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const info = await response.json();
      setData(info.characters); // Asegúrate de que `info.characters` sea la estructura correcta
    } catch (error) {
      console.error(`Error: ${error}`);
      setErr(error.message);
    }
  }

  useEffect(() => {
    fetching(url);
  }, []);

  return (
    <BrowserRouter>
      {
        err ? (
          <div>Error: {err}</div> // Mostrar error en la UI
        ) : (
          <Routes>
            <Route element={<Layout />}>
              <Route path="/about" element={<About />} />
              <Route path="/" element={<HomePage data={data} />} />
              <Route path="/homepage" element={<HomePage data={data} />} />
              <Route path="/character/:id" element={<DetailsPage data={data} />} />
            </Route>
          </Routes>
        )
      }
    </BrowserRouter>
  );
}

export default App;
