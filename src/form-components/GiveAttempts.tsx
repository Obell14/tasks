import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [atLeft, setAtLeft] = useState<number>(3);
    const [atReq, setAtReq] = useState<string>("");
    return (
        <div>
            <h3>Give Attempts</h3>
            <div>{atLeft}Attempts Left</div>
            <Button
                disabled={atLeft == 0}
                onClick={() => {
                    setAtLeft(atLeft - 1);
                }}
            >
                use
            </Button>
            <Button
                onClick={() => {
                    if (atReq !== "") {
                        setAtLeft(atLeft + Number(atReq));
                    }
                }}
            >
                gain
            </Button>
            <Form.Group controlId="box">
                <Form.Label>attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={atReq}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setAtReq(event.target.value)
                    }
                />
            </Form.Group>
        </div>
    );
}
