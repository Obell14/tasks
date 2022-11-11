import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function Counter(): JSX.Element {
    const [value, setValue] = useState<number>(0);
    return (
        <span>
            <Button onClick={() => setValue(1 + value)}>Add One</Button>
            to {value}.
        </span>
    );
}

//The Counter component is one that we provide, allowing you to click a button
//to increase a rendered number. You should be able to run the application and
//interact with the Counter, similar to what you saw earlier on this page. You
//should also be able to run the tests and see that they are all passing.
