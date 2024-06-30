import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex items-center justify-between">
      <div className="flex items-center ">
        <div>Icon</div>
        <Link href="/">
          <h1 className="text-2xl font-bold px-2">Leo.md</h1>
        </Link>
      </div>
      <div className="flex items-center">
        <div className="px-2">Noti</div>
        <div className="px-2">Search</div>
        <div className="px-2">Login</div>
      </div>
    </header>
  )
}

export default Header
