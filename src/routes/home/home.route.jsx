// Misc
import { useSelector } from "react-redux";

// Redux
import { selectJobs } from "../../store/jobs/jobs.selector";

// Components
import JobListing from "../../components/job-listing/job-listing.comp";

// Styled Components
import { HOME_CONTAINER } from "./home.route.styles";

const Home = () => {

  const jobsArray = useSelector(selectJobs);

  return (
    <HOME_CONTAINER>
      {
        jobsArray.map(entry => <JobListing key={entry.id} data={entry} />)
      }
    </HOME_CONTAINER>
  );
};

export default Home;