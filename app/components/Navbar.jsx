"use client";
// In-built components
import Image from "next/image";
import Link from "next/link";

// Icons
import { BiSearch } from "react-icons/bi";
import { HiShoppingCart } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { BiMenu } from "react-icons/bi";

// Styles
import styles from "../styles/Navbar.module.css";

// assets
import Logo from "../../public/assets/pizza-logo_afsvzn.png";
import Pizza from "../../public/assets/pizza-header-img_krzjsl.png";

import { useState } from "react";

const Navbar = () => {
  // toggle menu
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  // Function to close menu
  const closeMenu = () => {
    setShowMenu(false);

  };
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.logo}>
          <Image src={Logo} width={50} quality={100} alt="Pizza logo" />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.pizza}>
          <Image src={Pizza} width={170} quality={100} alt="Pizza header" />
        </div>
      </div>
{/* menu icon */}
      <div className={`${styles.menuIcon}`} onClick={() => setShowMenu(!showMenu)}>
        {showMenu ? (
          <MdOutlineClose size={30} onClick={() => setShowMenu(false)}/>
        ) : (
          <BiMenu size={30} onClick={() => setShowMenu(true)}/>
        )}
      </div>
      
      {/* Dropdown menu */}
      <div className={`${styles.item} ${styles.dropdownMenu} ${showMenu ? styles.showDropdown : ''}`}>
        <div className={styles.list}>
          <Link href="/"  onClick={closeMenu} className={styles.listItem}>
            Home
          </Link>
          <Link href="/products" onClick={closeMenu} className={styles.listItem}>
            Products
          </Link>
          <Link href="/pages" onClick={closeMenu} className={styles.listItem}>
            Pages
          </Link>
          <Link href="/blog" onClick={closeMenu} className={styles.listItem}>
            Blog
          </Link>
          <Link href="/contact" onClick={closeMenu} className={styles.listItem}>
            Contact
          </Link>
        </div>
    
         <div className={styles.search}>
          <div className={styles.icons}>
            <BiSearch size={18}/>
            <MdOutlineClose size={18} className={styles.close}/>
          </div>
          {/* <div className={styles.searchInput}>
            <input type="text" placeholder="Search..." />
            <MdOutlineClose size={18} />
          </div> */}
          </div>

          
          <div className={styles.item}>
          <div className={styles.icons}>
            <Link href="/cart">
              <HiShoppingCart size={28} fill="#086aed" />
            </Link>
            <div className={styles.counter}>0</div>
          </div>
          </div> 
          
      </div>
    </div>
  );
};

export default Navbar;
