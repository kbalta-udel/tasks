import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const publishedQuestions = questions.filter(
        (question: Question): boolean => question.published
    );
    return publishedQuestions;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const nonEmpty = questions.filter(
        (question: Question): boolean =>
            question.body !== "" ||
            question.expected !== "" ||
            question.options.length !== 0
    );
    return nonEmpty;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const withID = questions.filter(
        (question: Question): boolean => question.id == id
    );
    if (withID.length == 1) {
        return withID[0];
    }
    return null;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const withID = questions.filter(
        (question: Question): boolean => question.id !== id
    );
    return withID;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const qNames = questions.map((question: Question): string => question.name);
    return qNames;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const qPoints = questions.map(
        (question: Question): number => question.points
    );
    const sum = qPoints.reduce((accumulator, value) => {
        return accumulator + value;
    });
    return sum;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const publishedQuestions = questions.filter(
        (question: Question): boolean => question.published
    );
    if (publishedQuestions.length == 0) return 0;
    const qPoints = publishedQuestions.map(
        (question: Question): number => question.points
    );
    const sum = qPoints.reduce((accumulator, value) => {
        return accumulator + value;
    });
    return sum;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const questionCSV = questions
        .map(
            (question: Question): string =>
                `${question.id},${question.name},${question.options.length},${question.points},${question.published}`
        )
        .join("\n");
    const final = "id,name,options,points,published\n";
    const total = final + questionCSV;
    return total;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    //(q1: Question) => return{}
    const answer = questions.map((question: Question): Answer => {
        return {
            questionId: question.id,
            text: "",
            submitted: false,
            correct: false
        };
    });
    return answer;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const newArr = JSON.parse(JSON.stringify(questions)) as typeof questions;
    const finalArr = newArr.map((question): Question => {
        return { ...question, published: true };
    });
    return finalArr;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    const final = questions.map((question): string => question.type);
    return final.every((q: string): boolean => (q === final[0] ? true : false));
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const newArr = JSON.parse(JSON.stringify(questions)) as typeof questions;
    const hi = makeBlankQuestion(id, name, type);
    newArr.push(hi);
    return newArr;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    const newArr = JSON.parse(JSON.stringify(questions)) as typeof questions;
    const final = newArr.map((obj: Question): Question => {
        return obj.id === targetId ? { ...obj, name: newName } : obj;
    });
    return final;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    const newArr = JSON.parse(JSON.stringify(questions)) as typeof questions;
    const final = newArr.map(
        (obj: Question): Question => ({
            ...obj,
            type: obj.id === targetId ? newQuestionType : obj.type,
            options:
                obj.id === targetId &&
                newQuestionType === "short_answer_question"
                    ? []
                    : obj.options
        })
    );
    return final;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    let newQuestion;
    if (targetOptionIndex === -1) {
        newQuestion = questions.map((x: Question) =>
            targetId === x.id
                ? { ...x, options: [...x.options, newOption] }
                : { ...x }
        );
    } else {
        newQuestion = questions.map((x: Question) => {
            if (x.id === targetId) {
                const q = { ...x, options: [...x.options] };
                q.options.splice(targetOptionIndex, 1, newOption);
                return q;
            } else {
                return { ...x };
            }
        });
    }
    return newQuestion;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const newArr = JSON.parse(JSON.stringify(questions)) as typeof questions;
    const toBeDuplicatedIndex = questions.findIndex(
        (question) => question.id == targetId
    );
    // console.log(toBeDuplicatedIndex);
    const newQ = duplicateQuestion(newId, questions[toBeDuplicatedIndex]);
    newArr.splice(toBeDuplicatedIndex + 1, 0, newQ);
    return newArr;
}
