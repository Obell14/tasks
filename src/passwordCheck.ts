export function dogpass(password: string): boolean {
    if (password.length != 16) {
        return false;
    } else if (!/\d/.test(password)) {
        //if there is not a digit at all
        return false;
    } else if (!/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(password)) {
        return false;
    } else if (/^[A-Z]/i.test(password)) {
        return true;
    }
    return false;
}

/*using your answer from part (a), write a method that checks 
the validity of a password string, and then write all of the 
test cases for all the equivalence partitioning classes you 
identified, using Jest (i.e. the same testing library that 
Frontend-Fun uses). You should have at least one test 
case per equivalence partition, both valid and invalid 
partitions. You can use any external libraries that you 
want for the implementation, and look at any online 
examples of tests in Jest to help you write your test cases; 
just include links to any of them in your answer below as comments. 

Do this by creating a new branch from your task repository called 
“dogcare_testing”. Push it to your Github tasks repo when complete, 
and paste a github link to your final commit and a screenshot showing 
your tests passing, and your implementation and test code below.
 */
