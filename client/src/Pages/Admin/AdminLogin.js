import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { HideLoading, ShowLoading } from "../../redux/rootSlice";

function AdminLogin() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const dispatch =useDispatch();

  const onSubmit=async()=>{
   try {
    dispatch(ShowLoading())
         const response = await axios.post("http://localhost:5000/api/portfolio/admin-login",user);
    dispatch(HideLoading())
    if(response.data.success){
        alert(response.data.message)
        localStorage.setItem("token",JSON.stringify(response.data))
        window.location.href="/admin"
    }else{
        alert(response.data.message)
    }
   } catch (error) {
    alert(error.message)
   }
  }
  return (
    <div className="flex justify-center bg-primary h-[100vh] items-center ">
      <div className="flex flex-col border border-black border-2 bg-tertiary p-5 gap-5 w-[40vw] h-[40vh] shadow">
        <h1 className="text-center text-2xl font-semibold"> Admin Login</h1>
        <input
        className="rounded"
          placeholder="username"
          type="text"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <input
        className="rounded"
          placeholder="password"
          type="text"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <div className="flex justify-center items-center">
            <button
            className="bg-[#E0C339] justify-center items-center  px-10 py-3 rounded-full shadow font-semibold text-xl"
            onClick={onSubmit}>
               Login
            </button>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
