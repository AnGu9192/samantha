import React from "react";
import styles from "./Sidebar.module.scss";
import ProfileImgae from "../assets/Profile.png";
import { Link, useLocation } from "react-router-dom";

const sidebarNavLinks = [
  "dashboard",
  "expenses",
  "wallets",
  "summary",
  "accounts",
  "settings",
];
function Sidebar() {
  const location = useLocation();
  return (
    <>
      <aside className={styles.sidebar}>
        <div className={styles.sidebatContent}>
          <div className={styles.profileDetails}>
            <div className={styles.profileImageDiv}>
              <img src={ProfileImgae} alt="samantha" />
              <p className={styles.notifications}>4</p>
            </div>
            <p className={styles.userName}>Samantha</p>
            <p className={styles.userEmail}>samantha@email.com</p>
          </div>
          <nav className={styles.sidebarNav}>
            <ul>
              {sidebarNavLinks.map((sidebarNavLink) => (
                <li className={styles.sidebarNavItem} key={sidebarNavLink}>
                  <Link
                    className={
                      location.pathname === "/${sidebarNavLink"
                        ? styles.sidebarLinkActive
                        : styles.sidebarNavLink
                    }
                    to={"/${sidebarNavLink"}
                  >
                    {sidebarNavLink.charAt(0).toUpperCase() +
                      sidebarNavLink.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
