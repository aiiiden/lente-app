"use server";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

import Link from "next/link";
import { ComponentProps, PropsWithChildren } from "react";

export default async function LoginCard({
  children,
  className,
}: ComponentProps<"div">) {
  return (
    <Card className={cn("w-full", className)}>
      <CardHeader className="border-b py-4">
        <CardTitle>Sign in</CardTitle>
        <CardDescription>Only member can use this app.</CardDescription>
      </CardHeader>
      <CardContent className="border-b py-4">{children}</CardContent>
      <CardFooter className="flex justify-between items-center py-4">
        <Label>I want to be a member</Label>
        <Button className="w-fit" asChild>
          <Link href="/signup">Sign up</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
