import { useEffect, useState } from "react";
import Card from "../components/Card";
import FormField from "../components/FormField";
import Loader from "../components/Loader";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPost, setAllPost] = useState(null);
  return (
    <>
      <section className="max-w-7xl mx-auto">
        <div>
          <h1 className="font-extrabold text-[#222328] text-[32px]">
            The Community Showcase
          </h1>
          <p className="mt-2 text-[#666e75] text-[14px] max-w-[800px]">Browse through a collection of imaginative and visually stunning images generated by DALL-E AI</p>
        </div>
      </section>
    </>
  );
};

export default Home;
