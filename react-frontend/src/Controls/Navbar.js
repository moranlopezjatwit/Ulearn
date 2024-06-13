export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="site-title">ULearn</a>
        <ul>
            <li>
                <a href="/Home">Home</a>
            </li>
            <li>
                <a href="/Introduction">Introduction</a>
            </li>
            <li>
                <a href="/Login">Login</a>
            </li>
        </ul>
    </nav>
}