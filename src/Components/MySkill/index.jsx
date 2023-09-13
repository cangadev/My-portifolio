import React from "react";
import * as S from "./style";
import data from "./data/index";

function MySkill() {
  return (
    <> 
      <S.containerMySkill>
         <section className="section-title">
               <h2 id="Myskill">My Skills</h2>
         </section>
        <S.contentMySkill>
          {data.map((item, index)=>(
            <S.Card key={index}>
            <div key={index}>

            </div>
            <h4 key={index}> {item.title} </h4>
            <p key={index}> {item.describe} </p>
        </S.Card>
          ))}
        </S.contentMySkill>
      </S.containerMySkill>
    </>
  );
}

export default MySkill;
