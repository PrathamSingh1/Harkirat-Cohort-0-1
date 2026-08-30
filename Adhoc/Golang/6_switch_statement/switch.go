package main

import (
	"fmt"
	"time"
)

func main() {
	// simple switch

	i := 2

	switch i {
	case 1:
		fmt.Println("one")
	// break
	case 2:
		fmt.Println("two")
	case 3:
		fmt.Println("three")
	default:
		fmt.Println(" other val ")
	}

	// multiple condition switch

	switch time.Now().Weekday() {
	case time.Saturday, time.Sunday:
		fmt.Println("Its weekend")
	default:
		fmt.Println("its a working day")
	}

	// type switch case

	WhoAmI := func(i interface{}) {
		switch t := i.(type) {
		case int:
			fmt.Println("its an integer")
		case bool:
			fmt.Println("its a bool")
		case string:
			fmt.Println("its a string")
		default:
			fmt.Println("this is ", t, "you can see")
		}
	}

	WhoAmI(234.324)
}
