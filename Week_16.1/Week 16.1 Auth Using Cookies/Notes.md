                Authentication using jwt + localstorage

Authentication is the process of letting users signup/signin into websites via username / password or using SSO (single sign on)

Authentication using jwt + localstorage ->

1. Signup
2. Signin
3. Auth Requests



Authentication using cookies (Part 1)  ->

What are cookies ->

Cookies in web development are small pieces of data sent from a website and stored on the user's computer by the user's web browser while the user is browsing. They are designed to be a reliable mechanism for websites to remember things (very similar to local storage)

1. Session Management: Cookies allow websites to identify users and track their individual session states across multiple pages or visits.

2. Personalization: Websites use cookies to personalize content and ads. For instance, cookies might store information about a user's preferences, allowing the site to tailor content or advertisements to those interests.

3. Tracking: Cookies can track users across websites, providing insights into browsing behavior. This information can be used for analytics purposes, to improve website functionality, or for advertising targeting.

4. Security: Secure cookies can be used to enhance the security of a website by ensuring that the transmission of information is only done over an encrypted connection, helping to prevent unauthorized access to user data.


We will be focussing on point 4



Why not local storage? 

Cookies and LocalStorage both provide ways to store data on the client-side, but they serve different purposes and have different characteristics.


1. Cookies are send with every request to the website (by the browser) (you don’t have to explicitly add a header to the fetch call)
This point becomes super important in Next.js, we’ll see later why


1. Cookies can have an expiry attached to them
2. Cookies can be be restricted to only https and to certain domains


You don’t need to explicitly set the cookie header in the browser. It’s automatically set by the browser in every request



Properties of cookies  ->

Types of cookies

1. Persistent - Stay even if u close the window
2. Session - Go away after the window closes
3. Secure - Sent only over secure, encrypted connections (HTTPS).

Properties of cookies

HttpOnly - Can not be accessed by client side scripts
SameSite - Ensures cookies are ot send on cross origin requests

1. Strict
2. Lax - Only GET requests and on top level navigation
3. None
Ref - https://portswigger.net/web-security/csrf/bypassing-samesite-restrictions#:~:text=SameSite is a browser security,leaks%2C and some CORS exploits.

Domains - You can also specify what all domains should the cookie be sent from




CSRF attacks  ->

Cross site request forgery attacks were super common because of cookies and hence the SameSite attribute was introduced

Let’s see a few cases

SameSite: none

SameSite: Strict

SameSite: Lax