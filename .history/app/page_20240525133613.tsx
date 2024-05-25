import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      Check out review form: <Link href="/review">{"->"}</Link>
    </main>
  );
}
