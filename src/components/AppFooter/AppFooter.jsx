import styles from "./AppFooter.module.css";
import { FaGithub } from "react-icons/fa";

const AppFooter = () => {
  return (
    <footer className={styles.AppFooter}>
      {" "}
      <div>
        <a
          href="https://github.com/iSRHcoder"
          style={{ color: "black", fontSize: "3rem" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
      <div className="fs-5 fw-bold">
        <h2>Made with ❤️ by iSRHcoder [2023]</h2>
      </div>
    </footer>
  );
};

export default AppFooter;
