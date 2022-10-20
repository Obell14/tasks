/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const newNum = [];
    if (numbers.length == 0) {
        return [];
    }
    newNum.push(numbers[0]);
    newNum.push(numbers[numbers.length - 1]);
    return newNum;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const trip = numbers.map((x: number): number => x * 3);
    return trip;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const change = numbers.map((x: string): number => {
        if (isNaN(Number(x))) {
            return 0;
        }
        return parseInt(x);
    });
    return change;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const dollar = amounts.map((x: string): number => {
        if (x.startsWith("$")) {
            const temp = x.substring(1);
            return parseFloat(temp);
        }
        return parseFloat(x);
    });
    const checking = dollar.map((x: number): number => {
        if (isNaN(x)) {
            return 0;
        } else {
            return x;
        }
    });
    return checking;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const first = messages.map((x: string): string => {
        if (x.endsWith("!")) {
            return x.toUpperCase();
        } else {
            return x;
        }
    });
    const second = (x: string): boolean => !x.endsWith("?");
    const third = first.filter(second);

    return third;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const newWord = words.filter((x: string): boolean => x.length < 4);
    return newWord.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const rgb = colors.filter(
        (x: string): boolean => x == "red" || x == "blue" || x == "green"
    );
    if (rgb.length == colors.length) {
        return true;
    }
    return false;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length == 0) {
        return "0=0";
    }
    const sum = addends.reduce((x: number, num: number) => x + num, 0);
    const togth = addends.join("+");
    const final = sum.toString().concat("=", togth);
    return final;
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
    const neg = values.findIndex((x: number): boolean => x < 0);
    if (neg == -1) {
        const sum1 = values.reduce((x: number, num: number) => x + num, 0);
        const newarr = [...values, sum1];
        return newarr;
    } else {
        const cut = values.slice(0, neg);
        const sum2 = cut.reduce((y: number, num: number) => y + num, 0);
        const copy = [...values];
        copy.splice(neg + 1, 0, sum2);
        return copy;
    }
}
