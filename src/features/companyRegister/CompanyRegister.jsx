import styles from "./CompanyRegister.module.css";
import { useNavigate } from "react-router-dom";

const CompanyRegister = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventdefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/v1/companies/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: e.target[0].value,
            email: e.target[1].value,
            mobile: e.target[2].value,
          }),
        }
      );
      if (response.ok) {
        navigate("/job-post");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className={styles.container}>
      <h2>Company Registration</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="text" placeholder="Company Name" required />
        <input type="email" placeholder="Company Email" required />
        <input type="text" placeholder="Contact Number" required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default CompanyRegister;
