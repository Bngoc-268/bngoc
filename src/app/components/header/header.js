// components/Header.tsx
import Link from "next/link";
import styles from "./header.module.css";
import {FaSearch, FaUser, FaShoppingBag} from "react-icons/fa";   
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.iconLeft}>
        <div className={styles.searchBar}>
            <FaSearch className={styles.searchIcon} />
            <input type="text" placeholder="Tìm kiếm..." className={styles.searchInput} />
        </div>
      </div>

        <div className={styles.logo}>
          <h1>Flower ♡ Knows</h1>
        </div>

        <div className={styles.iconRight}>
        <FaUser />
          <FaShoppingBag />
        </div>
      </div>

      <nav className={styles.nav}>
        <ul>
          <li><Link href="#">MỚI</Link></li>
          <li><Link href="#">BÁN CHẠY NHẤT</Link></li>
          <li><Link href="#">MUA SẮM TẤT CẢ</Link></li>
          <li><Link href="#">BỘ SƯU TẬP</Link></li>
          <li><Link href="#">BỘ GIÁ TRỊ</Link></li>
          <li><Link href="#">KHUYẾN MÃI</Link></li>
          <li><Link href="#">PHẦN THƯỞNG</Link></li>
        </ul>
      </nav>
    </header>
  );
}

