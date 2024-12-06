"use client";

import { ChevronLeft } from "lucide-react";
import { useState, useEffect } from "react";
import styles from "./page.module.css";

import SortDropdown from "./components/SortDropdown";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FilterSidebar from "./components/FilterSidebar";
import ProductCard from "./components/ProductCard";
import { Product } from "./types";

export default function Home() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Header />
      <main>
        <div className={styles.container}>
          <div className={styles.heroSection}>
            <h2 className={styles.heroTitle}>DISCOVER OUR PRODUCTS</h2>
            <p className={styles.heroDescription}>
              Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
              scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
              dolor.
            </p>
          </div>

          <div className={styles.productHeader}>
            <p className={styles.mobileFilterText}>Filter</p>
            <div className={styles.headerLeft}>
              <p className={styles.itemCount}>{products.length} Items</p>
              <button
                className={styles.filterToggle}
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <ChevronLeft stroke="#292D32" width={16} height={16} />
                <span className={styles.filterText}>
                  {isFilterOpen ? "hide filter" : "show filter"}
                </span>
              </button>
            </div>
            <SortDropdown />
          </div>

          <div className={styles.productSection}>
            <FilterSidebar isOpen={isFilterOpen} />

            <div className={styles.productsGrid}>
              {isLoading ? (
                <div className={styles.loadingState}>Loading products...</div>
              ) : error ? (
                <div className={styles.errorState}>
                  {error}. Please try again later.
                </div>
              ) : (
                products.map((product) => (
                  <ProductCard
                    key={product.id}
                    title={product.title}
                    image={product.image}
                    price={product.price}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
