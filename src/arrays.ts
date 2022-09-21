/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(books: number[]): number[] {
    let newArray: number[] = [];
    if (books.length === 0) return [];
    else if (books.length === 1) {
        newArray = [books[0], books[0]];
        return newArray;
    } else {
        newArray = [books[0], books[books.length - 1]];
    }

    return newArray;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((numbers): number => numbers * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const newInts = numbers.map((v) => parseInt(v));
    const final = newInts.map((x) => (isNaN(x) ? (x = 0) : x));
    return final;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const withoutDollar = amounts.map((y) =>
        y.includes("$") ? y.substring(1) : y
    );
    const newInts = withoutDollar.map((v) => parseInt(v));
    const final = newInts.map((x) => (isNaN(x) ? (x = 0) : x));
    return final;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const shout = messages.map((y) => (y.endsWith("!") ? y.toUpperCase() : y));
    const withoutQuestion = shout.filter(
        (x: string): boolean => x.endsWith("?")
        //endsWith           if true, keeps     if false, deletes
    );
    const final = shout.filter(function (obj) {
        return withoutQuestion.indexOf(obj) == -1;
    });
    return final;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const small = words.filter((word: string): boolean => word.length < 4);
    const final = small.length;
    return final;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const allowed = ["red", "blue", "green"];
    if (colors.length == 0) return true;
    return colors.every((x) => allowed.includes(x));
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length == 0) return "0=0";
    const addedOnly = addends.join("+");
    const sum = addends.reduce((accumulator, value) => {
        return accumulator + value;
    });
    return sum + "=" + addedOnly;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    // eslint-disable-next-line prefer-spread
    const minimum = Math.min.apply(Math, values);
    if (values.length == 0) return [0];
    else if (minimum < 0) {
        const firstNegative = values.findIndex(
            (num: number): boolean => num < 0
        ); //                                           sum has to come after negative
        const toBeSummed = values.slice(0, firstNegative + 1);
        const addedToEnd = values.slice(firstNegative + 1);
        let sum = toBeSummed.reduce((accumulator, value) => {
            return accumulator + value;
        });
        sum = sum - values[firstNegative];
        return toBeSummed.concat(sum, addedToEnd);
    } else if (minimum > 0) {
        const sum2 = values.reduce((accumulator, value) => {
            return accumulator + value;
        });
        return values.concat(sum2);
    } else return [0];
}
