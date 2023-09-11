import React from "react";
//import Head from "../../Components/Head";
import Header from "../../Components/Header";
import Banner from "../../Components/Banner";
import Myselfie from "../../Components/MySelfie";
import Historic from "../../Components/Historic";
import MySkill from "../../Components/MySkill";
import MyProject from "../../Components/MyProjects";

function Home() {
  return (
    <>
    <Header/>
    <Banner/>
    <Myselfie/>
    <Historic/>
    <MySkill/>
    <MyProject/>
    </>
  ); 
}

export default Home;
