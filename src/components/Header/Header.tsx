import styles from "@components/Header/header.module.scss";
import trollFace from "@assets/Troll Face.png";

const Header = () => {
	return (
		<header className={styles.header}>
			<img
				src={trollFace}
				alt="Troll face meme"
				className={styles.header__logo}
			/>
			<h1 className={styles.header__title}>Meme Generator</h1>
		</header>
	);
};

export default Header;
