import * as React from 'react';
// import Counter from './Counter';
import Header from './container/header/Header';
import Navigation from './container/navigation/Navigation';
import Editor from './container/editor/Editor';
import Info from './container/info/Info';
import Data from './container/data/Data';
import './assets/css/App.css'

class App extends React.Component {
  public render() {
    return (
      <div className="grid-root-container">
        <Header name="header" />
        <Navigation name="navigation" />
        <Editor name="editor" />
        <Info name="info" />
        <Data name="data" />
        {/* <Counter startNumber={5} /> */}
      </div> 
    );
  }
}

export default App;