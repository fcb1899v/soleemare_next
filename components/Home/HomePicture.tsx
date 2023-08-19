import { Button } from '@mui/material'
import { NextPage } from 'next'
import { CSSProperties, useState } from 'react'
import HomeImage from './HomeImage'

interface Props  {
  width: number
  color: string 
  title: string[]
  image: string
  features: string
  message: string[]
}
  
// title={homeProducts[i].title[j]}
// image={homeProducts[i].image[j]}
// features={homeProducts[i].features[i]}
// message={homeProducts[i].message[i]}


const HomePicture: NextPage<Props> = ({ width, color, title, image, features, message }) => {

  const isSP = (width < 600)
  const isPC = (width > 1024)

  const [showChild, setShowChild] = useState(false);
  const [vanishButton, setVanishButton] = useState(false);
  const handleClick = () => {
    setShowChild(!showChild);
    setVanishButton(!vanishButton);
  };

  const border: CSSProperties = { 
    color: "#F4F5F0",
    textShadow: "1px 2px 3px var(--black)",
    background: color,
    position: "relative",
    padding: "6px 6px 0px 6px",
    margin: "0 auto",
    maxWidth: 600,
  }
  const borderImage: CSSProperties = { 
    width: "100%", 
    aspectRatio: isPC ? 3/2: undefined,
    objectFit: "cover",
    margin: 0,
  }
  const borderTitle: CSSProperties = { 
    opacity: (title[0] == "" && title[1] == "") ? 0: 1,
    transition: "opacity 2s ease",
    margin: 0,
  }
  const borderJaTitle: CSSProperties = { 
    fontSize: "min(7vw, 35px)",
    margin: 0,
  }
  const borderItTitle: CSSProperties = { 
    fontSize: "min(16vw, 80px)",
    fontFamily: "Kleymisska",
    margin: 0,
  }
  const messageStyle: CSSProperties = {
    height: showChild ? "auto" : "0px", 
    color: showChild ? "black" : "transparent",
    paddingBottom: showChild ? "5px": "0px",
  }
  const buttonStyle: CSSProperties = {
    margin: "0 auto",
    paddingBottom: 30,
    height: showChild ? "0px": "20px", 
    display: showChild ? "none" : "block",
    textAlign: "center",
  }

  return (
    <div style={{ width: isPC ? "50%": "Calc(100% - 20px)", margin: "0 auto 30px", }}> 
      <HomeImage width={width} color={color} title={title} image={image}/>
      <div style={{ margin: "20px auto 0px", padding: 10, maxWidth: 600, }}>
        <h5 style={{ paddingBottom: showChild ? "5px": "0px" }}>{features}</h5>
        {message.map((_, i) => <h5 style={messageStyle} key={`blue_message_${i}`}>{message[i]}</h5>)}
        <Button onClick={handleClick} style={buttonStyle}><h5>＋ 続きを読む</h5></Button>
      </div>
    </div>
  );
};

export default HomePicture