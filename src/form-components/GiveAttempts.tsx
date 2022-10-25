import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");
    // function use(): void {
    //     setAttmeptsLeft(attemptsLeft - 1);
    // }
    // function gain(): void {
    //     setAttmeptsLeft(attemptsLeft + requestedAttempts);
    // }

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="formAnswer">
                <Form.Label> Check Answer: </Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setRequestedAttempts(event.target.value)
                    }
                />
            </Form.Group>
            <Button
                onClick={() => setAttemptsLeft(attemptsLeft - 1)}
                disabled={attemptsLeft == 0 ? true : false}
            >
                use
            </Button>
            <Button
                onClick={() =>
                    setAttemptsLeft(
                        attemptsLeft + (parseInt(requestedAttempts) || 0)
                    )
                }
            >
                gain
            </Button>
            Attempts Left: {attemptsLeft}
        </div>
    );
}
