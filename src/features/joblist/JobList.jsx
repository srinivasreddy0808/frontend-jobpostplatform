import styles from "./JobList.module.css";
import { useState, useEffect } from "react";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/v1/jobs/get-all-jobs`
      );
      const data = await response.json();
      setJobs(data.data.jobs);
    };
    fetchJobs();
  }, []);

  return (
    <div className={styles.container}>
      <h2>Job Listings</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job.id} className={styles.jobItem}>
            <h3>{job.title}</h3>
            <p>{job.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
