import React, { FC } from 'react';
import MainWindow from "./layout/MainWindow";
import {Header} from "./component/header";

const App: FC = () => {
  return (
    <div>
      <Header/>
      <MainWindow/>
    </div>
  );
}

export default App;
