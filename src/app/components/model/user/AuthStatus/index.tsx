import { getServerSession } from 'next-auth/next';

export default async function AuthStatus() {
  const session = await getServerSession();
  return (
    <div className="absolute top-5 w-full flex justify-center items-center">
      {session && <p className="h-[30px] w-[30px]">{session.user?.image}</p>}
    </div>
  );
}
