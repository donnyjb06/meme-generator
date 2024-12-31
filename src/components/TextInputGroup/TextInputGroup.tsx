import styles from "@components/TextInputGroup/input-group.module.scss";
import { FC } from "react";

interface InputGroupProps {
  labelText: string,
  inputName: string,
  inputId: string,
  inputPlaceholder: string,
	changeText: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInputGroup: FC<InputGroupProps> = ({labelText, inputName, inputId, inputPlaceholder, changeText}) => {
  return(
    <label className={styles.inputGroup}>
		{labelText}
		<input
			type="text"
			name={inputName}
			id={inputId}
			placeholder={inputPlaceholder}
      className={styles.inputGroup__input}
			onChange={changeText}
		/>
	</label>
  )
}

export default TextInputGroup;
