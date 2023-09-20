import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

const Phone = () => {
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    // fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
    //   .then((res) => res.json())
    //   .then((data) => setPhones(data.data));
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phoneData = data.data.data;
        const phoneWithFakeData = phoneData.map((phone) => {
          const obj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
          };
          return obj;
        });
        setPhones(phoneWithFakeData);
      });
  }, []);

  console.log(phones);
  return (
    <div>
      <h1>HI {phones.length}</h1>
      
      <div>
      
        <BarChart width={1000} height={400} data={phones}>
          <Bar dataKey="price" fill="#8884d8" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </BarChart>
      
      </div>
    </div>
  );
};

export default Phone;
