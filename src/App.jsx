import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Main from "./pages/Main";
import About from "./pages/About";
import { Fragment } from "react";
import { Link } from "react-router-dom";

function App() {
  

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Layout/>}>
              <Route index element = {<Main/>}></Route>
              <Route path="about" element={<About/>}></Route>
          </Route>
          <Route path="*" element = {
            <Fragment>
              <h1>404</h1>
              <h2>Not found</h2>
              <Link to = '/'>Go to main</Link>
            </Fragment>
          }/>


         
        </Routes>
    </BrowserRouter>
        
  );
}

export default App;
