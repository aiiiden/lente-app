"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex min-h-screen flex-col gap-10 items-center justify-center">
        <header className="w-full max-w-sm">
          <Card>
            <CardContent>
              <div className="px-2 pt-4 flex flex-col items-center justify-center gap-4">
                <Image
                  className="pointer-events-none mx-auto"
                  src="https://firebasestorage.googleapis.com/v0/b/lente-app.appspot.com/o/assets%2Flogo.png?alt=media&token=36fa4206-87ee-4e97-b77a-6b2deffe6323"
                  alt="렌떼 로고"
                  width={120}
                  height={120}
                />
                <h1 className="text-5xl font-bold text-center uppercase">
                  Lente
                </h1>
                <p className="text-lg font-light text-center">봄은 온다</p>
              </div>
            </CardContent>
            <CardFooter className="gap-2">
              <Button size="lg" className="w-full" disabled>
                아직 공사중!
              </Button>
            </CardFooter>
          </Card>
        </header>
      </div>
    </main>
  );
}
