import PropTypes from "prop-types";

const NavLink = ({ data }) => {
  const { path, name } = data;
  return (
    <div>
      <a href={path}>{name}</a>
    </div>
  );
};

NavLink.propTypes = {
  data: PropTypes.array,
};

export default NavLink;
