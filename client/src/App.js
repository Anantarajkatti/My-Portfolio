import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import { useEffect, useState } from "react";
import ShowLoader from "./Components/ShowLoader";
import axios from './../node_modules/axios/lib/axios';
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, setPortfolioData, ShowLoading, ReloadData } from "./redux/rootSlice";
import AdminIndex from "./Pages/Admin/AdminIndex";
import AdminLogin from "./Pages/Admin/AdminLogin";

function App() {
  const {loading, portfolioData,reloadData}=useSelector((state)=>state.root)
  // const [loading, setLoading] = useState(true);
  const dispatch= useDispatch()

  const getPortfolioData=async()=>{
      try {
       dispatch(ShowLoading())
        const response= await axios.get('https://my-portfolio-anantarajkati.onrender.com/api/portfolio/get-portfolio-data')
       dispatch(setPortfolioData(response.data))
       dispatch(ReloadData(false))
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

  useEffect(()=>{
    if(reloadData){
      getPortfolioData()
    }
  },[reloadData])


  

  return (
    <>
      <BrowserRouter>    
        {loading ? <ShowLoader /> : null}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminIndex/>}/>
          <Route path="/admin-login" element={<AdminLogin/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
 
export default App;
