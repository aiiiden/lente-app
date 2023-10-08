"use client";

import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

type GateYoutubeProps = Omit<ComponentProps<"div">, "children">;

export default function GateYoutube({ className }: GateYoutubeProps) {
  return (
    <div
      className={cn(
        "relative rounded-xl overflow-hidden w-full mx-2 bg-primary/30",
        className
      )}
    >
      <iframe
        src="https://www.youtube.com/embed?listType=playlist&list=PLW10gjfYSQ5lL6qDnagmuiuLoUkO-i4jk&loop=1&autoplay=1&controls=0&rel=0&modestbranding=1&mute=1"
        title="YouTube video player"
        allowFullScreen={false}
        allowTransparency={false}
        className="w-full aspect-[9/16]"
      ></iframe>
    </div>
  );
}
