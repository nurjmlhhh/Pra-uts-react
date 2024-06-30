export default function Home() {
    return (
      <>
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
          <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Selamat Datang di Toko Buah Segar</h1>
            <p className="text-lg text-gray-600 mb-8">
              Temukan berbagai pilihan buah segar dengan kualitas terbaik langsung dari kebun kami.
            </p>
            <a
              href="/products"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-xl transition duration-300 ease-in-out"
            >
              Lihat Produk Kami
            </a>
          </div>
        </div>
      </>
    );
  }
  