import { FC } from "react";
import styles from "./button.module.scss";

type TButtonProps = {
  text: string;
};

const Button: FC<TButtonProps> = ({ text }) => {
  return (
    <button className={styles.button} type="button">
      {text}
    </button>
  );
};

export default Button;
