import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [Holiday, setHoliday] = useState<string>("🎄");
    function CyclebyAlphabet(): void {
        if (Holiday == "🎄") {
            setHoliday("🎃");
        } else if (Holiday == "🎃") {
            setHoliday("🎆");
        } else if (Holiday == "🎆") {
            setHoliday("☘️");
        } else if (Holiday == "☘️") {
            setHoliday("💘");
        } else {
            setHoliday("🎄");
        }
    }
    function CyclebyYear(): void {
        if (Holiday == "💘") {
            setHoliday("☘️");
        } else if (Holiday == "☘️") {
            setHoliday("🎃");
        } else if (Holiday == "🎃") {
            setHoliday("🎄");
        } else if (Holiday == "🎄") {
            setHoliday("🎆");
        } else {
            setHoliday("💘");
        }
    }
    return (
        <div>
            <Button onClick={CyclebyAlphabet}>Advance by Alphabet</Button>
            <Button onClick={CyclebyYear}>Advance by Year</Button>
            Holiday: {Holiday}
        </div>
    );
}
