import { BoxIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-md text-center">
      <Image
        src="https://ui.shadcn.com/placeholder.svg"
        width={200}
        height={200}
        alt="404 Illustration"
        className="mx-auto"
        style={{ aspectRatio: "200/200", objectFit: "cover" }}
      />
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Oops! The page youre looking for doesnt exist.
      </h1>
      <p className="mt-4 text-muted-foreground">
        It looks like youve stumbled upon a page that doesnt exist. Dont worry, well help you find your way back.
      </p>
      <div className="mt-6">
        <Link
          href="/login"
          className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          prefetch={false}
        >
          Go to Login
        </Link>
      </div>
    </div>

    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-md text-center">
      <BoxIcon className="mx-auto h-12 w-12 text-primary" />
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">No Content Available</h1>
      <p className="mt-4 text-muted-foreground">
        The requested content is currently unavailable. Please check back later or contact support if you have any
        questions.
      </p>
    </div>
  </div>
  </div>
  );
}
