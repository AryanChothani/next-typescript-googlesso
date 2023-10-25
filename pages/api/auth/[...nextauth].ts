import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: import('next-auth').NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: "903070974765-9hmp5uq4os5m6ifl86nor05mkf0jqt7c.apps.googleusercontent.com",
            clientSecret: "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",
        }),
    ],
    session: {
        strategy: 'jwt',
    },
};

export default NextAuth(authOptions);