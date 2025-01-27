import { Outlet, Link } from "react-router-dom";
import styles from "./AppLayout.module.css";

const AppLayout = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Job Posting Platform</h1>
        <nav className={styles.nav}>
          <Link to="/job-list" className={styles.navLink}>
            Job List
          </Link>
          <Link to="/job-post" className={styles.navLink}>
            Post a Job
          </Link>
          <Link to="/company-register" className={styles.navLink}>
            Company Register
          </Link>
        </nav>
      </header>
      <main className={styles.main}>
        <Outlet /> {/* This will render the nested routes */}
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2023 Job Posting Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AppLayout;
