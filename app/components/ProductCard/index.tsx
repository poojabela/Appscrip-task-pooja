"use client";

import { Heart } from "lucide-react";
import styles from "./ProductCard.module.css";
import { ProductCardProps } from "@/app/types";

export default function ProductCard({ title, image }: ProductCardProps) {
  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img
          src={image}
          alt={title}
          height={399}
          width={300}
          className={styles.productImage}
        />
      </div>
      <div className={styles.productInfo}>
        <div>
          <p className={styles.productTitle}>{title}</p>
          <p className={styles.pricingText}>
            <span className={styles.signInLink}>Sign in</span> or Create an
            account to see pricing
          </p>
        </div>
        <Heart className={styles.heartIcon} />
      </div>
    </div>
  );
}
