import styles from "@components/Main/main.module.scss";
import Form from "@components/Form/Form";
import Meme from "@components/Meme/Meme";
import MemeObj from "@helper/interfaces/MemeObj";
import { FC, FormEvent, useState, useEffect } from "react";
import { getRandomItem } from "@helper/functions/getRandomElement";
import memeData from "@helper/interfaces/memeData";

const Main: FC = () => {
	const [initialMemeData, setInitialMemeData] = useState<memeData[]>([] as memeData[]);

	useEffect(() => {
		fetch("https://api.imgflip.com/get_memes")
			.then((response) => response.json())
			.then((initialMemeData) => {
				setInitialMemeData(initialMemeData.data.memes);
			});
	}, []);

	const initialMeme: MemeObj = {
		imgSrc: "http://i.imgflip.com/1bij.jpg",
		altText: "One does not simply",
		topText: "One does not simply",
		bottomText: "Walk into Mordor",
	};

	const [meme, setMeme] = useState<MemeObj>(initialMeme);

	const generateMeme = (event: FormEvent<HTMLFormElement>): void => {
		event.preventDefault(); 
		const randomMeme = getRandomItem(initialMemeData);

		setMeme(prevMeme => {
			return {
				...prevMeme,
				imgSrc: randomMeme.url,
				altText: randomMeme.name
			}
		})
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
				altText={meme.altText}
				imgSrc={meme.imgSrc}
				topText={meme.topText}
				bottomText={meme.bottomText}
			/>
		</main>
	);
};

export default Main;
