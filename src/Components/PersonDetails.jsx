import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { asyncLoadPerson, removePerson } from "../Store/actions/PersonAction";
import Loader from "./Partials/Loader";
import Search from "./Partials/Search";

function PersonDetails() {
  const { id } = useParams();
  const results = useSelector((state) => state.person.data);
  console.log(results);
  const navigate = useNavigate()

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncLoadPerson(id));
    return () => {
      dispatch(removePerson());
    };
  }, [id]);
  return results ? (
    <div className="w-full min-h-screen text-white p-4">
      <div className=" z-10 flex p-4 flex-col md:flex-row w-full md:items-center gap-4 justify-between">
        <div className="flex items-center gap-4">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line font-bold font-sans text-2xl cursor-pointer text-blue-600"
          ></i>
          <h1 className="text-3xl font-semibold flex items-end gap-4">
            Cast Detail{" "}
          </h1>
        </div>
        <Search />
      </div>
      <div className="flex flex-col md:flex-row gap-5 " >
        <img
          className="w-full  md:w-64 rounded-xl"
          src={`https://image.tmdb.org/t/p/original/${results.data.profile_path}`}
          alt=""
        />
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl my-4 font-bold">{results.data.name}</h1>
          <p className="text-blue-500 font-semibold">Date of Birth: {results.data.birthday}</p>
          <p>{results.data.biography}</p>
          <div>
            <p className="font-semibold">Also Known as : </p>
            {results.data.also_known_as.map(function(res,idx){
              return <span key={idx}>{res}, </span>
            })}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
}

export default PersonDetails;
