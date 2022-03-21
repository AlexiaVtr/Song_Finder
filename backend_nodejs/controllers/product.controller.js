import { searchTracks } from "../middleware/searchTracks.js";
import { obj } from "../models/Product.js";

 


//Handler:


export const newRequest = async (req, res) => {
  return new Promise((resolve) => {

    searchTracks(req)                                 // The data search is performed.
      .then( result => {
        resolve(result)
      });

})};



export const getStatus = async (req, res) => {
      const response = 'I am running!';
      return response
}