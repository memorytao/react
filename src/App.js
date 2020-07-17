import React from 'react';
// import logo from './logo.svg';
import './App.css';
import MainUI from './ui/MainUI';

class App extends React.Component {
  // function App() {


  render() {

    return (
      <div className="App">
        <div>MODE {process.env.NODE_ENV} | {process.env.PUBLIC_URL} </div>
        <MainUI />
      </div>
    );
  }

}

export default App;
