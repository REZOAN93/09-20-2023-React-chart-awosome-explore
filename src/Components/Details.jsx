import Feature from "./Feature";
import PropTypes from "prop-types";

const Details = ({ data }) => {
  const { name, price, features } = data;

  return (
    <div className=" bg-lime-500 p-10 rounded-lg text-white flex flex-col space-y-4">
      <div className=" text-center space-y-3">
        <h1>
          <span className=" text-5xl font-bold">{price}</span>/mon
        </h1>
        <h1 className="text-2xl font-bold">{name}</h1>
      </div>
      <div className=" flex-grow">
        {features.map((na, idx) => (
          <Feature key={idx} feature={na}></Feature>
        ))}
      </div>
      <button className=" w-full rounded-lg  bg-indigo-800 p-2 font-extrabold hover:bg-orange-400">
        Booked
      </button>
    </div>
  );
};

Details.propTypes = {
  data: PropTypes.array,
};

export default Details;
