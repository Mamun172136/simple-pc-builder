import Card2 from "@/components/shared/Card2";
import React from "react";
import RootLayout from "../../../components/Layouts/RootLayout";

const Ram2 = ({ motherboards }) => {
  return (
    <div>
      <h1 className="text-3xl p-4">Ram Product</h1>
      <div className=" p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {motherboards?.data.map((service) => (
          <Card2 key={service.id} service={service}></Card2>
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  // const res = await fetch("http://localhost:3000/api/news"); // internal API connected with mongoDB
  const res = await fetch("http://localhost:5000/rams"); // --> json server
  const data = await res.json();
  // console.log(data);
  return {
    props: {
      motherboards: data,
      // allNews: data.data, // when using internal API connected with mongoDB
    },
    // revalidate: 10,
  };
};

Ram2.getLayout = function getLayout(page) {
  return <RootLayout> {page} </RootLayout>;
};

export default Ram2;
