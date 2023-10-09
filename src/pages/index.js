import FeaturedCard from "@/components/shared/FeaturedCard";
import Navbar from "@/components/shared/Navbar";
import Featured from "./featured/Featured";
import RootLayout from "../../components/Layouts/RootLayout";

const index = ({ motherboards }) => {
  console.log(motherboards);
  const data = [
    {
      _id: 1,
      title: "motherboard",
    },
    {
      _id: 2,
      title: "ram",
    },
    {
      _id: 3,
      title: "cpu",
    },
    {
      _id: 4,
      title: "powerSupplyUnit",
    },
    {
      _id: 5,
      title: "storage",
    },
    {
      _id: 6,
      title: "monitor",
    },
    {
      _id: 7,
      title: "others",
    },
  ];
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <Featured motherboards={motherboards}></Featured>

      <h1 className="text-3xl p-4">Category</h1>
      <div className=" p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((service) => (
          <FeaturedCard key={service._id} service={service}></FeaturedCard>
        ))}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  // const res = await fetch("http://localhost:3000/api/news"); // internal API connected with mongoDB
  // const res = await fetch("http://localhost:5000/featureds"); // --> json server
  if (typeof window === "undefined") {
    return {
      props: {
        motherboards: [],
      },
      // revalidate: 10,
    };
  }
  const res = await fetch(
    "https://simple-pc-builder-server-theta.vercel.app/featureds"
  ); // --> json server
  const data = await res.json();
  // console.log(data);
  return {
    props: {
      motherboards: data,
    },
    // revalidate: 10,
  };
};

index.getLayout = function getLayout(page) {
  return <RootLayout> {page} </RootLayout>;
};
export default index;
