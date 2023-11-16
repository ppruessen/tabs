import { useEffect, useState } from "react";
import JobInfo from "./JobInfo";
import BtnContainer from "./BtnContainer";

const url = 'https://course-api.com/react-tabs-project';

const App = () => {

  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network error');
        }
        return response.json();
      })
      .then(data => {
        setJobs(data);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching the data:', error));
  }, []);

  if (loading) {
    return (
      <section className='jobs-center'>
        <div className='loading'></div>
      </section>
    );
  }

  return <section className="jobs-center">
    <BtnContainer jobs={jobs} currentItem={currentItem} setCurrentItem={setCurrentItem} />
    <JobInfo jobs={jobs} currentItem={currentItem}/>
  </section>;
};
export default App;
