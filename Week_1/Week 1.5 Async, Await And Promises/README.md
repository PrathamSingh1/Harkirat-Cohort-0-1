            Async functions vs sync functions


    What does synchronous mean?
Together, one after the other, sequential.
Only one thing is happening at a time.




    What does asynchronous mean?
Opposite of synchronous.
Happens in parts.
Multiple things are context switching with each other.


    Lets build some intution 

Human brain and body is single theraded
1. We can only do one thing at a time.
2. But we can context switch b/w tasks, or we can delegate tasks to other people.


            You have 4 tasks -
            1. Boil water 
            2. Cut vegetables
            3. Cut maggie packet
            4. Get ketchup from the shop nearby

How would you do this? Synchronously or Asynchronously?

    What did we learn?

Even if you are single threaded (brain can do only one thing at a time), you can do things parallely by Delegating. You can also context switch between tasks if need be(the net time to do both the things would still be the same)

Net amount of time take to do a task can be decreased by doing these two things(delegating and context switching)




How does JS do the same? Can JS delegate? Can JS context switch?

Yes! Using asynchronous functions




What are common async functions?
        setTimeout
fs.readFile - to read a file from your filesystem
Fetch - to fetch some data from an API endpoint








What even is a promise?
It is just a class that makes callbacks and async functions slightly more readable.
Whenever u create it, you need to pass in a function as the first argument which has resolve as the First argument






Aynsc await syntax

(Again, just syntactic sugar, Still uses callbacks/Promises under the hood)