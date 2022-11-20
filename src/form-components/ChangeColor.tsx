import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("red");

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            <Form.Check
                inline
                type="radio"
                name="red"
                onChange={updateColor}
                id="color-check-red"
                label="red"
                value="red"
                checked={color === "red"}
                style={{ backgroundColor: "red" }}
            />
            <Form.Check
                inline
                type="radio"
                name="green"
                onChange={updateColor}
                id="color-check-green"
                label="green"
                value="green"
                checked={color === "green"}
                style={{ backgroundColor: "green" }}
            />
            <Form.Check
                inline
                type="radio"
                name="blue"
                onChange={updateColor}
                id="color-check-blue"
                label="blue"
                value="blue"
                checked={color === "blue"}
                style={{ backgroundColor: "blue" }}
            />
            <Form.Check
                inline
                type="radio"
                name="yellow"
                onChange={updateColor}
                id="color-check-yellow"
                label="yellow"
                value="yellow"
                checked={color === "yellow"}
                style={{ backgroundColor: "yellow" }}
            />
            <Form.Check
                inline
                type="radio"
                name="brown"
                onChange={updateColor}
                id="color-check-brown"
                label="brown"
                value="brown"
                checked={color === "brown"}
                style={{ backgroundColor: "brown" }}
            />
            <Form.Check
                inline
                type="radio"
                name="grey"
                onChange={updateColor}
                id="color-check-grey"
                label="grey"
                value="grey"
                checked={color === "grey"}
                style={{ backgroundColor: "grey" }}
            />
            <Form.Check
                inline
                type="radio"
                name="black"
                onChange={updateColor}
                id="color-check-black"
                label="black"
                value="black"
                checked={color === "black"}
                style={{ backgroundColor: "black" }}
            />
            <Form.Check
                inline
                type="radio"
                name="white"
                onChange={updateColor}
                id="color-check-white"
                label="white"
                value="white"
                checked={color === "white"}
                style={{ backgroundColor: "white" }}
            />
            <Form.Check
                inline
                type="radio"
                name="purple"
                onChange={updateColor}
                id="color-check-purple"
                label="purple"
                value="purple"
                checked={color === "purple"}
                style={{ backgroundColor: "purple" }}
            />
            ;
            <div data-testid="colored-box" style={{ backgroundColor: color }}>
                You have chosen {color}.
            </div>
        </div>
    );
}
