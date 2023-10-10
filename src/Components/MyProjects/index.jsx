import React from "react";
import * as S from "./style";
import { data } from "./data/index";
import { Link } from "react-router-dom";

function MyProject() {

  return (
    <> 
      <S.containerMyProject>
         <section className="section-title">
               <h2>My Projects</h2>
         </section>
        <S.contentMyProject>
          {
          data.map((item, index)=>( 

          <S.Card key={index} className="card">
            <Link key={index} to={item.path}>
            <div></div>
            <h4 key={index}> {item.title} </h4>
            <p key={index}> {item.describe} </p>
            </Link>
          </S.Card>
          ))
        }
        </S.contentMyProject>
      </S.containerMyProject>
    </>
  );
}

export default MyProject;
