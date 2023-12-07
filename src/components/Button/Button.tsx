import React from 'react';
import styles from './Button.module.scss';

const Button = ({
  children,
  ...restProps
}: React.ButtonHTMLAttributes<HTMLButtonElement>): React.ReactElement => {
  return (
    <button {...restProps} className={styles.main}>
      {children}
    </button>
  );
};

export default Button;
