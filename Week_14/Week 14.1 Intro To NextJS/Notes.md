Step 1 - NextJS Intro, Pre-requisites

Pre-requistes 

You need to understand basic Frontend before proceeding to this track. 
You need to know what React is and how you can create a simple application in it


NextJS Intro ->

NextJS was a framework that was introduced because of some minor inconviniences in React

1. In a React project, you have to maintain a seprate Backend project for your API routes 
2. React does not provide out of the box routing (you have to use react-router-dom)
3. React is not SEO Optimised
    1. Not exactly true today because of React Server components
4. Waterfalling problem



NextJS Offerings ->

Next.js provides you the following upsides over React

1. Server side rendering - Get's rid of SEO problems
2. API routes - Single codebase with frontend and backend
3. File based routing (no need for react-router-dom)
4. Bundle size optimisations, Static site generation
5. Maintained by the Vercel team

Downsides - 

1. Can't be distributed via a CDN, always needs a server running that does server side rendering and hence is expensive
2. Very opinionated, very hard to move out of it.


Let's bootstrap a simple Next app ->

npx create-next-app@latest



Routing in Next.js

Next.js has a file based router
    This means that the way you create your files, describes what renders on a route.


Client and server components ->

NextJS expects you to identify all your components as either client or server 

As the name suggests

1. Server components are rendered on the server
2. Client components are pushed to the client to be rendered

By default, all components are server components.

"use client"  -> for the telling nextjs to it is a client side components.


When should you create client components ->

1. Whenever you get an error that tells you that you need to create a client component.
2. Whenever you're using something that the server doest't understand (useEffect, useState, onClick...)


Rule of thumb is to defer the client as much as possible

Some nice readings -

https://github.com/vercel/next.js/discussions/43153