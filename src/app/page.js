import Image from "next/image"; 
import styles from "./page.module.css";
import Footer  from "./components/footer/footer";
import Header from "./components/header/header";




import Maincontent from "./components/maincontent/maincontent";

export default function Home() { 
  return ( 
    <div className={styles.content}>
      
      <Header/>
    
      <Maincontent/>
      <Footer/>
    </div>

 
  ); 
}
