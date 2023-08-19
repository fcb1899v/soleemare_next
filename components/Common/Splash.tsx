import { NextPage } from "next";
import React, {useState, useEffect, CSSProperties} from "react"
import Image from "next/image"

const Splash: NextPage = () => {

  const [isLoad, setIsLoad] = useState(true);
  const [isVanish, setIsVanish] = useState(false)
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoad(false)
      setTimeout(() => {setIsVanish(true)}, 3000);
    }, 3000);
  }, []);
  
  const splashStyle: CSSProperties = {
    position: "fixed",
    width: "100vw",
    height: "110vh",
    top: 0,
    left: 0,
    zIndex: 9999,
    backgroundColor: "var(--white)",
    transition: "all 3s ease",
  }

  const splashImageStyle: CSSProperties = {
    width: 280,
    height: 280,
  }

  return <div style={splashStyle} className={isVanish ? "vanish": isLoad ? "loading": "loaded"}>
    <Image className="placeCenter" style={splashImageStyle} width={500} height={500} src="/images/soleemare_logo.png" alt="Sole e Mare"/>
  </div>  
}

export default Splash