import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Folders } from "./page";
import Link from "next/link";
export function AlbumCard({ folder }: { folder: Folders }) {
  return (
    <Card className="w-[100%]">
      <CardHeader>
        <CardTitle>{folder.name}</CardTitle>
        <CardDescription>All your {folder.name} image.</CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex justify-between">
        <Button asChild>
          <Link href={`albums/${folder.name}`}>View Album</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
