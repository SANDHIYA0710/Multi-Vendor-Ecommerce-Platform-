# 🛍️ Velora -- Multi‑Vendor E‑Commerce Platform

> **Velora** is a production-style full-stack marketplace where multiple
> vendors can manage stores, customers can discover and purchase
> products, and administrators can oversee the complete platform through
> dedicated dashboards.

## ✨ Highlights

-   JWT Authentication & Role-Based Access
-   Multi-Vendor Marketplace
-   Smart Order Splitting
-   Coupon & Discount Engine
-   Wishlist & Reviews
-   Interactive Analytics
-   Responsive UI
-   Product Image Upload
-   Payment Simulation

## 👑 Modules

### Admin

-   Dashboard
-   Vendor Approval
-   Customer Management
-   Product & Order Management
-   Coupons & Analytics

### Vendor

-   Product CRUD
-   Orders
-   Revenue Dashboard
-   Sales Analytics

### Customer

-   Registration & Login
-   Browse Products
-   Search, Filter & Sort
-   Cart & Wishlist
-   Checkout
-   Reviews
-   Profile

## ⚙️ Tech Stack

**Backend:** FastAPI, SQLAlchemy, PostgreSQL/SQLite, JWT, Pydantic

**Frontend:** React, Vite, Tailwind CSS, Axios, React Router, Recharts

## 📦 Smart Order Splitting

``` text
Customer Cart
Laptop (Vendor A)
Mouse (Vendor A)
Headset (Vendor B)

↓

Order #1001 (Vendor A)
- Laptop
- Mouse

Order #1002 (Vendor B)
- Headset
```

## 📁 Structure

``` text
backend/
 ├── app/
 ├── uploads/
 └── requirements.txt

frontend/
 ├── src/
 ├── components/
 ├── layouts/
 └── App.jsx
```

## 🚀 Backend

``` bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Swagger: http://127.0.0.1:8000/docs

## 💻 Frontend

``` bash
cd frontend
npm install
npm run dev
```

Frontend: http://localhost:5173

## 👩‍💻 Developer

**Sandhiya K**

**Velora -- Multi‑Vendor E‑Commerce Platform**

Built with FastAPI + React + Tailwind CSS.
