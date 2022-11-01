// Misc
import { ReactComponent as LocationIcon } from "../../assets/Location.svg";
import { ReactComponent as BookmarkIcon } from "../../assets/Bookmark.svg";
import { ReactComponent as FilledStar } from "../../assets/Star.svg";
import { ReactComponent as HollowStar } from "../../assets/Star-hollow.svg";
import { Link } from "react-router-dom";

// Styled Components
import {
  JOB_LISTING_CONTAINER,
  CONTENT_BOX,
  INFO_BOX,
  IMG,
  INFO_CONTENT,
  LOCATION,
  DETAILS_BOX,
  STARS_BOX
} from "./job-listing.styles";

const JobListing = ({ data }) => {

  const { pictures, title, id, name } = data;
  const randomDays = Math.floor(Math.random() * 30) + 1;
  const randomStars = Math.floor(Math.random() * 6);

  return (
    <JOB_LISTING_CONTAINER>
      <IMG img={pictures[0]} />
      <CONTENT_BOX>
        <INFO_BOX>
          <INFO_CONTENT>
            <Link to={`job/${id}`}>{title}</Link>
            <span>Department name • {name}</span>
            <LOCATION>
              <LocationIcon />
              <span>Vienna, Austria</span>
            </LOCATION>
          </INFO_CONTENT>
        </INFO_BOX>

        <STARS_BOX>
          {
            [...Array(randomStars)].map((e, i) => <FilledStar key={Math.random()} />)
          }
          {
            [...Array(5 - randomStars)].map((e, i) => <HollowStar key={Math.random()} />)
          }
        </STARS_BOX>

        <DETAILS_BOX>
          <BookmarkIcon />
          <span>{randomDays === 1 ? `Posted ${randomDays} day ago` : `Posted ${randomDays} days ago`}</span>
        </DETAILS_BOX>

      </CONTENT_BOX >
    </JOB_LISTING_CONTAINER>
  );
};

export default JobListing;