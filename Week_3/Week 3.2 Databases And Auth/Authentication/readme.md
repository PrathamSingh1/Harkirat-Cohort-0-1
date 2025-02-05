
                Authentication

        Project for today -

Let people sign up to your website 
Only allow signed in users to see people (create a dummy people list)


        Before we get into authentication Lets understand some cryptography jargon

1. Hashing - Your password will converted into zebrish.
It is a 1 way . It does not require a password.

2. Encryption - your password will coverted into a zebrish but you and change it back with a encryption password. It is a 2 way. It does require a password.

3. Json web tokens - It's some input converted into an output but in jwt string but who has the output can see the input.
Its neither of encryption or hashing(its technically a digital signature)
Anyone can see the original output given the signature
Signature can be verified only using the password

4. Local storage - A place in your browser where you can store some data Usually things that are stored include-
1 - Authentication tokens
2 - User language preference
3 - User theme preference





                                Authentication
                        
                        Lets start by creating out assignment for today
                                A website which has 2 endpoints-
                
        POST /signin                                                       GET /users
        Body-{                                                               Headers-
                username: string                                          Authorization header
                password: string
        }

                                                       Returns an array of all users if user is signed in (token is correct)
                                                        Returns 403 status code if not

Returns a json web token with username encrypted

                
                