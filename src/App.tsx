import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App(): JSX.Element {
    return (
        <div className="App">
            <h1>This is the New Header</h1>
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World.
            </p>
            <Container>
                <Row>
                    <Col id="rectangle">First col</Col>
                    <Col id="rectangle">Second</Col>
                </Row>
            </Container>
            <Button
                onClick={() => console.log("Hello World!")}
                aria-label="Log Hello World"
            >
                Click
            </Button>
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
