import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    //const [check, setCheck] = useState<string>("❌");
    function updateText(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
        // console.log(answer);
        // if (expectedAnswer === answer) {
        //     setCheck("✔️");
        // }
        // // } else {
        // //     setCheck("❌");
        // // }
    }
    // function checking(): void {
    //     if (expectedAnswer == answer) {
    //         setCheck("✔️");
    //     } else {
    //         setCheck("❌");
    //     }
    // }
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="textbox">
                <Form.Label>Enter Answer:</Form.Label>
                <Form.Control
                    type="textbox"
                    value={answer}
                    onChange={updateText}
                />
            </Form.Group>
            {answer === expectedAnswer && <span>✔️</span>}
            {answer !== expectedAnswer && <span>❌</span>}
        </div>
    );
}
