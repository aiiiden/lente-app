"use client";

import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export default function GateYoutube({
  className,
}: Omit<ComponentProps<"div">, "children">) {
  return (
    <div
      className={cn(
        "rounded-xl overflow-hidden shadow-xl w-full mx-2 bg-primary/30",
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
