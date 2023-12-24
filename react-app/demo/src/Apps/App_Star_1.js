import React from "react";
import logo from './logo.svg';
import './App.css';
import { FaStar } from 'react-icons/fa';

export default function MyApp() {
    return(
        <div>
            <h1>Welcome to my app from ThiDK</h1>
            <FaStar color="red" />
            <FaStar color="green" />
            <FaStar color="blue" />
        </div>
    );
}