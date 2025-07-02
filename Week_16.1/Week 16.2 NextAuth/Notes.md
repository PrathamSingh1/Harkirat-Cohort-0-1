What is next auth  ->

NextAuth is a library that lets you do authentication in Next.js

Can you do it w/o next-auth - Yes

Should you - Probably not!

Popoular choices while doing auth include - 

1. External provider - 

1. https://auth0.com/
2. https://clerk.com/
3. Firebase auth

2. In house using cookies
3. NextAuth


NextAuth  ->

Nextjs lets you add Authentication to your Next.js app

It supports various providers

Login with email
Login with google
Login with facebook



Give NextAuth access to a catch-all  ->

Ref https://next-auth.js.org/configuration/initialization#route-handlers-app

1. Create /api/auth/[…nextauth]/route.ts

2. Install next-auth

npm install next-auth

1. Updated handler


import NextAuth from "next-auth"

const handler = NextAuth({

})

export { handler as GET, handler as POST }


1. Adding providers - There are three broad types of providers
 
    1. OAuth (Login with google)
    2. Email (Passwordless Email login via email OTP)
    3. Credentials (Your own strategy)

Let's get them one by one