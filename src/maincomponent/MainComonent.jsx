import { Outlet } from "react-router"
import Header from "../componenets/header/Header"
import Footer from "../componenets/footer/Footer"

export const MainComponent =()=> {


 return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
 )
}