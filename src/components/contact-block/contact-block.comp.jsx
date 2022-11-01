// Misc
import { ReactComponent as LocationIcon } from "../../assets/Location.svg";

// Components
import Map from "../map/map.comp";

// Styled Components
import {
  CONTACT_BLOCK_CONTAINER,
  INFO_BOX,
  MAP_BOX,
  NAME,
  ADDRESS,
  CONTACTS,
} from "./contact-block.styles";


const ContactBlock = ({ data }) => {

  const { address, location, name, email, phone } = data;

  return (
    <CONTACT_BLOCK_CONTAINER>
      <INFO_BOX>

        <NAME>
          Department name.
          <br />
          {name}
        </NAME>

        <ADDRESS>
          <LocationIcon />
          {address}
        </ADDRESS>

        <CONTACTS>
          {phone}
          <br />
          {email}
        </CONTACTS>

      </INFO_BOX>

      <MAP_BOX>
        <Map location={location} />
      </MAP_BOX>
    </CONTACT_BLOCK_CONTAINER>
  );
};

export default ContactBlock;