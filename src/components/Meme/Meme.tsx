import styles from "@components/Meme/meme.module.scss";
import { FC } from "react";
import MemeObj from "@helper/interfaces/MemeObj";

const Meme: FC<MemeObj> = ({ imgSrc, topText, bottomText }) => {
	return (
		<div className={styles.meme}>
			<img src={imgSrc} alt="" className={styles.meme__image} />
			<span className={`${styles.meme__text} ${styles.meme__text_top}`}>
				{topText}
			</span>
			<span className={`${styles.meme__text} ${styles.meme__text_bottom}`}>
				{bottomText}
			</span>
		</div>
	);
};

export default Meme;
