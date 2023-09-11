import React from "react";
import * as S from "./style";
import data from "./data/index";

function MySkill() {
  return (
    <> 
      <S.containerMySkill>
         <section className="section-title">
               <h2>My Skills</h2>
         </section>
        <S.contentMySkill>
          {data.map((item, index)=>{
            <S.Card key={index}>
            <div key={index}>

            </div>
            <h4 key={index}> {item.title} </h4>
            <p key={index}> {item.describe} </p>
        </S.Card>
          })}
          {
            data?.map((index, item)=>{
              <S.Card key={index}>
            <div key={index}>

            </div>
            <h4 key={index}> {item.title} </h4>
            <p key={index}> {item.describe} </p>
        </S.Card>
            })
          }
          <S.Card>
            <div></div>
            <h4>HTML</h4>
            <p>Linguagem de marcação de hipertextos</p>
          </S.Card>
          <S.Card>
            <div></div>
            <h4>CSS3</h4>
            <p>Linguagem de marcação de hipertextos</p>
          </S.Card>
          <S.Card>
            <div></div>
            <h4>PHP</h4>
            <p>Linguagem de marcação de hipertextos</p>
            
          </S.Card>
          <S.Card>
            <div></div>
            <h4>JAVASCRIPT</h4>
            <p>Linguagem de marcação de hipertextos</p>
            
          </S.Card>
          <S.Card>
            <div></div>
            <h4>TYPESCRIPT</h4>
            <p>Linguagem de marcação de hipertextos</p>
            
          </S.Card>
          <S.Card>
            <div></div>
            <h4>REACTJS</h4>
            <p>Linguagem de marcação de hipertextos</p>
            
          </S.Card>
          <S.Card>
            <div></div>
            <h4>NODEJS</h4>
            <p>Linguagem de marcação de hipertextos</p>
            
          </S.Card>
          <S.Card>
            <div></div>
            <h4>DOCKER</h4>
            <p>Linguagem de marcação de hipertextos</p>
            
          </S.Card>
          <S.Card>
            <div></div>
            <h4>GIT</h4>
            <p>Linguagem de marcação de hipertextos</p>
            
          </S.Card>
          <S.Card>
            <div></div>
            <h4>SCRUM</h4>
            <p>Linguagem de marcação de hipertextos</p>
            
          </S.Card>
        </S.contentMySkill>
      </S.containerMySkill>
    </>
  );
}

export default MySkill;
