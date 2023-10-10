import React, { useState } from "react";
import { Link } from "react-router-dom";
import Img from "../../images/6840478.png";
import { Head } from "./style";

function Flexible(menu, setMenu) {
  if (menu === "flex") {
    setMenu("none");
  } else if (menu === "none") {
    setMenu("flex");
  }
}

export default function Header({ page }) { 
  const [menu, setMenu] = useState("none");

  return (
    <Head page={page} menu={menu}>
      <a href="/">
        <img src={Img}/>
      </a>
      <button onClick={() => Flexible(menu, setMenu)}>
        <i className="fas fa-bars" />
      </button>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/"> MySelfie </Link>
            </li>
            <li>
              <Link to="/"> Skills</Link>
            </li> 
            <li>
              <Link to="/"> Projects </Link>
            </li>
            <li>
              <Link to="/"> Contact </Link>
            </li>
          </ul>
        </nav>
        <nav>
            <>
              <Link to="/login"> Entrar </Link>
            </>
        </nav>
      </div>
    </Head>
  );
}
