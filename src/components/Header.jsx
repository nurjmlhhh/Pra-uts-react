import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="bg-green-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Fruits Market</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="hover:text-yellow-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-yellow-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-yellow-300">
                  Products
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto text-center">
          <p className="text-lg">Selamat datang di toko kami</p>
        </div>
      </div>
    </>
  );
}
