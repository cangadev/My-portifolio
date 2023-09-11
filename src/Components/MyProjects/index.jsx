import React from "react";
import * as S from "./style";
import data from "./data/index";

function MyProject() {
  return (
    <> 
      <S.containerMyProject>
         <section className="section-title">
               <h2>My Projects</h2>
         </section>
        <S.contentMyProject>
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
            <h4>GOLDEN_APP</h4>
            <p>Linguagem de marcação de hipertextos</p>
          </S.Card>
          <S.Card>
            <div></div>
            <h4>API_GOLDEN</h4>
            <p>Linguagem de marcação de hipertextos</p>
          </S.Card>
          <S.Card>
            <div></div>
            <h4>GAME_SUP</h4>
            <p>Linguagem de marcação de hipertextos</p>
            
          </S.Card>
          <S.Card>
            <div></div>
            <h4>ANSWER-ME</h4>
            <p>Linguagem de marcação de hipertextos</p>
            
          </S.Card>
          <S.Card>
            <div></div>
            <h4>Buildin...</h4>
            <p>Linguagem de marcação de hipertextos</p>
            
          </S.Card>
          <S.Card>
            <div></div>
            <h4>Buildin...</h4>
            <p>Linguagem de marcação de hipertextos</p>
            
          </S.Card>
          <S.Card>
            <div></div>
            <h4>Buildin...</h4>
            <p>Linguagem de marcação de hipertextos</p>
            
          </S.Card>
          <S.Card>
            <div></div>
            <h4>Buildin...</h4>
            <p>Linguagem de marcação de hipertextos</p>
            
          </S.Card>
          <S.Card>
            <div></div>
            <h4>Buildin...</h4>
            <p>Linguagem de marcação de hipertextos</p>
            
          </S.Card>
          <S.Card>
            <div></div>
            <h4>Buildin...</h4>
            <p>Linguagem de marcação de hipertextos</p>
            
          </S.Card>
        </S.contentMyProject>
      </S.containerMyProject>
    </>
  );
}

export default MyProject;
