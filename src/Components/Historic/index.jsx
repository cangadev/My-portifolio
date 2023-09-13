import React from "react";
import * as S from "./style"
import data, {experience} from "./data";

function Historic() {
  return (
    <>
      <S.containerHistoric>
        <S.contentHistoric>
            <S.contentSideLeft>
              <h3>Educação:</h3>
              <div className="contentDesc">
                {data.map((item, index)=>(
                  <section key={index} className="timeline-item">
                    <span key={index}> {item.date} </span>
                    <h4 key={index}> {item.title} </h4>
                    <p key={index}> {item.describe} </p>
                  </section>
                ))}
              </div>
            </S.contentSideLeft>
            <S.contentSideRight>
              <h3>Experiencia:</h3>
              <div className="contentDesc">
                {experience.map((item, index)=>(
                  <section key={index} className="timeline-item">
                    <span key={index}> {item.date} </span>
                    <h4 key={index}> {item.title} </h4>
                    <p key={index}> {item.describe} </p>
                  </section>
                ))}
              </div>
            </S.contentSideRight>
        </S.contentHistoric>
      </S.containerHistoric>
    </>
  );
}

export default Historic;
