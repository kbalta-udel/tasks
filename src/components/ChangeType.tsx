import React, { useState } from "react";
import { Button } from "react-bootstrap";
// import { Type } from "typescript";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [QuestionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );
    function flipType(): void {
        if (QuestionType === "short_answer_question") {
            setQuestionType("multiple_choice_question");
        } else {
            setQuestionType("short_answer_question");
        }
    }
    return (
        <div>
            <Button onClick={flipType}>Change Type</Button>
            {QuestionType == "short_answer_question" ? (
                <span>Short Answer</span>
            ) : (
                <span>Multiple Choice</span>
            )}
        </div>
    );
}
