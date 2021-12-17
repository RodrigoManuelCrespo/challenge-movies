import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { SearchMovie } from "./pages/SearchMovie";
 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/home/:id' element={<Detail />} />
        <Route path='/home/search/:id' element={<SearchMovie />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
