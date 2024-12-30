import styles from "@components/Form/form.module.scss";
import TextInputGroup from "@components/TextInputGroup/TextInputGroup";
import SubmitButton from "@components/SubmitButton/SubmitButton";
import { FC, FormEvent } from "react";

interface FormProps {
	generateMeme: (event: FormEvent<HTMLFormElement>) => void;
}

const Form: FC<FormProps> = ({ generateMeme }) => {
	return (
		<>
			<form action="#" className={styles.form} onSubmit={generateMeme}>
				<div className={styles.form__group}>
					<TextInputGroup
						labelText="Top text"
						inputName="topText"
						inputId="topText"
						inputPlaceholder="Shut up"
					/>

					<TextInputGroup
						labelText="Bottom text"
						inputName="bottomText"
						inputId="bottomText"
						inputPlaceholder="And take my money"
					/>
				</div>

				<SubmitButton buttonText="Get a new meme image" />
			</form>
		</>
	);
};

export default Form;
