# Type Error in TypeScript Function

This repository demonstrates a common type error in TypeScript where a function is defined to accept a specific type of parameter but is called with an argument of a different type.  The error is handled by using Type Guards.

## Bug
The `bug.ts` file contains a function `add` that is defined to accept two number parameters. However, the code attempts to call this function with a string as the second argument which is incorrect and will lead to an error. This showcases a common mistake made when working with type safety in TypeScript.

## Solution
The `bugSolution.ts` file shows how to resolve this issue. It demonstrates how to use type guards to handle cases where you might get an unexpected type.