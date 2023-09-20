import { useEffect } from "react";
import { useState } from "react";
import { ColorRing } from "react-loader-spinner";
import Details from "../Details";

const Home = () => {
  const [course, setCourse] = useState([]);
  const [loading,setLoading]=useState(true)
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCourse(data));
      setLoading(false)
  }, []); 
  return (
    <div className="w-10/12 mx-auto space-y-10">
      {
        loading&& <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
      }
      <h1 className=" text-4xl font-bold">Course: {course.length}</h1>
      <div className="grid grid-cols-3 gap-4">
        {course.map((na) => (
          <Details key={na.id} data={na}></Details>
        ))}
      </div>
    </div>
  );
};

export default Home;
