import { useContext, useEffect, useState } from "react"
import { User } from "../Context/UserContext"
import Cookies from "universal-cookie";
import axios from "axios";
import LoadingScreen from "../../Components/Loading/Loading";
import { Outlet } from "react-router-dom";

export default function PersistLogin(){
  // get current user
  const context=useContext(User);
  const token = context.auth.token;
  const[loading , setLoading ]=useState(true);
  // Cookie
  const cookie = new Cookies();
  const getToken=cookie.get("Bearer");
  // send refresh token 
  useEffect(() =>{
    async function refresh(){
      try{
        await axios.post("http://127.0.0.1:8000/api//refresh" , null , {
          headers:{
            Authorization:"Bearer" + getToken,
          },
        }).then((data) => {
      cookie.set("Bearer" , data.data.token);
      context.setAuth((prev) => {
        return{
          userDetails:data.data.user,
          token:data.data.token,
        };
      });
      });
    }catch(err){
      console.log(err);
    }finally{
      setLoading(false);
    }
  }
  !token ? refresh(): setLoading(false);
},[]);
return loading ? <LoadingScreen/> : <Outlet/>
}