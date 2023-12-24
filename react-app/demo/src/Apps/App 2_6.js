import React from "react";
import logo from './logo.svg';
import './App.css';

const Text = ({ style = {} }) => (
    <p style={{...style, fontFamily: "Inter"}}>Hello World! </p>
);
const StyledText = withStyles(Text); //new Copmponent

function withStyles(Copmponent) {
    return(props) => {
        const style = {
            color: "red",
            fontSize: "2em",
            // merge props (dung de noi cac thuoc tinh)
            ...props.style,
        };
        return <Copmponent {...props} style={style} />;
    };
}

function welcome({myName}) {
    return(
        <section>
            <h1>Hello, <span>{myName}</span> </h1>
        </section>
    )
}

export default function MyApp() {
    return (
        <div className="App">
            <Welcome myName="ThiDK" />
            Text Copmponent <Text />
            StyledText Copmponent <StyledText />
        </div>
    );
}