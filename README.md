# JavaScript Recursive Function Stack Overflow

This repository demonstrates a common error in recursive JavaScript functions: stack overflow. The `foo` function is designed to compare two numbers, but a flaw in the logic leads to excessive recursion, exceeding the call stack limit.

## Bug Description:

The `foo` function recursively calls itself when `a` is less than `b`. However, if the difference between `a` and `b` is substantial, the function calls itself many times before reaching the base case (`a === b`), resulting in a stack overflow.

## Solution:

The solution involves adding a check to limit the recursion depth or modifying the algorithm to avoid excessive recursion.  The solution file shows how to implement iterative approach to solve the same problem.