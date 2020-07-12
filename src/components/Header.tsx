import Link from 'next/link';

function Header() {
  return (
    <header>
      <Link href="/"><div className="title">Joe Snell</div></Link>
      <nav>
        <Link href="/blog"><a>Blog</a></Link>
        <Link href="/oss"><a>OSS</a></Link>
      </nav>
    </header>
  );
}

export default Header;