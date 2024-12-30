import styles from "@components/TextInputGroup/input-group.module.scss";
import { FC } from "react";

interface InputGroupProps {
  labelText: string,
  inputName: string,
  inputId: string,
  inputPlaceholder: string,
}

const TextInputGroup: FC<InputGroupProps> = ({labelText, inputName, inputId, inputPlaceholder}) => {
  return(
    <label className={styles.inputGroup}>
		{labelText}
		<input
			type="text"
			name={inputName}
			id={inputId}
			required
			aria-required
			placeholder={inputPlaceholder}
      className={styles.inputGroup__input}
		/>
	</label>
  )
}

export default TextInputGroup;
