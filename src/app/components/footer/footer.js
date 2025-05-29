import React from "react";
import styles from "./footer.module.css";
import {
  FaFacebookF,
  FaPinterestP,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.column}>
          <h4>VỀ HOA BIẾT</h4>
          <ul>
            <li>Chương trình khách hàng thân thiết</li>
            <li>Câu chuyện thương hiệu</li>
            <li>Chương trình liên kết</li>
            <li>Giảm giá cho sinh viên</li>
            <li>Cộng đồng</li>
            <li>Trở thành nhà bán lẻ</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>CHĂM SÓC KHÁCH HÀNG</h4>
          <ul>
            <li>Chính sách vận chuyển</li>
            <li>Chính sách hoàn tiền</li>
            <li>Điều khoản và điều kiện khuyến mại</li>
            <li>Chính sách bảo mật</li>
            <li>Điều khoản và điều kiện</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>DỊCH VỤ KHÁCH HÀNG</h4>
          <ul>
            <li>Theo dõi đơn hàng của bạn</li>
            <li>Câu hỏi thường gặp</li>
            <li>Liên hệ với chúng tôi</li>
            <li>Gửi một giả mạo</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>THEO DÕI CHÚNG TÔI</h4>
          <div className={styles.socialIcons}>
            <FaFacebookF />
            <FaPinterestP />
            <FaInstagram />
            <FaTiktok />
            <FaYoutube />
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>&copy; 2025, Flower Knows. Bảo lưu mọi quyền.</p>
        <div className={styles.languageSelector}>
          🌍 Hoa Kỳ (USD $)
        </div>
      </div>
    </footer>
  );
};

export default Footer;
