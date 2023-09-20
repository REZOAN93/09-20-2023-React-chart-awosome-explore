import { BsFillCheckCircleFill } from "react-icons/bs";
import PropTypes from "prop-types";

const Feature = ({ feature }) => {
  return (
    <div>
      <h1 className="flex items-center gap-2">
        <BsFillCheckCircleFill></BsFillCheckCircleFill>
        {feature}
      </h1>
    </div>
  );
};

Feature.propTypes = {
    feature: PropTypes.string,
};

export default Feature;
