export { removeMovie } from "../reducers/MovieSlice";
import axios from "../../utils/axios";
import { loadMovie } from "../reducers/MovieSlice";

export const asyncLoadMovie = (id) => async (dispatch, getState) => {
  try {
    const dets = await axios.get(`/movie/${id}`);
    const externalId = await axios.get(`/movie/${id}/external_ids`);
    const recommendations = await axios.get(`/movie/${id}/recommendations`);
    const similar = await axios.get(`/movie/${id}}/similar`);
    const videos = await axios.get(`/movie/${id}}/videos`);
    const watchProvider = await axios.get(`/movie/${id}}/watch/providers`);
    const images = await axios.get(`/movie/${id}}/images`);
    const reviews = await axios.get(`/movie/${id}}/reviews`);
    const credits = await axios.get(`/movie/${id}}/credits`);

    const details = {
      dets: dets.data,
      externalId: externalId.data,
      recommendations: recommendations.data,
      similar: similar.data,
      videos: videos.data,
      watchProvider: watchProvider.data,
      images: images.data,
      reviews: reviews.data, // Added for storing movie reviews
      credits : credits.data
    };
    // console.log(details);
    dispatch(loadMovie(details));
  } catch (error) {
    console.log(error);
  }
};
