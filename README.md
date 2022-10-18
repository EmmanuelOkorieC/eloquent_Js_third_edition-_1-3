# Eloquent Javascript, 3rd Edition: A modern Introduction to programming
An overview, with solutions and explanation of exercises in chapters one to three of the ebook Eloquent Javascript, 3rd Edition by Marijn Haverbeke

## Overview
### Chapter One: Values, Types, and Operators
Chapter one starts off by talking about data and how they are stored as sequences of ones and zeros called *bits*. To work with them, you must separate them into chunks called *values*. Every value has a type that determines it's role. 

The different value types are
* Number type - written as numeric values e.g 13. This value will appear as a bit pattern in the computer's memory. The number type also has  3 special numbers. `Infinity` representing positive infinity, `-Infinity` representing negative infinity and `NAN` which stands for "not a number" and is the result of a stupid computation in your program
* String type -  are used to represent text and can be written by enclosing their context in  back ticks - \``hello world`\`, single quotes - `'hello world'` or double quotes - `"hello world"`. Back ticks or template literals can do a few tricks single and double quotes can't. They can help us span lines without escaping and we can embed values using the `${}` notation. String values are also modeled as bits to be able to exist in the computer but this is done based on the *unicode standard*
* Boolean type - a way to indicate a yes or no, or on and off. They have two values `true` and `false`
*Empty values - used to denote the absence of a meaningful value. often represented with `null` or `undefined`. They are themselves values but carry no value.

Values can be transformed and combined using *Operators*. Operators can be unary(operating on one value), binary(operating on two values) or ternary(operating on three values). Operators that act on the Number type are known as the arithmetic operators and are binary. They include `+`, `-`, `\`, `*` and the modulo operator `%` that returns the remainder of the division of two numbers `X` and `Y`. `-` can act as a unary operator on number values as it negates them.
`+` on string types concatenates them(glues them together) to form a new word. 

Comparison operators return a Boolean. They are binary operators as well and include `<`, `>`, `<=`, `>=`, `==`, `!=`. They are used for comparing values

Javascript supports three Logical operators *and*, *or* and *not*. The logical *and* denoted `&&` and logical *or* denoted `||` are binary operators. `&&` returns `true` only if both values given to it are true. `||` returns `true` if either value given to it is true. The *not* operator is a unary operator and flips the value given to it. It is denoted with `!` 

There is one ternary operator in javascript and it is also known as the *conditional operator*. it operates on three values. returning the second value if the first equals true and the third if it equals false. it is written with a question mark and colon `true ? 1 : 2`

when an operator is assigned to a wrong type of value, Javascript quietly converts that value to the type it needs. which often time is not what we want. This behaviour is known as *type coercion*. we can avoid this when comparing values by using the exactly equal to operator denoted `===` or exactly not equal to operator denoted `!==`

### Chapter Two: Program Structure
This chapter starts off by talking about bindings. Bindings are a way for our program to remember things or better still to catch and hold values. They can be defined with `let`, `const` or `var` followed by the name of the binding, then a `=` or assignment operator and finally an expression or value. An expression is the result of operators on values.
```Javascript
let one = 10 + 5
const two = 12
var three = "hello world"
```

the `=` operator can be used at any time on existing bindings to disconnect them from their current value and have them point to a new one because bindings are not tied to a value forever. The `const` binding is an exception. `const` stands for constant and points to the same value for as long as it lives. 
```Javascript
let mood = "dark
mood = "light"
console.log(mood) //outputs light
```
A `let` statement may define multiple bindings. The definitions must be separated by a comma `let one = 1, two = 2`

The collection of bindings and their values that exist at a given time is called the *environment*. This environment is not empty when a prrogram starts up. They contain default values that have the type *function*. A function is a piece of program wrapped in a value. such values can be *applied*, *invoked* or *called* in order to run the wrapped program. An example of such value is the `console.log` function used to output values. To call it, we wrap parentheses around it and pass in a value that is used in the wrapped program. This passed-in values are known as *arguments*
```javascript
console.log("hello world") //outputs hello world
```

Javascript executes from top to bottom but not all programs are straight roads. we might for example create a branching road that takes the proper branch based on the situation at hand. This is called *conditional execution*. It is created with an `if` keyword in javascript and it means we want our code to execute "if and only if". we can also handle a false condition using the `else` keyword . You can chain multiple if/else statements to create multiple paths
```Javascript
if(num > 10) console.log("small")
else if (num > 100) console.log("medium")
else console.log("large")
```
we can also represent an `if`/`else` statement using a `switch`/`case` which is a bit complicated way of writing it but often has it's advantages

*loop* is a control flow that runs a piece of code multiple times. it lets us go back to some point in the program where we were before and repeats it with our current program state. There are three main loops. A `for` loop, a `while` loop and a `do` loop. a `do` loop differs from a `while` loop on one point, it executes the body at least once and starts testing whether it should stop after that first execution. A `for` loop is a more nuanced style of writing a `while` loop and just like the `while` loop, contains a start value, an end value and a counte
```Javascript
for (let i = 0; i < 10; i = i + 1) {
     console.log(i)
}
```
The loop ends when the end value returns a `false`. Having a loop condition produce `false` is not the only way a loop can finish. There is a special statement called `break` that has the effect of immediately jumping out of the loop. There is also a `continue` keyword that jumps out of the body when encountered and continues with the loop's next iteration

### Chapter Three: Functions
A function is a way to structure larger Programs and like the author put it, it is the bread and butter of Javascript, hehe.
we define a function by adding a `function` keyword, adding a set of parameters(which may be optional), adding a body and then a statement to be executed
```javascript
const add = function(x, y) {
return x + y
}
console.log(add(3, 5)) //outputs 8
```
```
const makeNoise = function() {
    console.log("Pling")
}
makeNoise() // outputs Pling
```

In the first example `add`, my function produces a value and it does this with the `return` keyword. while in the second example `makeNoise`, it doesn't. It produces a side effect. So really your functions can serve both purpose.

when control comes across the `return` statement, it immediately jumps out of the current function and gives the returned value to the code that called the function. A `return` keyword without an expression after it, returns `undefined` likewise a function without a `return` keyword

Global scope refers to bindings outside of any function or block. Local scope refers to bindings declared in a function or block and these bindings can only be referenced in that function or block. Everytime a function is called, new instances of these bindings are created. Bindings `let` and `const` are local to the block they are declared in. Binding `var` is visible throughout the Global scope if they are not in a function.

Blocks and functions can be created in other blocks and functions to produce as the author accurately put it *multiple degrees of locality*. All bindings in each local scope can see all bindings in the local scope that contains it and all scopes can see the global scope. This approach to binding visibility is known as *lexical scoping*. 

It is possible to store a function as a value in a binding and pass it as an argument to another function (This blew my mind lol, i spent hours seeing all the crazy things i could do with this possibility). Functions can be declared by writing a `function` keyword, followed by a statement that defines the binding.
```javascript
 function square(x) {
    return x * x
 }
```
Function declarations are not part of the top to bottom flow of control so you can call it before declaration as they are conceptually moved to the top of their scope and can be used by all code in that scope.

Arrow functions are another way to describe functions. It uses an (=>) instead of the `function` keyword `const square = (x) => {return x * x; };`. You can also write them without the `return` keyword or braces if you are only returning a single expression `const square = x => x * x`

The *call stack* is the place the computer stores the context for every function call. The current context is stored on top of this stack.
When a function returns, it removes the top context from the stack and uses that context to continue execution.
Storing the stack requires space in the computer's memory. When it grows too big, the computer will fail with a "out of stack space" or "too much recursion" message.

If you pass in more *arguments* than you defined when calling a function, it takes only the one it needs and ignores the rest. when you pass in too few, the rest will be `undefined`. If you add an `=` after a parameter followed by an expression when defining your function, the value of that expression will replace the argument when it is not given.

*Closures* are functions that reference bindings from local scopes around it. You can describe it as a function in a function in which the inner function has access to the local bindings described in the outer function which also includes the outer function's arguments.

A *Recursive fuction* is one that calls itself. You can re-call a function as long as it doesn't do it too much that it overflows the stack. Recursion allows for functions to be implemented in a different style. Recursive functions always have a break statement which can be structured with a `return` keyword in order to avoid blowing the stack. Recursion can be an alternative to looping but performance wise, it could be slower than simply running a `for` loop. They have their advantages though and there are problems that are always easier to solve with recursion.

## Exercises
### Chapter One: Values, Types and Operators
   * No exercises in this Chapter
   
### Chapter Two: Program Structure
   * 2.1 Looping a Triangle
   
   For this exercise, i had to make seven calls to `console.log` to output the string `"#"` but each time adding an extra `"#"`. To do this i defined a binding `text` with an empty string then i wrote a `while` loop comparing my string's length to 7 using the `<` operator. Then for each iteration, i concatenated a `"#"` and then passed `text` to `console.log`
   ```javascript
   let text = ''
   while(text.length < 7) {
      text += "#"
      console.log(text)
}
   ```
   * 2.2 FizzBuzz
   
   For this exercise, i had to write a program that prints  all the numbers from 1 to 100 with 3 exceptions. numbers divisible by 5 and 3 print `"FizzBuzz"`, numbers divisible by only 3 print `"Fizz"` and numbers divisible by only 5 print `"Buzz"`
   
  To print the numbers, i used a `for` loop. Then i created my exceptions with a chain of `if`/`else` statements, the *modulo operator* and the *logical and*
  ```javascript
  for (let i = 1; i <= 100; i++) {
      if (i % 3 == 0 && i % 5 == 0) {
          console.log('FizzBuzz')
       } else if (i % 3 == 0) {
          console.log('Fizz')
       } else if ( i % 5 == 0) {
          console.log('Buzz')
       } else {
          console.log(i)
       }
}
  ```
   * 2.3 Chess Board
    
    This exercise required me to write a program to create an 8 x 8 grid chess board from a string. Each line, split with a newline character `"\n"` would       alternate starting with a `"#"` or a `" "`. And for the length of each line, we alternate the same pattern.
    
    To create this program, i defined a binding `text`  passing it an empty string `""`. Then i wrote two `for` loops. The first one to fill each line of         `text` and second/inner loop to fill the contents of that line. Then i used the *modulo* operator to alternate the pattern for every line. It is              important to    note that if the result of a *modulo* operator between any positive number and 2 returns a `0` then that number is even else it is odd.      The      result of my first iteration added to results of my second iteration(which must finish running before going back to my first iteration)              *modulo* 2 determines how my line looks. If it starts with an even number than my line starts with a `" "` else a `"#"` and subsequent items on the line      are     alternated based on this. At the end of each first iteration, i split with a `"\n"` character. After i got this working, i defined the              binding size to get it working for any length 
    
        ```javascript
      let size = 8
      let text = ''

      for (let i = 0; i< size; i++) {
         for (let j = 0; j < size; j++) {
            if ((i + j) % 2 == 0) {
                text += " " 
            } else {
                text += '#' 
            }
         }
        text += "\n"
     }
      ```
    
### Chapter Three: Functions
* 3.1  Minimum

 For this exercise i had to write my own version of the `Math.min` function that takes two arguments and returns the minimum
 
 To do this, i declared a function min that takes two arguments `a` and `b`. In the function block, i used an `if` statement to compare my two arguments using the `<` operator. if `a` is less than `b`, it returns `a` else it returns `b`
 ```javascript
    function min(a, b) {
       if (a < b) return a
       else return b
   }
 ```
* 3.2  Recursion

    For this exercise, i wrote a function `isEven` that takes a number value as an argument and implements recursion to check if that number is odd or even. An even number returns `true`, and an odd number returns `false`.
It is important to note that if you recursively remove 2 from a number and it's remainder is `0`, that number is even and if the remainder is `1`, that number is odd. I will use this to define a break from my recursive call.
I also made it possible to call the function `isEven` with a negative number. My function simply negates it and then recursively calls it.
```javascript
   function isEven(n) {
       if (n == 0) return true
       else if (n == 1) return false
       else if (n < 0) return isEven(-n)
       else return isEven(n - 2)
   }
```
* 3.3 Bean Counting

For this exercise, I wrote a function `countBs` that takes a string as an argument and returns the number of Uppercase B's in that string

After creating my function, i defined a local binding `num` and assigned the number `0` to it. Then i wrote a `for` loop to iterate through each letter of my string. And in this loop, my `num` binding is incremented by 1 everytime a `"B"` is found in my string. After the loop is done with it's iteration, i return the value of my updated `num` binding.

After i got this working, I wrote another function `countChar` that behaves the same way as `countBs` except it takes another argument to determine which character we would like to count(instead of just Uppercase B's)

```javascript
  function countBs(string) {
     let num = 0
     for (let i = 0; i < string.length; i++) {
         if(string[i] == 'B') {
            num+=1
         }
     }
     return num
  }

  function countChar(string, character) {
     let num = 0
     for (let i = 0; i < string.length; i++) {
         if(string[i] == character) {
            num+=1
         }
     }
     return num
   }


```
