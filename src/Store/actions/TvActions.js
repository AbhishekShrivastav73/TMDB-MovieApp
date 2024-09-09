export {removeTv} from '../reducers/TvSlice';
import axios from "../../utils/axios";
import { loadTv } from "../reducers/TvSlice";


export const asyncLoadTv = (id) => async (dispatch, getState) => {
    try {
      const dets = await axios.get(`/tv/${id}`);
      const externalId = await axios.get(`/tv/${id}/external_ids`);
      const recommendations = await axios.get(`/tv/${id}/recommendations`);
      const similar = await axios.get(`/tv/${id}}/similar`);
      const videos = await axios.get(`/tv/${id}}/videos`);
      const watchProvider = await axios.get(`/tv/${id}}/watch/providers`);
      const images = await axios.get(`/tv/${id}}/images`);
      const reviews = await axios.get(`/tv/${id}}/reviews`);
      const credits = await axios.get(`/tv/${id}}/credits`);
  
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
      dispatch(loadTv(details));
    } catch (error) {
      console.log(error);
    }
  };
  