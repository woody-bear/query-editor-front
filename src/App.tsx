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
      <div className="root-container">
        <Header name="header" />
        <div className="contents-container">
          <Navigation name="navigation" />
          <div className="main-content">
            <div className="editorInfo-container">
              <Editor name="editor" />
              <Info name="info" />
            </div>
            <div className="data-container">
              <Data name="data" />
            </div>
          </div>
          
          
          {/* <Counter startNumber={5} /> */}
        </div>
        
      </div> 
    );
  }
}

export default App;