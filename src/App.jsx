
import HomePage from "./Pages/HomePage"
import DetailsPage from './Pages/DetailsPage'
import About from './Pages/About'
import Layout from "./layouts/layout"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Humans from "./Pages/Humans"
import Aliens from "./Pages/Aliens"
import { useEffect, useState } from "react"

function App() {

  const [data, setData] = useState([]);
  const [err, setErr] = useState(null)
  const url = 'https://rickandmortyapi.com/api/character/  '
  async function fetching(url) {
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const info = await response.json();
      setData(info.results)
    } catch (error) {
      console.log(`error de tipo ${error}`);
      console.log();

    }
  }

  useEffect(() => {
    fetching(url)
  }, [])


  return (
    <BrowserRouter>
      {

        err ? (
          null) :
          <Routes>

            <Route element={<Layout></Layout>}>

              <Route path="/about" element={<About />} />
              <Route path="/" element={<HomePage data={data} />} />
              <Route path="/humans" element={<Humans data={data.filter(item => item.species === "Human")} />} />
              <Route path="/aliens" element={<Aliens data={data.filter(item => item.species === "Alien")} />} />

            </Route>
          </Routes>
      }


    </BrowserRouter>
  )
}

export default App
