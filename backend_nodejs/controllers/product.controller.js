import { checkIdSong } from "../middleware/favorite.js";
import { searchTracks, dataBand } from "../middleware/searchTracks.js";
import {fav, song} from '../models/Product.js'  // To persist var information.

//Handlers:


export const newRequest = async (req, res) => {
  try{
  return new Promise((resolve) => {

    searchTracks(req)                                 // The data search is performed.
      .then( result => {
        resolve(result)
      });
})
}catch (e) {
    console.log(e)
    res.status(400).json();
}};



export const newRequestFav = async (req, res) => {
  try {
    let favoriteSong = song;                             //Save favorite Song. 
    let data = fav;
    data = req.body                         
    console.log(data.cancion_id)
    favoriteSong = checkIdSong(data.cancion_id, data.nombre_banda)
      if ( favoriteSong != null){                                 // If exist save & return
      res.json(favoriteSong)

      }else{

      res.json(null);                                     // If not, retorn null
      }
      } catch (e) {
    console.log(e)
    res.status(400).json();
  }};
