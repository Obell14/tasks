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
    const [dice1, setDice1] = useState<number>(1);
    const [dice2, setDice2] = useState<number>(2);

    return (
        <div>
            <span data-testid="left-die">{dice1}</span>
            <span data-testid="right-die">{dice2}</span>
            <Button
                onClick={() => {
                    setDice1(d6());
                }}
            >
                Roll left
            </Button>
            <Button
                onClick={() => {
                    setDice2(d6());
                }}
            >
                Roll right
            </Button>
            {dice1 == 1 && dice2 == 1 ? (
                <div>lose</div>
            ) : dice1 == dice2 ? (
                <div>win</div>
            ) : (
                <div></div>
            )}
        </div>
    );
}

/*The TwoDice component will simulate a game where you roll two dice in an attempt to get matching values. 
However, you lose the game if your dice ever come up as a pair of ones (“snake eyes”).

-You will need two states, one for each die.
-Each die’s value should be rendered in the View in a span tag of their 
own, with the first dice having the data-testid of left-die and the second 
dice having the data-testid of right-die.

-You will need two “Roll” buttons (labelled Roll Left and Roll Right).
-Clicking a Roll button will change the value for the corresponding dice 
using the provided d6 function.

-The initial values of the dice cannot be the same.
-When the two states are 1, render a message that includes the word Lose.
-When the two states are equal, render a message that includes the word Win.
-If you do all these and are still not passing all tests, read the test file, 
it is a good practice! In much of software engineering, the tests are the product spec.*/
