import React from "react";
import Image from "next/image";
import styles from "./maincontent.module.css"
import Link from "next/link";
// import ProductDetail from "./pages.js"
const maincontent = () =>  {
    return (
        <main className={styles.mainContent}> 
        <section className={styles.content}> 
          <div className={styles.banner}>
           <Image src="/image/banner 1.webp" alt="Banner 1" width={1150} height={500} className={styles.bannerImage} />
           <Image src="/image/banner 2.webp" alt="Banner 2" width={1150} height={500} className={styles.bannerImage} />

        </div>
        </section> 
        
        {/* Product Showcase Section */}
        <section id="products" className={styles.productSection}>
          <h2>Các Sản Phẩm Nổi Bật</h2>
          <div className={styles.productGrid}>
    
            {/* Dòng 1 */}
            <div className={styles.productCard}>
              <Image src="/image/son1.jpg" alt="Product 1" width={300} height={300} />
              <h3>Son môi</h3>
              <p className={styles.productDescription}>phép màu nhỏ bé tô sắc thắm cho đôi môi, khiến nụ cười rạng rỡ như có phép thuật.</p>
              <p>Giá: 250.000 VND</p>
              <button className={styles.buyButton}>Mua Ngay</button>
            </div>
            <div className={styles.productCard}>
              <Image src="/image/phanmat1.jpg" alt="Product 2" width={300} height={300} />
              <h3>Phấn mắt</h3>
              <p className={styles.productDescription}>Phấn mắt là phép màu tô điểm ánh nhìn, cho đôi mắt lung linh như sương khói hay rực rỡ như ánh sao.</p>
              <p>Giá: 300.000 VND</p>
              <button className={styles.buyButton}>Mua Ngay</button>
            </div>
            <div className={styles.productCard}>
              <Image src="/image/nuochoa1.jpg" alt="Product 3" width={300} height={300} />
              <h3>Nước hoa</h3>
              <p className={styles.productDescription}>Nước hoa là phép thuật của hương thơm, vương nhẹ trên danhuw lời thì thầm của gió, khiến ai lướt qua cũng say mê như lạc vào giấc mộng.</p>
              <p>Giá: 200.000 VND</p>
              <button className={styles.buyButton}>Mua Ngay</button>
            </div>



            {/* Dòng 2 */}
            <Link href="./chitietsanpham">
              <div className={styles.productCard}>
                <Image src="/Image/ma1.jpg" alt="Phanma" width={300} height={300} />
                <h3 className={styles.productName}>Phấn má</h3>
                <p className={styles.productDescription}>Phấn má là làn gió nhẹ nhuộm hồng đôi má, mang đến vẻ tươi tắn, ngọt ngào như vừa được nắng hôn khẽ.</p>
                <p className={styles.productPrice}>Giá: 169.000 VND</p>
                <button type="button" className={styles.buyButton}>Mua ngay</button>
              </div>
            </Link>

            <div className={styles.productCard}>
              <Image src="/image/guong2.jpg" alt="Product 2" width={300} height={300} />
              <h3>Gương cầm tay</h3>
              <p className={styles.productDescription}>Gương cầm tay là món bảo bối nhỏ xinh, soi ánh nhinfn hư mặt hồ tĩnh lặng, lưu giữ vẻ đẹp của nàng trong từng khoảnh khắc.</p>
              <p>Giá: 477.000 VND</p>
              <button className={styles.buyButton}>Mua Ngay</button>
            </div>
            <div className={styles.productCard}>
              <Image src="/image/phanphu2.jpg" alt="Product 3" width={300} height={300} />
              <h3>Phấn phủ</h3>
              <p className={styles.productDescription}>Phấn phủ là lớp màng thần tiên phủ nhẹ, giúp da mịn màng như nhung, giữ cho vẻ tươi tắn bền lâu suốt ngày dài.</p>
              <p>Giá: 184.000 VND</p>
              <button className={styles.buyButton}>Mua Ngay</button>
            </div>

           {/* Dòng 3 */}
           <div className={styles.productCard}>
              <Image src="/image/nhu2.jpg" alt="Product 1" width={300} height={300} />
              <h3>Nhũ bắt sáng</h3>
              <p className={styles.productDescription}>Nhũ bắt sáng như hạt sao li ti đậu trên da, tỏa sáng lung linh, mang đến vẻ rạng rỡ huyền ảo cho guownbg mặt.</p>
              <p>Giá: 99.000 VND</p>
              <button className={styles.buyButton}>Mua Ngay</button>
            </div>
               {/* Dòng 4 */}
               <div className={styles.productCard}>
              <Image src="/image/co2.jpg" alt="Product 1" width={300} height={300} />
              <h3>Cọ má hồng</h3>
              <p className={styles.productDescription}>Cọ má hồng như cánh quạt tiên nhỏ, nhẹ nhàng vờn trên má, thắp lên nét hồng đào tinh khôi đầy sức sống.</p>
              <p>Giá: 100.000 VND</p>
              <button className={styles.buyButton}>Mua Ngay</button>
            </div>
          </div>
        </section><br/>
        {/* Bộ Sưu Tập Trước Đó Section */}
<section className={styles.collectionSection}>
  <h2>Khám phá các bộ sưu tập trước đó</h2><br/>
  <div className={styles.collectionGrid}>
    <div className={styles.collectionCard}>
      <Image src="/Image/bo1.webp" alt="Vòng cổ mây hình bướm" width={200} height={300} />
      <h3>Vòng cổ mây hình bướm</h3>
    </div>
    <div className={styles.collectionCard}>
      <Image src="/Image/bo2.webp" alt="Bộ sưu tập truyện cổ tích giữa mùa hè" width={200} height={300} />
      <h3>Bộ sưu tập truyện cổ tích giữa mùa hè</h3>
    </div>
    <div className={styles.collectionCard}>
      <Image src="/Image/bo3.webp" alt="Bộ sưu tập Little Angel" width={200} height={300} />
      <h3>Bộ sưu tập Little Angel</h3>
    </div>
    <div className={styles.collectionCard}>
      <Image src="/Image/bo4.webp" alt="Vũ điệu Ba lê Thiên nga" width={200} height={300} />
      <h3>Vũ điệu Ba lê Thiên nga</h3>
    </div>
  </div>
</section>

       
        <Image src="/Image/anhtruocfooter.png" alt="Product 1" width={1150} height={300}/>
      </main> 
    )
}
export default maincontent;