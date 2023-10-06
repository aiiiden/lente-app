import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex min-h-screen flex-col gap-10 items-center justify-center">
        <header className="flex flex-col gap-4 select-none pointer-events-none">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/lente-app.appspot.com/o/assets%2Flogo.png?alt=media&token=36fa4206-87ee-4e97-b77a-6b2deffe6323"
            alt="렌떼 로고"
            width={120}
            height={120}
          />
          <h1 className="text-5xl font-bold text-center uppercase">렌떼</h1>
          <p className="text-lg font-light text-center">봄은 온다</p>
        </header>
      </div>
    </main>
  );
}
