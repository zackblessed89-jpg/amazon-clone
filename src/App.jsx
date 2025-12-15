
// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import Header from "./Components/Header/Header";
import Carouse from "./Components/Carousel/Carousel";
import CarouselEffect from "./Components/Carousel/Carousel";

import './App.css'
import { Carousel } from "react-responsive-carousel";
import Category from "./Components/Category/Category";


function App() {


  return (
    <>
    <Header/>
    <CarouselEffect/>
    <Category/>
  
    </>
  )
}

export default App
