import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftNumber, setNumberLeft] = useState<number>(6);
    const [rightNumber, setNumberRight] = useState<number>(2);
    function changeNumLeft(): void {
        setNumberLeft(d6);
    }
    function changeNumRight(): void {
        setNumberRight(d6);
    }
    return (
        <div>
            <Button data-testid="left-die" onClick={changeNumLeft}>
                Roll Left {leftNumber}
            </Button>
            <Button data-testid="right-die" onClick={changeNumRight}>
                Roll Right {rightNumber}
            </Button>
            {leftNumber == rightNumber && leftNumber != 1 && (
                <span>You Win !</span>
            )}
            {leftNumber == 1 && rightNumber == 1 && <span>You Lose!</span>}
        </div>
    );
}
