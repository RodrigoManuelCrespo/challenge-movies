import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { SearchMovie } from "./pages/SearchMovie";
import './styles/App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/:id' element={<Detail />} />
        <Route path='/search/:name' element={<SearchMovie />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
