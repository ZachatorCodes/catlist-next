import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div>
        <h1>Cat List</h1>
      </div>
      <Link href="">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/cats">Cat Listings</Link>
    </nav>
   );
}
 
export default Navbar;