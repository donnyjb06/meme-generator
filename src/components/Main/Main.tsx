import styles from "@components/Main/main.module.scss";
import Form from "@components/Form/Form";
import Meme from "@components/Meme/Meme";
import MemeObj from "@interfaces/MemeObj";
import { FC, FormEvent, useState } from "react";

const Main: FC = () => {
	const initialMeme: MemeObj = {
		imgSrc: "http://i.imgflip.com/1bij.jpg",
		topText: "One does not simply",
		bottomText: "Walk into Mordor",
	};
	const [meme, setMeme] = useState<MemeObj>(initialMeme);

	const generateMeme = (event: FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
	};

	const changeText = (event: React.ChangeEvent<HTMLInputElement>): void => {
		const { value, name } = event.currentTarget;
		setMeme((prevMeme) => ({
			...prevMeme,
			[name]: value,
		}));
	};

	return (
		<main className={styles.main}>
			<Form generateMeme={generateMeme} changeText={changeText} />
			<Meme
				imgSrc={meme.imgSrc}
				topText={meme.topText}
				bottomText={meme.bottomText}
			/>
		</main>
	);
};

export default Main;
