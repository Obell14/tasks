import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [type, changeType] = useState<QuestionType>("short_answer_question");
    function flipState(): void {
        if (type == "short_answer_question") {
            changeType("multiple_choice_question");
        } else {
            changeType("short_answer_question");
        }
    }
    return (
        <div>
            <Button onClick={flipState}>Change Type</Button>
            {type == "short_answer_question"
                ? "Short Answer"
                : "Multiple Choice"}
        </div>
    );
}

/*The ChangeType component simulates another an editor for a quiz application that
 provides a way to change the type of a quiz question by pressing a button. Recall from the Objects task 
 that Quiz Questions can come in either Multiple Choice or Short Answer.

-You will need a single state to handle whether the type is ultiple_chomice_question or short_answer_question.
-The type of the state should be QuestionType, not string.
-There should be a button labelled Change Type that changes the state from one type to the other.
-When the type is multiple_choice_question, the text Multiple Choice should be visible.
-When the type is short_answer_question, the text Short Answer should be visible.
-The initial type must be short_answer_question.*/
