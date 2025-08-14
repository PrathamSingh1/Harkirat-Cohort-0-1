CSR -> Client Side Rendering
SSR -> Server Side Rendering
SSG -> Static Site Generation

Client Side Rendering -> 

Client-side rendering (CSR) is a modern technique used in web development where the rendering of a webpage is performed in the browser using JavaScript. Instead of the server sending a fully rendered HTML page to the client.


Downsides ->

Not SEO optimised
User sees a flash before the page renders
Waterfalling problem




Server side rendering ->

When the rendering process (converting JS components to HTML) happens on the server, it’s called SSR. 




Why SSR ->

SEO Optimisations
Gets rid of the waterfalling problem
No white flash before you see content



Downsides of SSR ->

Expensive since every request needs to render on the server
Harder to scale, you can’t cache to CDNs







Static site generation ->

Ref https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating


If a page uses Static Generation, the page HTML is generated at build time. That means in production, the page HTML is generated when you run next build. This HTML will then be reused on each request. It can be cached by a CDN.




Why ->

If you use static site generation, you can defer the expensive operation of rendering a page to the build time so it only happens once. 