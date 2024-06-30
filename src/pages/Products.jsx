import { Pencil } from "lucide-react";
import { BadgePlus } from "lucide-react";
import { Trash2 } from "lucide-react";
import { BadgeInfo } from "lucide-react";
import { useEffect, useState } from "react";

const myProducts = [
  {
    id: 1,
    name: "Jeruk",
    price: 3000,
    image: "a",
    color: "orange",
    info: "Memiliki banyak khasiat",
  },
  {
    id: 2,
    name: "Alpukat",
    price: 8000,
    image: "a",
    color: "hijau",
    info: "Memiliki banyak khasiat",
  },
  {
    id: 3,
    name: "Anggur",
    price: 1000,
    image: "a",
    color: "ungu",
    info: "Memiliki banyak khasiat",
  },
];

export default function Products() {
  const savedProducts = localStorage.getItem("prod");
  const [products, setProducts] = useState(
    savedProducts ? JSON.parse(savedProducts) : myProducts
  );
  const [addProduct, setAddProduct] = useState(null);
  const [updateProduct, setUpdateProduct] = useState(null);
  const [sortColor, setSortColor] = useState(null);
  const [newColor, setNewColor] = useState("");

  function handleAddProduct() {
    const newId =
      products.length > 0
        ? Math.max(...products.map((prod) => prod.id)) + 1
        : 1;
    setProducts([...products, { ...addProduct, id: newId }]);
    setAddProduct(null);
  }

  function handleUpdateProduct() {
    setProducts(
      products.map((prod) =>
        prod.id === updateProduct.id ? updateProduct : prod
      )
    );
    setUpdateProduct(null);
    localStorage.setItem("prod", JSON.stringify(products.map((prod) => (prod.id === updateProduct.id ? updateProduct : prod))));
  }

  function handleDeleteProduct(id) {
    setProducts(products.filter((prod) => prod.id !== id));
    localStorage.setItem("prod", JSON.stringify(products.filter((prod) => prod.id !== id)));
  }

  function handleBadgeClick(product) {
    alert(`Informasi produk: ${product.info}`);
  }

  useEffect(() => {
    localStorage.setItem("prod", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    if (sortColor) {
      const sortedProducts = myProducts.filter(
        (prod) => prod.color === sortColor
      );
      setProducts(sortedProducts);
    } else {
        localStorage.setItem("prod", JSON.stringify(products));
    }
  }, [sortColor, products]);

    //   useEffect(() => {
  //     if (sortColor) {
  //       const sortedProducts = myProducts.filter((prod) => prod.color === sortColor);
  //       setProducts(sortedProducts);
  //     } else {
  //         localStorage.setItem("prod", JSON.stringify(products));
  //     }
  //   }, [sortColor],[products]);


  const availableColors = ["orange", "hijau", "ungu"];

  const handleNewColorSubmit = (e) => {
    e.preventDefault();
    setSortColor(newColor.toLowerCase());
  };

  return (
    <div className="bg-gray-200 min-h-screen p-4">
      <h3 className="text-3xl font-bold mb-8 text-center">List Products</h3>
      <button onClick={() => setAddProduct({ name: "", price: "" , image : "", warna : "", info : ""})}><BadgePlus /></button>
      <div className="flex justify-center mb-4">
        {availableColors.map((color) => (
          <button
            key={color}
            className={`bg-${color}-500 hover:bg-${color}-600 text-green px-4 py-2 rounded mr-2`}
            onClick={() => setSortColor(color)}
          >
            {color}
          </button>
        ))}
        <form
          onSubmit={handleNewColorSubmit}
          className="flex items-center ml-4"
        >
          <input
            type="text"
            value={newColor}
            onChange={(e) => setNewColor(e.target.value)}
            className="border p-2 mr-2"
            placeholder="Enter new color"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Sort by Color
          </button>
        </form>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((prod) => (
          <div
            key={prod.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={prod.image}
              alt="Product"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold mb-2">{prod.name}</h4>
              <p className="text-gray-700 mb-2">Price: {prod.price}</p>
              <div className="flex justify-between">
                <BadgeInfo
                  onClick={() => handleBadgeClick(prod)}
                  className="cursor-pointer text-blue-500"
                />
                <div className="flex">
                  <button
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
                    onClick={() => setUpdateProduct(prod)}
                  >
                    <Pencil />
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded ml-2"
                    onClick={() => handleDeleteProduct(prod.id)}
                  >
                    <Trash2 />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {addProduct && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Add Product</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAddProduct();
              }}
            >
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-1">Name</label>
                <input
                  type="text"
                  value={addProduct.name}
                  onChange={(e) =>
                    setAddProduct({ ...addProduct, name: e.target.value })
                  }
                  className="border p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-1">
                  Price
                </label>
                <input
                  type="number"
                  value={addProduct.price}
                  onChange={(e) =>
                    setAddProduct({ ...addProduct, price: e.target.value })
                  }
                  className="border p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-1">
                  Image
                </label>
                <input
                  type="text"
                  value={addProduct.image}
                  onChange={(e) =>
                    setAddProduct({ ...addProduct, image: e.target.value })
                  }
                  className="border p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-1">
                  Color
                </label>
                <input
                  type="text"
                  value={addProduct.color}
                  onChange={(e) =>
                    setAddProduct({ ...addProduct, color: e.target.value })
                  }
                  className="border p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-1">Info</label>
                <input
                  type="text"
                  value={addProduct.info}
                  onChange={(e) =>
                    setAddProduct({ ...addProduct, info: e.target.value })
                  }
                  className="border p-2 w-full"
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setAddProduct(null)}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {updateProduct && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Update Product</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleUpdateProduct();
              }}
            >
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-1">Name</label>
                <input
                  type="text"
                  value={updateProduct.name}
                  onChange={(e) =>
                    setUpdateProduct({ ...updateProduct, name: e.target.value })
                  }
                  className="border p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-1">
                  Price
                </label>
                <input
                  type="number"
                  value={updateProduct.price}
                  onChange={(e) =>
                    setUpdateProduct({
                      ...updateProduct,
                      price: e.target.value,
                    })
                  }
                  className="border p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-1">
                  Image
                </label>
                <input
                  type="text"
                  value={updateProduct.image}
                  onChange={(e) =>
                    setUpdateProduct({
                      ...updateProduct,
                      image: e.target.value,
                    })
                  }
                  className="border p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-1">
                  Color
                </label>
                <input
                  type="text"
                  value={updateProduct.color}
                  onChange={(e) =>
                    setUpdateProduct({
                      ...updateProduct,
                      color: e.target.value,
                    })
                  }
                  className="border p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-1">Info</label>
                <input
                  type="text"
                  value={updateProduct.info}
                  onChange={(e) =>
                    setUpdateProduct({ ...updateProduct, info: e.target.value })
                  }
                  className="border p-2 w-full"
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setUpdateProduct(null)}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
