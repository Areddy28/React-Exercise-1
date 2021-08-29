import React from 'react';
import logo from './logo.svg';
import './App.css';
import { stringify } from 'querystring';
import {useState} from "react"; 

function Petinfo() {

    interface Pet {
      name: string; 
      breed: string; 
    }; 

    const [pet, setPet] = useState <Pet>({name: "Anu", breed: "Indian"}); 
  
    return (
    <div className="Petinfo">
        <h1>{pet.name} is an {pet.breed}</h1>

    </div>
  );
}

export default Petinfo;
