import Image from "next/image";
import Landing from "./landing/page";
import { Roboto } from "next/font/google";
const Rob = Roboto({
  subsets: ["latin"],
  weight: '400',
  variable: "--font-rob", // Custom CSS variable for Tailwind
});

export default function Home() {
  return (
    <div className={Rob.variable}>
      <main className="m-2 font-main">
        <Landing/>
      </main>
    </div>
  );
}
