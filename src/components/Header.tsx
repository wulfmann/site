import Link from 'next/link';

function Header() {
  return (
    <header>
      <div className="title">Joe Snell</div>
      <nav>
        <Link href="/oss"><a>oss</a></Link>
      </nav>
    </header>
  );
}

export default Header;