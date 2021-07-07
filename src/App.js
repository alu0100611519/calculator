import React, { Component, useState } from 'react';
import words from 'lodash.words'
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import Result from './components/Result';
import Functions from './components/Functions';
import Numbers from './components/Numbers';
import MathOperations from './components/MathOperations';
import calcReducer from './reducers/calcReducer'
import './App.css';


const App = () => {
    console.log("Renderización de App")
    return (
    <main className='react-calculator'>
        <Result value={undefined} />
        <Numbers onClickNumber={number => {
            console.log("Click en number", number) 
        }} />
        <Functions 
            onContentClear={() => 
                console.log("Content Clear")}
            onDelete={() => 
                console.log("onDelete")}
        />
        <MathOperations 
            onClickOperation={operation => 
                console.log("Operation:", operation)
            } 
            onClickEqual={equal => 
                console.log("Equal:", equal)
            }
        />
    </main>)
}

export default App
