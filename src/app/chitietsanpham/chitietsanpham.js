'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './chitietsanpham.module.css';

const ProductDetail = () => {
  const [isOpen, setIsOpen] = useState({
    mota: false,
    vanchuyen: false,
    thanhphan: false,
    meo: false
  });

  const toggleSection = (key) => {
    setIsOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.breadcrumb}>
        <Link href="./maincontent.js">Trang chủ</Link> / <span>Viên ngọc của Shell</span>
      </div>

      <div className={styles.productContent}>
        <div className={styles.imageWrapper}>
          <Image
            src="/Image/chitietsanpham1.jpg"
            alt="Phấn má hồng Shell"
            width={500}
            height={500}
            className={styles.productImage}
          />
        </div>

        <div className={styles.infoWrapper}>
          <h1>Phấn má hồng Shell's Jewel Silk Satin</h1>
          <p className={styles.subTitle}>Phấn má hồng và phấn bắt sáng trong một sản phẩm – giải pháp nhanh chóng cho làn da bóng mịn.</p>
          <p className={styles.price}>26,00 đô la <span className={styles.soon}>Sắp ra mắt</span></p>
          <p className={styles.shipping}>Phí vận chuyển được tính khi thanh toán.</p>
          <p>Thanh toán theo thời gian cho các đơn hàng trên <strong>$35.00</strong> với <span className={styles.shopPay}>ShopPay</span></p>

          <div className={styles.colorSection}>
            <p><strong>Màu sắc</strong> – S01 San hô rám nắng</p>
            <div className={styles.colors}>
              <span className={`${styles.color} ${styles.active}`} style={{ backgroundColor: '#e7746f' }}></span>
              <span className={styles.color} style={{ backgroundColor: '#df9a83' }}></span>
              <span className={styles.color} style={{ backgroundColor: '#f1bfa3' }}></span>
              <span className={styles.color} style={{ backgroundColor: '#fabdc8' }}></span>
            </div>
          </div>

          <div className={styles.quantity}>
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>

          <button className={styles.buyButton}>Sắp ra mắt</button>

          {/* Mô tả sản phẩm */}
          <div className={styles.accordion}>
            <div onClick={() => toggleSection('mota')}>
              🌟 Mô tả sản phẩm {isOpen.mota ? '−' : '+'}
            </div>
            {isOpen.mota && (
              <p>
                💫 Lấy cảm hứng từ thiết kế bao bì đá quý cắt hình bát giác ‘chai đá quý’, đèn chùm ngôi sao và hình chạm nổi cánh cung, tạo nên huyền thoại và nàng tiên cá.
                🌊 Công thức cải tiến mới với Công nghệ Oil-in-Water cho lớp nền mỏng nhẹ, không nhờn.
                🎨 Có 9 tông màu phù hợp nhiều tone da khác nhau.
              </p>
            )}

            <div onClick={() => toggleSection('vanchuyen')}>
              🚚 Vận chuyển & Trả lại {isOpen.vanchuyen ? '−' : '+'}
            </div>
            {isOpen.vanchuyen && <p>Miễn phí đổi trả trong vòng 7 ngày.</p>}

            <div onClick={() => toggleSection('thanhphan')}>
              🔒 Thành phần sản phẩm {isOpen.thanhphan ? '−' : '+'}
            </div>
            {isOpen.thanhphan && <p>Không chứa paraben, không thử nghiệm trên động vật.</p>}

            <div onClick={() => toggleSection('meo')}>
              🎯 Mẹo ứng dụng {isOpen.meo ? '−' : '+'}
            </div>
            {isOpen.meo && <p>Dùng cọ mềm để tán đều lên gò má và vùng bắt sáng.</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
