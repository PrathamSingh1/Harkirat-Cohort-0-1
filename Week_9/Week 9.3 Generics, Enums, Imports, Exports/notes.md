            Enums

Enums (short for enumerations) in TypeScript are a feature that allows you to define a set of named constants.
The concept behind an enumerationis is to create a human-readable way to represent a set of constant values, which might otherwise be represented as numbers or strings.

enum Direction {
    Up = "up",
    Down = "down",
    Left = "left",
    Right = "right"
}

// if you give one of them a type you should give all of them a type.

function doSomething(keyPressed: Direction) {
    // do smething.
    if (keyPressed == Direction.Up) {

    }
}

console.log(Direction.Up);





        Generics

Generics are a language indempendent concept (exist in C++ as well)

Generics enable you to create components that work with any data type while still providing compile-time type safety.

function firstEl<T>(arr: T[]): T {
    return arr[0];
}

const el = firstEl(["pratham", "singh"]);
const el2 = firstEl([1, 2]);
const el3 = firstEl([true, false])
console.log(value.toUpperCase());


It can infer the type based on the given value but if you try to give two different value like an array can have both string and number then it a problem and to fix that you can explicity provide the type like-

const el = firstEl<string>(["pratham", "singh"]);






            Exporting and importing modules


TypeScript follows the ES6 module system, using import and export statements to share code between different files.Here's a brief overview of how this works:

how we do it before -

const express = require("express");

new one is this -

import express from "express";          // npm install express @type/express


for export 

older one -

module.exports = {
    a = 1
}



new one -

export const a = 1;



if you export many thing then how to import in other files-


example - 

export const a = 1;
export const b = 2;


import {a, b} from "./b";



And when you export like this -

const a = 1;
export default a;


import a from "./b";