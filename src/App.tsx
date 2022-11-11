import React from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";
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
            <hr></hr>
            {/* <DoubleHalf></DoubleHalf> */}
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr /> Hello World.
            <CycleHoliday></CycleHoliday>
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
