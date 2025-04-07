import Link from "next/link";


const Navbar = () => {
    return (
        <div>
            <div className="flex justify-around">
                <h1>logo</h1>
                <ul className="flex decoration-0 gap-4">
                    <li><Link href="/">Home</Link></li>
                    <li> <Link href="/profile">Profile</Link> </li>
                    <li> <Link href="/about">About</Link> </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar