import React, { useState, useEffect }  from "react";
import * as S from "./style"
import Img from "../../images/cbc2.JPG"

function Banner() {

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Software Developer <⚡>"];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  const period = 100;

  useEffect(() => {
      let ticker = setInterval(() => {
          tick();
      },delta)

      return () => { clearInterval(ticker) };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text])

  const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
          setDelta(prevDelta => prevDelta / 2)
      }

      if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true)
          setDelta(period);
      } else if(isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setDelta(500);
  }
}

  return (
    <>
      <S.containerBanner>
        <S.contentBanner>
            <div>
                <h4>Hello, I'm <span>Canga Dev</span></h4>
                <span className="wrap">{text}</span>
                <button>See more</button>
            </div>
            <section>
                <img src={Img} alt="" />
            </section>
        </S.contentBanner>
      </S.containerBanner>
    </> 
  );
}

export default Banner;
