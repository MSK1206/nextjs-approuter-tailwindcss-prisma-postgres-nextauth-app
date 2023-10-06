import { withAuth } from 'next-auth/middleware';

export default withAuth({
  callbacks: {
    authorized: ({ token }) => {
      return token?.role === 'admin';
    },
  },
  // サインインのページ指定
  pages: {
    signIn: '/signIn',
  },
});

// signUP | api | signIn ページのリダイレクトから除外
export const config = {
  matcher: ['/((?!signUp|api|signIn).*)'],
};
