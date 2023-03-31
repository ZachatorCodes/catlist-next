import Footer from "@/comps/Footer";
import Navbar from "@/comps/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Lorem ipsum</p>
      <Link href="/cats">See Cat Listings</Link>
    </div>
  );
}
