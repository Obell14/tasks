import React from "react";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <h1>This is the New Header</h1>
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World. COS420
            </p>
            <p>Owen Bellew</p>
        </div>
    );
}

export default App;
