// Misc
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ReactComponent as Share } from "../../assets/Share.svg";
import { ReactComponent as Bookmark } from "../../assets/Bookmark.svg";
import { ReactComponent as Arrow } from "../../assets/Arrow.svg";

// Redux
import { selectJobs } from "../../store/jobs/jobs.selector";

// Components
import ContactBlock from "../../components/contact-block/contact-block.comp";

// Styled Components
import {
  JOB_CONTAINER,
  HEAD_SECTION,
  ACTIONS_BOX,
  APPLY_BUTTON_CONTAINER,
  INFO_SECTION,
  TITLE_BOX,
  SALARY,
  DESCRIPTION,
  RESPONSIBILITIES,
  BENEFITS,
  ADDITIONAL_INFO_SECTION,
  ADDITIONAL_INFO_HEAD,
  ADDITIONAL_INFO_CONTENT,
  BENEFIT,
  EMPLOYMENT,
  IMG_SECTION,
  IMG_BLOCK,
  IMG,
  RETURN_CONTAINER
} from "./job.route.styles";

const Job = () => {

  const { id } = useParams();
  const jobsArray = useSelector(selectJobs);
  const jobData = jobsArray.filter(entry => entry.id === id)[0];

  const randomDays = Math.floor(Math.random() * 30) + 1;

  const { benefits, description, employment_type, pictures, salary, title } = jobData;

  return (
    <JOB_CONTAINER>

      <HEAD_SECTION>
        <h1>Job Details</h1>

        <ACTIONS_BOX>
          <div>
            <Bookmark />
            <span>Save to my list</span>
          </div>

          <div>
            <Share />
            <span>Share</span>
          </div>
        </ACTIONS_BOX>
      </HEAD_SECTION>

      <APPLY_BUTTON_CONTAINER>
        <button>APPLY NOW</button>
      </APPLY_BUTTON_CONTAINER>


      <INFO_SECTION>

        <TITLE_BOX>
          <div>
            <h2>{title}</h2>
            <span>{randomDays === 1 ? `Posted ${randomDays} day ago` : `Posted ${randomDays} days ago`}</span>
          </div>

          <SALARY>
            € {salary.replaceAll("k", " 000").replace("-", "—")} <br />
            <span>Brutto, per year</span>
          </SALARY>
        </TITLE_BOX>

        <DESCRIPTION>{description}</DESCRIPTION>

        <RESPONSIBILITIES>
          <h3>Responsibilities</h3>
          <p>
            Wellstar Medical Group, a physician-led multi-specialty group in Atlanta, Georgia, is currently recruiting for a BC/BE cardiothoracic surgeon to join their existing cardiovascular program. This is an opportunity to play a key role on a multidisciplinary team of cardiologists and surgeons.
            <br />
            <br />
            The ideal candidate will have five or more years of experience in cardiac surgery. This candidate should be facile with off-pump revascularization, complex aortic surgery, minimally invasive valve and valve repair, transcatheter valve replacement, surgical atrial fibrillation ablation, ventricular assist device placement, and extra corporeal membrane oxygenation.
            <br />
            <br />
            Wellstar is one of the largest integrated healthcare systems in the Southeast with 11 hospitals in Atlanta metro region. With two open heart programs at Kennestone Regional Medical Center and Atlanta Medical Center, Wellstar cardiac surgeons perform over 1200 cardiac procedures per year. The cardiac service line is the only center in Georgia with the Joint Commission’s Comprehensive Cardiac Center certification.
          </p>
        </RESPONSIBILITIES>

        <BENEFITS>
          <h3>Compensation & Benefits:</h3>
          <ul>
            <li>Very competitive compensation package with bonuses</li>
            <li>Medical, Dental, and Vision Insurance</li>
            <li>Occurrence-based Malpractice Coverage</li>
            <li>Short-term and Long-term Disability Insurance
              and life insurance</li>
          </ul>
        </BENEFITS>

        <APPLY_BUTTON_CONTAINER>
          <button>APPLY NOW</button>
        </APPLY_BUTTON_CONTAINER>

      </INFO_SECTION>

      <ADDITIONAL_INFO_SECTION>
        <ADDITIONAL_INFO_HEAD>
          <h1>Additional info</h1>
        </ADDITIONAL_INFO_HEAD>

        <ADDITIONAL_INFO_CONTENT>
          <span>Employment type</span>
          <div>
            {
              employment_type.map(entry => <EMPLOYMENT key={Math.random()}>{entry}</EMPLOYMENT>)
            }
          </div>
        </ADDITIONAL_INFO_CONTENT>

        <ADDITIONAL_INFO_CONTENT>
          <span>Benefits</span>
          <div>
            {
              benefits.map(entry => <BENEFIT key={Math.random()}>{entry}</BENEFIT>)
            }
          </div>
        </ADDITIONAL_INFO_CONTENT>

      </ADDITIONAL_INFO_SECTION>

      <IMG_SECTION>
        <div>
          <h1>Attached images</h1>
        </div>

        <IMG_BLOCK>
          {
            pictures.map(img => <IMG key={Math.random()} img={img} />)
          }
        </IMG_BLOCK>
      </IMG_SECTION>

      <ContactBlock data={jobData} />

      <RETURN_CONTAINER>
        <a href="/">
          <Arrow />
          <span>RETURN TO JOB BOARD</span>
        </a>
      </RETURN_CONTAINER>

    </JOB_CONTAINER>
  );
};

export default Job;