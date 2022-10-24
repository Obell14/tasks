import React, { useState } from "react";
import { Button } from "react-bootstrap";
//export type Holiday = "🎁" | "🎃" | "🦃" | "☘️" | "🐇";

export function CycleHoliday(): JSX.Element {
    const [hconst, setHconst] = useState<string>("🎁");
    function alphabetHoliday(x: string): string {
        if (x == "🎁") {
            return "🐇";
        } else if (x == "🐇") {
            return "🎃";
        } else if (x == "🎃") {
            return "☘️";
        } else if (x == "☘️") {
            return "🦃";
        }
        return "🎁";
    }
    function nextHoliday(x: string): string {
        if (x == "☘️") {
            return "🐇";
        } else if (x == "🐇") {
            return "🎃";
        } else if (x == "🎃") {
            return "🦃";
        } else if (x == "🦃") {
            return "🎁";
        }
        return "☘️";
    }

    return (
        <div>
            <Button
                onClick={() => {
                    setHconst(alphabetHoliday(hconst));
                }}
            >
                Advance by Alphabet
            </Button>
            Holiday: {hconst}
            <Button
                onClick={() => {
                    setHconst(nextHoliday(hconst));
                }}
            >
                Advance by Year
            </Button>
        </div>
    );
}

/*

-You will need one state, either a string or an enumeration of 5 strings like 
QuestionType (perhaps named Holiday).

-You will need to define two functions (or two Records) that can take in 
an existing holiday and produce the next holiday - one function should 
produce the next holiday alphabetically, and the other produces the next 
holiday in the year.

-The view should render the current holiday with the text 
Holiday: followed by the emoji (e.g., Holiday: 🎃).

-The first button should include the text Alphabet somewhere 
(e.g., Advance by Alphabet) and changes the current holiday 
to the next one alphabetically.

-The second button should include the text Year somewhere 
(e.g., Advance by Year) and changes the current holiday to 
the next one in the year.
-For example, let us say we only had three holidays:

🎏 to represent the Dragon Boat Festival in the summer
🎃 to represent Halloween at the end of October
🪔 to represent Diiwali earlier in October
Then the transitions in the year would be:

🎏 -> 🪔
🪔 -> 🎃
🎃 -> 🎏
And the transitions alphabetically would be:

🪔 -> 🎏
🎏 -> 🎃
🎃 -> 🪔

5 Christmas 🎁 1
3 Halloween 🎃 3
4 thanksgiving 🦃 5
1 St.Patricks day ☘️ 4
2 Easter 🐇 2

*/
