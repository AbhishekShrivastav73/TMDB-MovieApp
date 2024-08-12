import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Search from "./Partials/Search";
import Cards from "./Partials/Cards";
import Filter from "./Partials/Filter";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "../utils/axios";

function Person() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("popular");;
  const [page, setPage] = useState(1);
  const [Person, setPerson] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const getPerson = async () => {
    try {
      const response = await axios.get(`person/${category}`, {
        params: { page },
      });
      if (response.data.results.length > 0) {
        setPerson((prev) => [...prev, ...response.data.results]);
        setPage((prevPage) => prevPage + 1);
      } else {
        setHasMore(false); // No more results to fetch
      }
    } catch (error) {
      console.error(error);
    }
  };

  

  useEffect(() => {
    setPerson([]); // Clear previous data when category or duration changes
    setPage(1); // Reset page to 1
    setHasMore(true); // Reset hasMore to true
    getPerson(); // Fetch data for the new category and duration
  }, [category]);
  return (
    <div className="w-full min-h-screen relative p-4 tracking-tighter">
      <div className="flex flex-col md:flex-row w-full md:items-center gap-4 justify-between">
        <div className="flex items-center gap-4">
          <i
            onClick={() => navigate("/")}
            className="ri-arrow-left-line font-bold font-sans text-2xl cursor-pointer text-blue-600"
          ></i>
          <h1 className="text-3xl font-semibold flex items-end gap-4">Person  <span className="text-lg text-blue-600">| {category.toUpperCase()}</span></h1>
        </div>
        <Search />
      </div>
      
      <InfiniteScroll
        dataLength={Person.length}
        next={getPerson}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <div className="w-full min-h-screen flex flex-wrap gap-8 justify-center mt-5">
          {Person.map((data) => (
            <Cards key={data.id} data={data} title={'person'} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
    
  );
}

export default Person;
