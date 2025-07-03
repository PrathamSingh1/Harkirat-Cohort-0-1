import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"



const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
                username: { label: 'Username', type: 'text', placeholder: 'Email'},
                password: { label: 'Password', type: 'password', placeholder: 'Password'},
            },
            async authorize(credentials: any) {
                console.log(credentials);
                return {
                    id: "user1"
                };
            },                 
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        jwt: ({token, user}) => {
            console.log(token);
            token.userId = token.sub;
            return token;
        }
    }
});

export const GET = handler;
export const POST = handler;