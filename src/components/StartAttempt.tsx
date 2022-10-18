import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [InProgress, setInProgress] = useState<boolean>(false);
    const [Attempts, setAttempts] = useState<number>(4);

    function start(): void {
        setInProgress(true);
        setAttempts(Attempts - 1);
    }

    function stop(): void {
        setInProgress(false);
    }

    return (
        <div>
            <Button
                id="startedQuiz"
                onClick={start}
                disabled={InProgress || Attempts == 0}
            >
                Start Quiz
            </Button>
            <Button id="stoppedQuiz" onClick={stop} disabled={!InProgress}>
                Stop Quiz
            </Button>
            <Button
                id="mulligan"
                onClick={() => setAttempts(Attempts + 1)}
                disabled={InProgress}
            >
                Mulligan
            </Button>
            {Attempts} Attempts left.
        </div>
    );
}
