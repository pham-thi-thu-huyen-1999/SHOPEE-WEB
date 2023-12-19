"use client";
import Header from "./components/homepage/header";
import Banner from "./components/homepage/banner";
import Categories from "./components/homepage/category";
import Products from "./components/homepage/product";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* header */}
      <Header />
      <div className="mt-6 content">
        <div className="container mx-auto">
          {/* slider */}
          <Banner />
          {/* category */}
          <Categories />
          <Products />
        </div>
      </div>
    </main>
  );
}
