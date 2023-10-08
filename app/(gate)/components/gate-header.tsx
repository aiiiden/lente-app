"use server";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { ComponentProps } from "react";

export default async function GateHeader({
  className,
}: ComponentProps<"header">) {
  return (
    <header className={cn("flex flex-col gap-1", className)}>
      <figure className="flex items-center gap-3 justify-center" role="img">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/lente-app.appspot.com/o/assets%2Flogo.png?alt=media&token=36fa4206-87ee-4e97-b77a-6b2deffe6323"
          alt="Lente"
          width={64}
          height={64}
        />
        <figcaption className="text-center text-5xl font-bold uppercase leading-none">
          Lente
        </figcaption>
      </figure>
      <p className="text-white sm:text-muted-foreground text-center ">
        Personal Playground
      </p>
    </header>
  );
}
