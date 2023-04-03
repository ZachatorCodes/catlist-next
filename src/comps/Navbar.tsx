import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/bunkface.png" alt="logo" width={60} height={55}/>
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/cats">Cat Listings</Link>
    </nav>
   );
}
 
export default Navbar;