import styles from "@components/Main/main.module.scss";
import Form from "@components/Form/Form";
import Meme from "@components/Meme/Meme";
import MemeObj from "@interfaces/MemeObj";
import { FC, useState } from "react";


const Main: FC = () => {
  const initialMeme: MemeObj = {
    imgSrc: "http://i.imgflip.com/1bij.jpg",
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
  }
  const [meme, setMeme] = useState<MemeObj>(initialMeme)

  return(
    <main className={styles.main}>
      <Form />
      <Meme imgSrc={meme.imgSrc}
            topText={meme.topText}
            bottomText= {meme.bottomText} />
    </main>
  )
}

export default Main;