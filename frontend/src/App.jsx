import { Routes, Route, Link } from "react-router-dom";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import ProtectedRoute from "./routes/ProtectedRoute";

import Profile from "./pages/Profile";

import CustomerDashboard from "./pages/customer/CustomerDashboard";
import Products from "./pages/customer/Products";
import Wishlist from "./pages/customer/Wishlist";
import Cart from "./pages/customer/Cart";
import Orders from "./pages/customer/Orders";
import ProductDetails from "./pages/customer/ProductDetails";
import ReviewProduct from "./pages/customer/ReviewProduct";

import VendorDashboard from "./pages/vendor/VendorDashboard";
import MyProducts from "./pages/vendor/MyProducts";
import AddProduct from "./pages/vendor/AddProduct";
import EditProduct from "./pages/vendor/EditProduct";
import VendorOrders from "./pages/vendor/VendorOrders";

import AdminDashboard from "./pages/admin/AdminDashboard";
import Vendors from "./pages/admin/Vendors";
import Users from "./pages/admin/Users";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminOrders from "./pages/admin/AdminOrders";
import Coupons from "./pages/admin/Coupons";

function Home() {
  const categories = [
    { emoji: "👕", name: "Fashion" },
    { emoji: "💻", name: "Electronics" },
    { emoji: "💄", name: "Beauty" },
    { emoji: "🛋️", name: "Furniture" },
    { emoji: "🏀", name: "Sports" },
    { emoji: "🥬", name: "Groceries" },
  ];

  const features = [
    {
      icon: "🚚",
      title: "Free Delivery",
      desc: "Fast delivery across India",
    },
    {
      icon: "💳",
      title: "Secure Payment",
      desc: "100% secure transactions",
    },
    {
      icon: "🏪",
      title: "Trusted Sellers",
      desc: "Verified place vendors",
    },
    {
      icon: "🎧",
      title: "24 × 7 Support",
      desc: "Always here to help",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-violet-50 to-white">

      {/* NAVBAR */}

      <nav className="bg-white/95 backdrop-blur-xl border-b border-violet-100
border border-violet-100
rounded-3xl
shadow-lg
hover:shadow-2xl
hover:-translate-y-2
transition-all
duration-300-lg backdrop-blur-md bg-white/95 backdrop-blur-xl border-b border-violet-100/90 sticky top-0 z-50">

        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

          <h1 className="text-3xl font-black text-violet-700">
            <h1 className="text-3xl font-black bg-gradient-to-r from-violet-700 via-fuchsia-600 to-pink-500 bg-clip-text text-transparent">
  Velora
</h1>
          </h1>

          <div className="hidden lg:flex gap-8 text-gray-700 font-semibold">

            <a href="#">Home</a>

            <a href="#">Categories</a>

            <a href="#">Products</a>

            <a href="#">Become Seller</a>

            <a href="#">About</a>

          </div>

          <div className="flex gap-4">

            <Link
              to="/login"
              className="border border-violet-700 px-5 py-2 rounded-xl text-violet-700 hover:bg-violet-700 hover:text-white transition"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="bg-violet-700 px-5 py-2 rounded-xl text-white hover:bg-violet-800 transition"
            >
              Register
            </Link>

          </div>

        </div>

      </nav>

      {/* HERO */}

      <section className="max-w-7xl mx-auto px-8 py-20 grid lg:grid-cols-2 gap-16 items-center">

        <div>

          <span className="bg-violet-100 text-violet-700 px-5 py-2 rounded-full font-semibold">

            India's Premium place

          </span>

          <h1 className="text-6xl font-black mt-8 leading-tight text-gray-900">

            Shop Smarter.
            <br />
            Live Better.

          </h1>

          <p className="text-lg text-gray-600 mt-8 leading-8">

            <h1 className="text-3xl font-black bg-gradient-to-r from-violet-700 via-fuchsia-600 to-pink-500 bg-clip-text text-transparent">
  Velora
</h1> connects thousands of customers with trusted vendors.
            Buy premium products, enjoy secure payments and experience
            fast delivery at affordable prices.

          </p>

          <div className="flex gap-5 mt-10">

            <Link
              to="/register"
              className="bg-gradient-to-r from-violet-700 to-purple-600 text-white shadow-xl px-8 py-4 rounded-xl font-bold hover:bg-violet-800"
            >
              Shop Now
            </Link>

            <Link
              to="/register"
              className="border-2 border-violet-700 text-violet-700 px-8 py-4 rounded-xl font-bold hover:bg-violet-700 hover:text-white"
            >
              Become Seller
            </Link>

          </div>

        </div>

        <div>

          <div className="rounded-3xl bg-gradient-to-br from-violet-700 via-purple-700 to-violet-900 p-12 text-white shadow-lg backdrop-blur-md bg-white/95 backdrop-blur-xl border-b border-violet-100/90-2xl">

            <p className="text-2xl">
              🔥 Limited Time Offer
            </p>

            <h2 className="text-6xl font-black mt-6">

              60%
              <br />
              OFF

            </h2>

            <p className="mt-6 text-lg">

              Fashion • Electronics • Beauty • Furniture

            </p>

            <button className="bg-white/95 backdrop-blur-xl border-b border-violet-100 text-violet-700 font-bold px-8 py-4 rounded-xl mt-10">

              Explore Deals

            </button>

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="bg-gradient-to-r from-slate-950 via-violet-950 to-slate-900 text-white mt-20">

        <div className="max-w-7xl mx-auto px-8 py-10 flex flex-col md:flex-row justify-between items-center">

          <div>

            <h2 className="text-3xl font-black text-violet-600">
              <h1 className="text-3xl font-black bg-gradient-to-r from-violet-700 via-fuchsia-600 to-pink-500 bg-clip-text text-transparent">
  Velora
</h1>
            </h2>

            <p className="text-gray-400 mt-3">
              Your Trusted Multi Vendor place
            </p>

          </div>

          <p className="text-gray-300 mt-5 md:mt-0">
            © 2026 <h1 className="text-3xl font-black bg-gradient-to-r from-violet-700 via-fuchsia-600 to-pink-500 bg-clip-text text-transparent">
  Velora
</h1>. All Rights Reserved.
          </p>

        </div>

      </footer>

    </div>
  );
}

function App() {
  return (
    <Routes>

      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* Authentication */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Customer */}
      <Route
        path="/customer/dashboard"
        element={
          <ProtectedRoute allowedRoles={["customer"]}>
            <CustomerDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/customer/products"
        element={
          <ProtectedRoute allowedRoles={["customer"]}>
            <Products />
          </ProtectedRoute>
        }
      />

      <Route
        path="/customer/products/:id"
        element={
          <ProtectedRoute allowedRoles={["customer"]}>
            <ProductDetails />
          </ProtectedRoute>
        }
      />

      <Route
        path="/customer/cart"
        element={
          <ProtectedRoute allowedRoles={["customer"]}>
            <Cart />
          </ProtectedRoute>
        }
      />

      <Route
        path="/customer/orders"
        element={
          <ProtectedRoute allowedRoles={["customer"]}>
            <Orders />
          </ProtectedRoute>
        }
      />

      <Route
        path="/customer/wishlist"
        element={
          <ProtectedRoute allowedRoles={["customer"]}>
            <Wishlist />
          </ProtectedRoute>
        }
      />

      <Route
        path="/customer/review/:id"
        element={
          <ProtectedRoute allowedRoles={["customer"]}>
            <ReviewProduct />
          </ProtectedRoute>
        }
      />

      <Route
        path="/customer/profile"
        element={
          <ProtectedRoute allowedRoles={["customer"]}>
            <Profile role="customer" />
          </ProtectedRoute>
        }
      />

      {/* Vendor */}

      <Route
        path="/vendor/dashboard"
        element={
          <ProtectedRoute allowedRoles={["vendor"]}>
            <VendorDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/vendor/products"
        element={
          <ProtectedRoute allowedRoles={["vendor"]}>
            <MyProducts />
          </ProtectedRoute>
        }
      />

      <Route
        path="/vendor/add-product"
        element={
          <ProtectedRoute allowedRoles={["vendor"]}>
            <AddProduct />
          </ProtectedRoute>
        }
      />

      <Route
        path="/vendor/edit-product/:id"
        element={
          <ProtectedRoute allowedRoles={["vendor"]}>
            <EditProduct />
          </ProtectedRoute>
        }
      />

      <Route
        path="/vendor/orders"
        element={
          <ProtectedRoute allowedRoles={["vendor"]}>
            <VendorOrders />
          </ProtectedRoute>
        }
      />

      <Route
        path="/vendor/profile"
        element={
          <ProtectedRoute allowedRoles={["vendor"]}>
            <Profile role="vendor" />
          </ProtectedRoute>
        }
      />

      {/* Admin */}

      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/vendors"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <Vendors />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/users"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <Users />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/products"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminProducts />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/orders"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminOrders />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/coupons"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <Coupons />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/profile"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <Profile role="admin" />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}

export default App;