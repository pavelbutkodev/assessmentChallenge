import React, { FC } from 'react';

import styles from './styles.module.scss'

interface IProps {
  message: string
  fourBaseBool(): number,
  fiveBaseBool(): number,
  sixBaseBool(): number,
  customOne(): number,
}

const Result: FC<IProps> = ({message, fourBaseBool, fiveBaseBool, sixBaseBool, customOne}: IProps) => {
  return (
    <div>
      <p className={styles.result_paragraph}>Result:</p>
      {
        message === 'first'
          ? <>
            <p className={styles.result_logic}>A && B && !C = <b>true</b></p>
            <p className={styles.result_logic}>D + (D * E / 10) = <b>{fourBaseBool().toFixed(2)}</b></p>
          </>
          : ''
      }
      {
        message === 'two'
          ? <>
            <p className={styles.result_logic}>A && B && C = <b>true</b></p>
            <p className={styles.result_logic}>D + (D * (E - F) / 25.5) = <b>{fiveBaseBool().toFixed(2)}</b></p>
            <p className={styles.result_paragraph}>Custom:</p>
            <p className={styles.result_logic}>2 * D + (D * E / 100) = <b>{customOne().toFixed(2)}</b></p>
          </>
          : ''
      }
      {
        message === 'three'
          ? <>
            <p className={styles.result_logic}>!A && B && C = <b>true</b></p>
            <p className={styles.result_logic}>D - (D * F / 30) = <b>{sixBaseBool().toFixed(2)}</b></p>
          </>
          : ''
      }
      {
        message === 'error'
          ? <p className={styles.error}>Error!</p>
          : ''
      }
    </div>
  );
}

export default Result;
