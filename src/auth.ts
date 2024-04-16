import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const credentialsConfig = CredentialsProvider({
  name: "Credentials",
  credentials: {
    username: {
      label: "User Name",
    },
    password: {
      label: "Password",
      type: "password",
    },
  },
  async authorize(credentials) {
    if (credentials.username === process.env.user && credentials.password === process.env.pass)
      return {
        name: "Damian",
      };
    else return null;
  },
});

export const config = {
  providers: [credentialsConfig],
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl;
      if (pathname === "/panel" || pathname === "/panel/contacto" || pathname === "/panel/productos" || pathname === "/panel/contenido") return !!auth;
      return true;
    },
  },
} satisfies NextAuthConfig;
 
export const { handlers, auth, signIn, signOut } = NextAuth(config);