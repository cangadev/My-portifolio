import React from "react";
import * as S from "./style";

function Myselfie() {
  return (
    <>
      <S.containerMyselfie>
        <S.contentMyselfie>
            <section className="section-title">
               <h2>About My-Selfie</h2>
            </section>
            <div className="container-description">
            <div className="description-first-side">
              <h3>My name is Canga Dev, <span>I'm software developer</span></h3>
              <p>
                Nascido em Angola-Luanda. Gosto muita da área de tecnologia e, estou sempre estudando pra ficar por dentro do que há de novo.
                Sempre fui apaixonado por criação e me encontrei na área! Criatividade, disposição e organização são qualidades que tenho orgulho em ter!
                Abaixo separei algumas informações sobre mim, assim você pode me conhecer um pouquinho mais!
              </p>
            </div>
            <div className="description-second-side">
              <h3>My personal data</h3>
              <div>
                <section>
                  <span><h5>Dt-Nascimento : </h5> 07 / 07 / 2002</span>
                  <span><h5>Nacionalidade : </h5> Angolana</span>
                  <span><h5>Idade : </h5> 21 </span> 
                </section>
                <section>
                  <span><h5>Atual morada : </h5> Angola</span>
                  <span><h5>Cidade : </h5> Luanda</span>
                  <span><h5>E-mail : </h5> cangadev7@gmail.com</span>
                </section>
              </div>
              <section className="second-side-btns">
                <button>Download CV</button>
                <button>Send message</button>
              </section>
              </div>
            </div>
        </S.contentMyselfie>
      </S.containerMyselfie>
    </>
  );
}

export default Myselfie;
