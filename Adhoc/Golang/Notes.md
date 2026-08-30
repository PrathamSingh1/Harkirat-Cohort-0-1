Golang cohort ->

- Why golang? Isn't JS enough?
- Installation
- Hello world
- Using packages
- Variables and Constants
- Loops, if, else, switch
- Arrays, slice and maps
- Functions
- Structs, attaching methods
- Struct methodss
- Concurrency vs parallelism vs interleaving
- Goroutines
- Channels, Buffered vs Unbuffered, defers
- Channel synchronization, waitgroups
- Mutex
- JSON
- HTTP Module
- Module in go
- Gin frameworks

## Why golang? Isn't JS enought?

- Performance: Go is a compiled language, which generally makes it faster than JavaScript (which is interpreted).
- Concurrency: Go has built-in support for concurrency with goroutines and channels. This makes it easier to write programs that can handle multiple tasks simultaneously, which is particularly useful for network servers and applications with many I/O operations.
- Static Typing: Go is statically typed, which helps catch erros at compile time rather than runtime. This can lead to more reliable code and easier refactoring, while JavaScript's dynamic typing can sometimes lead to unexpected behavior.
- Deployment: Go compiles to a single binary, which simplifies deployment. You don't need to worry about runtime dependencies or versioning issues on the server.

## Installation

Install go - https://go.dev/doc/install

## Hello world

```
package main

import "fmt"

func main() {
    fmt.Print("Hello World")
}

```

## Variables and Constants

Simple data types - Numbers, booleans, Strings

```
package main

import (
"fmt"
)

func main() {
var a int = 42
var b float64 = 3.14
var c bool = true
var d string = "Hello, Go!"

    fmt.Println("Integer:", a)
    fmt.Println("Float:", b)
    fmt.Println("Boolean:", c)
    fmt.Println("String:", d)

}
```

Other ways to initialize the variable -

```
package main

import (
    "fmt"
)

func main() {
    a := 42
    b := 3.14
    c := true
    d := "Hello, Go!"

    fmt.Println("Integer:", a)
    fmt.Println("Float:", b)
    fmt.Println("Boolean:", c)
    fmt.Println("String:", d)
}
```
