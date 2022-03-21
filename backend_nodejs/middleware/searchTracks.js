import {obj,canciones, precio, song} from '../models/Product.js';
import fetch from "node-fetch";


const myInit = {                  // To get the data with fetch in the function.
    method: 'GET',
    mode: 'cors',
    cache: 'default'
};





const deteleDuplicates = (data) => {          // To detele the duplicates of albums.
       
  return data.filter((valor, indice) => {
    return data.indexOf(valor) === indice;
  });
};




export const searchTracks = (requestBand) => {        // Get the information of the band.
  return new Promise((resolve) => {
  console.log(`https://itunes.apple.com/search?term={${requestBand}}`, myInit)
  fetch(`https://itunes.apple.com/search?term={${requestBand}}`, myInit)
  .then((data) => data.json())
  .then((resp) => {

    obj.total_canciones = resp.resultCount

      const data = resp.results;
      data.forEach((band, key) =>  {                   // Extract the elements of resp.

          if(key <= 24){                               // Prevent Return Exceeding Data Limit.
          obj.albumes.push(band.collectionName);

          song.cancion_id = band.trackId
          song.nombre_album = band.collectionName
          song.nombre_tema = band.trackName
          song.preview_url = band.previewUrl
          song.fecha_lanzamiento = band.releaseDate
          precio.moneda = band.currency
          precio.valor = band.trackPrice
          song.precio = precio

          obj.canciones.push(song)
          if ((obj.total_canciones -1) == key){        // In this way the response is returned even if the songs are less than the data limit.

            obj.albumes = deteleDuplicates(obj.albumes);  // The previous data of the object is replaced.
            obj.total_albumes = obj.albumes.length;        // The amount is counted here.  
            obj.canciones.splice(0,1);                     // Delete the first empty object in de array.
            resolve(obj);
          } 
          }else {

            if ((obj.total_canciones -1) == key){           // If exceed the limit of songs (25).

              obj.albumes = deteleDuplicates(obj.albumes);  
              obj.total_albumes = obj.albumes.length;         
              obj.canciones.splice(0,1);                     
              resolve(obj);
            } 
          };         
});
});
});
};
