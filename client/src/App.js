import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import { useEffect, useState } from "react";
import ShowLoader from "./Components/ShowLoader";
import axios from './../node_modules/axios/lib/axios';
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, setPortfolioData, ShowLoading } from "./redux/rootSlice";
import AdminIndex from "./Pages/Admin/AdminIndex";

function App() {
  const {loading, portfolioData}=useSelector((state)=>state.root)
  // const [loading, setLoading] = useState(true);
  const dispatch= useDispatch()

  const getPortfolioData=async()=>{
      try {
       dispatch(ShowLoading())
        const response= await axios.get('http://localhost:5000/api/portfolio/get-portfolio-data')
       dispatch(setPortfolioData(response.data))
       dispatch(HideLoading())
      } catch (error) {
        dispatch(HideLoading())
      }
  }

  useEffect(()=>{
    if(!portfolioData){
      getPortfolioData()
    }
  },[portfolioData])


  

  return (
    <>
      <BrowserRouter>    
        {loading ? <ShowLoader /> : null}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminIndex/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
 
export default App;
