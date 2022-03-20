import {obj,canciones, precio} from '../models/Product.js';
import fetch from "node-fetch";


 
const myInit = {                  // To get the data with fetch in the Handler function.
    method: 'GET',
    mode: 'cors',
    cache: 'default'
};


//Functions:


const deleteData = (data) => {            // Delete var data.
  data.forEach((elem, key) => {
    data.splice(key,1)
  })
};




const deteleDuplicates = (data) => {          // To detele the duplicates of albums.
       
  return data.filter((valor, indice) => {
    return data.indexOf(valor) === indice;
  });
};




const searchTracks = (requestBand) => {        // Get the information of the band.
  return new Promise((resolve) => {
  console.log(`https://itunes.apple.com/search?term={${requestBand}}`, myInit)
  fetch(`https://itunes.apple.com/search?term={${requestBand}}`, myInit)
  .then((data) => data.json())
  .then((resp) => {

    obj.total_canciones = resp.resultCount

      const data = resp.results
      data.forEach((band, key) =>  {                   // Extract the elements of resp.

          if(key <= 24){                               // Prevent Return Exceeding Data Limit.
          obj.albumes.push(band.collectionName);
          obj.canciones.push(
          canciones.cancion_id = band.trackId,
          canciones.nombre_album = band.collectionName,
          canciones.nombre_tema = band.trackName,
          canciones.preview_url = band.previewUrl,
          canciones.fecha_lanzamiento = band.releaseDate,
          precio.moneda = band.currency,
          precio.valor = band.trackPrice
          )

          if ((obj.total_canciones -1) == key){        // In this way the response is returned even if the songs are less than the data limit.

            obj.albumes = deteleDuplicates(obj.albumes)  // The previous data of the object is replaced.
            obj.total_albumes = obj.albumes.length        // The amount is counted here.  
            resolve(obj)
          } 
          }         
})
})
})
};


////Handler:


export const newRequest = async (req, res) => {
  try {
    const data = req.body;
    const request = data.groupName;

//    deleteData(obj);                                 // Empty the array.

    searchTracks(request)                                 // The data search is performed.
      .then( result => {
        const bandData = result
        console.log(bandData.total_albumes)
      })


    res.status(200).json({ msg: 'OK' })
  } catch (e) {
    console.log(e)
    res.status(400).json({ msg: 'Error when making request' });
  }
};



export const getStatus = async (req, res) => {
      const json = 'I am running!';
      res.json(json);
}