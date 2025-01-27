import styles from "./JobPost.module.css";
import { useNavigate } from "react-router-dom";

const JobPost = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const response = fetch(
        `${import.meta.env.VITE_API_URL}/api/v1/jobs/post`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: e.target[0].value,
            description: e.target[1].value,
            experience: e.target[2].value,
            email: e.target[3].value,
            endDate: e.target[4].value,
          }),
        }
      );
      if (response.ok) {
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className={styles.container}>
      <h2>Post a Job</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="text" placeholder="Job Title" required />
        <textarea placeholder="Job Description" required />
        <input type="text" placeholder="experiencelevel" required />
        <input type="text" placeholder="email" required />
        <input type="date" placeholder="end date" required />
        <button type="submit">Post Job</button>
      </form>
    </div>
  );
};

export default JobPost;
