import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [inpt, setInpt] = useState<string>("");
    function newAns(event: React.ChangeEvent<HTMLInputElement>) {
        setInpt(event.target.value);
    }
    return (
        <div>
            <h3>Check Answer</h3>
            {inpt === expectedAnswer ? "✔️" : "❌"}
            <Form.Group controlId="newNew">
                <Form.Label>display:</Form.Label>
                <Form.Control value={inpt} onChange={newAns} />
            </Form.Group>
        </div>
    );
}
