type KeyInput = "up" | "down" | "left" | "right";
        
// or

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


doSomething(Direction.Up);
doSomething(Direction.Down);
console.log(Direction.Up);
console.log(Direction.Down);

// doSomething("up");
// doSomething("down");
// doSomething("random")




//          Generics

type Input = number | string;

function firstEl<T>(arr: T[]) {
    return arr[0];
}

const value = firstEl<string>(["pratham", "singh"]);
console.log(value.toUpperCase());



// function identity<T>(arg: T) {
//     return arg;
// }

// let output1 = identity<string>("myString");
// let output2 = identity<number>(100);