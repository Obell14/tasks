import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <h1>This is the New Header</h1>
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World. COS420.
            </p>
            <Button aria-label="Log Hello World">Click Me</Button>
            <img
                src="C:\Users\owenb\Desktop\Rodman"
                alt="a picture of Dennis Rodman"
            />
            <ol>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ol>
            <p>Owen Bellew</p>
        </div>
    );
}

export default App;
