import SignOut from '@/app/components/page/sign/SignOut';

export default function Home() {
  return (
    <div className="flex h-screen bg-black">
      <div className="w-screen h-screen flex flex-col space-y-5 justify-center items-center">
        <h1 className="text-4xl">Protected Page.</h1>
        <SignOut />
      </div>
    </div>
  );
}
