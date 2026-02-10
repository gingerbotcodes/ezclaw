import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_ID!,
            clientSecret: process.env.AUTH_GOOGLE_SECRET!,
        }),
    ],
    pages: {
        signIn: "/buy",
    },
    callbacks: {
        async redirect({ url, baseUrl }) {
            // If the url starts with the base URL, allow it (preserves query params)
            if (url.startsWith(baseUrl)) return url;
            // Allow relative URLs
            if (url.startsWith("/")) return `${baseUrl}${url}`;
            return baseUrl;
        },
    },
});
