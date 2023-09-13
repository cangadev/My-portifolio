import React from "react";
import * as S from "./style"

function Contact() {
  return (
    <>
      <S.containerContact>
        <S.contentContact>
            <S.contentSideLeft>
              <h3>Send a message:</h3>
              <div>
                <form action="">
                  <section>
                  <input type="text" name="" id="" placeholder="name"/>
                  <input type="text" name="" id="" placeholder="email"/>
                  </section>
                  <input type="text" name="" id="inputmsg" placeholder="Description"/>
                  <button>Send</button>
                </form>
              </div>
            </S.contentSideLeft>
            <S.contentSideRight>
              <h3>My Social media:</h3>
              <div>
                <section></section>
                <section></section>
                <section></section>
                <section></section>
                <section></section>
              </div>
            </S.contentSideRight>
        </S.contentContact>
      </S.containerContact>
    </>
  );
}

export default Contact;
