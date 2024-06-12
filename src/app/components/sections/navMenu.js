import Link from "next/link";

export default function NavMenu() {
    return (
            <div className="flex justify-between items-center px-6 py-3">
                <nav className="flex">
                    <ul className="flex flex-row space-x-6">
                        <li><Link className="nav-link active" href="/components/home">Home</Link></li>
                        <li><Link className="nav-link" href="/book"> Books</Link></li>
                        <li><Link className="nav-link" href="/movies">Movies</Link></li>
                        <li><Link className="nav-link" href="/suggestions">Suggestions</Link></li>
                    </ul>
                </nav>
            </div>
    );
}