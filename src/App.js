import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <br/>
        <div className="bg-indigo-darkest text-center py-4 lg:px-4">
          <div className="p-2 bg-indigo-darker items-center text-indigo-lightest leading-none lg:rounded-full flex lg:inline-flex" role="alert">
            <span className="flex rounded-full bg-indigo uppercase px-2 py-1 text-xs font-bold mr-3">New</span>
            <span className="font-semibold mr-2 text-left flex-auto">Get the coolest t-shirts from our brand new store</span>
            <svg className="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
          </div>
        </div>
        <div className="bg-red-lightest border border-red-light text-red-dark px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Holy smokes!</strong>
          <span className="block sm:inline">Something seriously bad happened.</span>
          <span className="absolute pin-t pin-b pin-r px-4 py-3">
            <svg className="fill-current h-6 w-6 text-red" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
          </span>
        </div>
        <div role="alert">
          <div className="bg-red text-white font-bold rounded-t px-4 py-2">
            Danger
          </div>
          <div className="border border-t-0 border-red-light rounded-b bg-red-lightest px-4 py-3 text-red-dark">
            <p>Something not ideal might be happening.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
