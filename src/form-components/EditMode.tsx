import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [state, setState] = useState<boolean>(false);
    const [usrName, setUsrName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateState(event: React.ChangeEvent<HTMLInputElement>) {
        setState(event.target.checked);
    }
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setUsrName(event.target.value);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="edit-mode-check"
                label="Edit Mode?"
                checked={state}
                onChange={updateState}
            />
            <Form.Check
                hidden={!state}
                type="checkbox"
                id="checking"
                label="Is Student?"
                checked={isStudent}
                onChange={updateStudent}
            />

            <div>
                {usrName} is {isStudent ? "a student" : "not a student"}.
            </div>
            <Form.Group hidden={!state} controlId="user name">
                <Form.Label>Name:</Form.Label>
                <Form.Control value={usrName} onChange={updateName} />
            </Form.Group>
        </div>
    );
}
