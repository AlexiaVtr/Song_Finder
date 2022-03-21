import {obj,canciones, precio, song} from '../models/Product.js';
import fetch from "node-fetch";

export const dataBand = [];

const myInit = {                  // To get the data with fetch in the function.
    method: 'GET',
    mode: 'cors',
    cache: 'default'
};

const toLower = (data) => {
  return data.toLowerCase
}

const deteleDuplicates = (data) => {          // To detele the duplicates of albums.       
  return data.filter((valor, indice) => {
    return data.indexOf(valor) === indice;
  });
};


const takeSong = (band) => {
  return new Promise((resolve) => {
    let s = {

    cancion_id: band.trackId,
    nombre_album: band.collectionName,
    nombre_tema: band.trackName,
    preview_url: band.previewUrl,
    fecha_lanzamiento: band.releaseDate,
    precio: {
      moneda: band.currency,
      valor: band.trackPrice
    }
    }
    dataBand.push(s)
    resolve(s)
    })
}

export const searchTracks = (requestBand) => {        // Get the information of the band.
  return new Promise((resolve) => {
  fetch(`https://itunes.apple.com/search?term={${requestBand}}`, myInit)
  .then((data) => data.json())
  .then((resp) => {


    const data = resp.results;
    let band = [];
    data.map((obj, key) => {
      band[key] = obj;
      });

    if (band.length > 0){ 
    for (let i = 0; i <= 25; i ++ ){                         // Prevent Return Exceeding Data Limit.
        const artist = band[i].artistName
        const album = band[i].collectionName
                
        if (toLower(artist) == toLower(requestBand)){  //Validate the artistName.
              obj.albumes.push(album)
              takeSong(band[i])
              .then( (song) => {
              obj.canciones.push(song);
        })};
          
            if ((obj.total_canciones -1) == i){        // In this way the response is returned even if the songs are less than the data limit.
              obj.albumes = deteleDuplicates(obj.albumes);  // The previous data of the object is replaced.
              obj.total_albumes = obj.albumes.length;        // The amount is counted here.
              obj.canciones.splice(0,1);                      // Delete the first empty object in de array.
              obj.total_canciones = dataBand.length  
              resolve(obj);
            }else {                                           // If exceed the limit of songs (25).
                obj.albumes = deteleDuplicates(obj.albumes);  
                obj.total_albumes = obj.albumes.length;         
                obj.canciones.splice(0,1);                     // Delete the first empty object in de array.
                obj.total_canciones = dataBand.length                        
                resolve(obj);
              } 
    }}       
}
)}
)};

