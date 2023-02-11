# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

This new code uses the || operator to set the partitionKey to event.partitionKey if it exists, or to the hashed stringified version of event if not. The next line of code checks if the partitionKey is a string, and stringifies it if not. Finally, the code uses a ternary operator to return either the hashed version of partitionKey if its length is greater than MAX_PARTITION_KEY_LENGTH, or the original partitionKey otherwise. If event is falsey, the function returns TRIVIAL_PARTITION_KEY right away.

The improvements made
1. Moving constants outside of function scope so that it can't be changed when new functions are added.
2. Reduced 28 lines to 18 lines of code with simplication of logic.
3. Returned Trivial case in the beginning to avoid any confusion.
4. Added tests to check for 4 different cases, Trivial, partionKey length but less than MAX_LENGTH, partionKey length but more than MAX_LENGTH, random Event details
5. Self explanatory and simplified code