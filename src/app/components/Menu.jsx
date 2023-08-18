import Link from "next/link";

const Menu = () => {
  return (
    <div>
      <Link href={"/"}>Home</Link>
      <br />
      <Link href={"/products"}>Product</Link>
      <br />
      <Link href={"/profile"}>Profile</Link>
      <br />
    </div>
  );
};

export default Menu;
