import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [username, setUsername] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);
    function updateUsername(event: React.ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value);
    }
    return (
        <div>
            <Form.Check
                type="switch"
                id="editModeSwitch"
                label="Edit Mode"
                checked={editMode}
                onChange={() => setEditMode(!editMode)}
            />
            {editMode ? (
                <div>
                    <Form.Group controlId="formName">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            value={username}
                            onChange={updateUsername}
                        />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="StudentCheck"
                        label="is a student?"
                        checked={student}
                        onChange={() => setStudent(!student)}
                    />
                </div>
            ) : (
                <span>
                    {username} is {student ? "" : "not"} a student
                </span>
            )}
        </div>
    );
}
