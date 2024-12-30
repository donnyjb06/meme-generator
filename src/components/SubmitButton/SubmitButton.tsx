import styles from "@components/SubmitButton/submit-btn.module.scss";
import { FC } from "react";

interface SubmitButtonProp {
	buttonText: string;
}

const SubmitButton: FC<SubmitButtonProp> = ({ buttonText }) => {
	return <button type="submit" className={styles.submitBtn}>{buttonText}</button>;
};

export default SubmitButton;
