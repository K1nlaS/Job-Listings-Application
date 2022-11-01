// Misc
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

// Redux
import { fetchJobsAsync } from "./store/jobs/jobs.action";

// Components
import Home from "./routes/home/home.route";

// Styled Components
import { APP_CONTAINER, CONTENT_CONTAINER } from "./App.styles";



function App() {

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchJobsAsync());
  // }, []);

  return (
    <APP_CONTAINER>
      <CONTENT_CONTAINER>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </CONTENT_CONTAINER>
    </APP_CONTAINER>
  );
}

export default App;
