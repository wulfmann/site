import Link from 'next/link';

function Header() {
  return (
    <header>
      <Link href="/"><div className="title">Joe Snell</div></Link>
      <nav>
        <Link href="/oss"><a>oss</a></Link>
      </nav>
    </header>
  );
}

export default Header;