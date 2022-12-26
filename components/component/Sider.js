import React from 'react';
import styles from '../../styles/post.module.css'

const SideBar = ({ openClass }) => {
  return (
      <div>
  
    <nav id={openClass === 'open' ? styles.opneSidebar : ''}>

 
    
      <ul id={styles.navlist}>
      <h3>Job</h3>
        <li>
          <a id={styles.menu_item} href="/">
            Home
          </a>
        </li>

        <li>
          <a id={styles.menu_item} href="">
            Account/finance
          </a>
        </li>

        <li>
          <a id={styles.menu_item} href="">
            Website designing
          </a>
        </li>
        <li>
          <a id={styles.menu_item} href="">
            Engineering 
          </a>
        </li>
      </ul>

    </nav>
    </div>
  );
};

export default SideBar;
