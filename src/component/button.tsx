import React from "react";
import styles from "./button.module.css";
import clsx from "clsx";

const Button: React.FC<{
  spin?: boolean;
  onClick?: React.DOMAttributes<HTMLButtonElement>["onClick"];
}> = (props) => {
  return (
    <button
      className={clsx(styles.button, { [styles.spin]: props.spin })}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
