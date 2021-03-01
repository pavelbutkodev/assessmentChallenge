import React, {
  FC,
  useCallback,
  useState,
  SyntheticEvent
} from "react";

import CircularIndeterminate from "../../component/loading";
import Result from "../../component/result";

import styles from './styles.module.scss';

import {
  IState,
  IStateSetter,
  IMockInt,
  IMockBoolean
} from "./types";

const defaultState = {
  aVar: false,
  bVar: false,
  cVar: false,
  dVar: 1,
  eVar: 3,
  fVar: 5
}

const MainWindow: FC = () => {

  const [state, setState] = useState<IState>(defaultState);
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const firstBaseBool = () => state.aVar && state.bVar && !state.cVar

  const secondBaseBool = () => state.aVar && state.bVar && state.cVar

  const thirdBaseBool = () => !state.aVar && state.bVar && !state.cVar

  const fourBaseBool = () => state.dVar + (state.dVar * state.eVar / 10)

  const fiveBaseBool = () => state.dVar + (state.dVar * (state.eVar - state.fVar) / 25.5)

  const sixBaseBool = () => state.dVar - (state.dVar * state.fVar / 30)

  const customOne = () => 2 * state.dVar + (state.dVar * state.eVar / 100)

  const mockBool: IMockBoolean[] = [
    {
      name: 'aVar',
      value: state.aVar,
      id: 1,
    },
    {
      name: 'bVar',
      value: state.bVar,
      id: 2,
    },
    {
      name: 'cVar',
      value: state.cVar,
      id: 3,
    },
  ]

  const mockInt: IMockInt[] = [
    {
      name: 'dVar',
      value: state.dVar,
      id: 1,
    },
    {
      name: 'eVar',
      value: state.eVar,
      id: 2,
    },
    {
      name: 'fVar',
      value: state.fVar,
      id: 3,
    },
  ]

  const handleEverythingCount = () => {

    setMessage("");
    setLoading(true);
    setTimeout(() => { // timeout needed for loading. Buld's count 1 sec.
      if (firstBaseBool()) {
        setLoading(false);
        return setMessage('first')
      }
      if (secondBaseBool()) {
        setLoading(false);
        return setMessage('two')
      }
      if (thirdBaseBool()) {
        setLoading(false);
        return setMessage('three')
      }
      setMessage("error")
      setLoading(false);
    }, 1000)
  }

  const handleInputChange = useCallback((array: IStateSetter[]) => {

    setState(prevState => {

      array.forEach((elem: IStateSetter) => prevState = {
        ...prevState,
        [elem.key]: elem.item
      })

      return (prevState)
    })
  }, [])

  return (
    <div className={styles.wrapper}>
      <div className={styles.input_block}>
        {mockBool.map((item, index) =>
          <div className={styles.input_checkbox} key={index}>
            <p className={styles.input_name}>
              {item.name[0].toUpperCase()}
            </p>
            <input
              className={styles.input_checkbox_field}
              type="checkbox"
              checked={item.value}
              onChange={(e: SyntheticEvent) => handleInputChange([{
                key: item.name,
                item: Boolean((e.target as HTMLInputElement).checked)
              }])}
            />
          </div>
        )}
        {mockInt.map(({name, value, id}) =>
          <div className={styles.input_text} key={id}>
            <p className={styles.input_name}>
              {name.length > 1 && name[0].toUpperCase()}
            </p>
            <input
              className={styles.input_text_field}
              type="text"
              value={value}
              onChange={(e: SyntheticEvent) => handleInputChange([{
                key: name,
                item: Number((e.target as HTMLInputElement).value)
              }])}
            />
          </div>
        )}
        <button
          className={styles.button_click}
          onClick={handleEverythingCount}
        >
          click
        </button>
      </div>
      <div className={styles.waiting}>
        {loading ? <CircularIndeterminate/> : null}
      </div>
      <div className={styles.result}>
        <Result
          message={message}
          sixBaseBool={sixBaseBool}
          fiveBaseBool={fiveBaseBool}
          fourBaseBool={fourBaseBool}
          customOne={customOne}
        />
      </div>
    </div>
  );
}

export default MainWindow;
