import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Fitness from "./components/Fitness";
import LatestProducts from "./components/LatestProducts";
import Calculator from "./components/Calculator";
import Feedback from "./components/Feedback";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Fitness />
      <LatestProducts />
      <Calculator />
      <Feedback />
      <Blog />
      <Footer />
      <div class=" text-white p-4">
        <h1 class="font-Poppins text-sm text-center">
          Developed By{" "}
          <strong class="font-Averia font-semibold cursor-pointer text-lg text-[#e7ff14]">
            Syeda Hafsa
          </strong>
        </h1>
      </div>
    </div>
  );
}

export default App;
