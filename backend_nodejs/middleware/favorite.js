import { searchTracks } from "./searchTracks.js"

export const checkIdSong = (id, name) => {

    console.log(id, "...name:", name)
    searchTracks(name)
        .then( (data) => {
            console.log(data)
            let dataSongs = [];
            dataSongs = data.canciones
            for (i = 0 ; i <= dataSongs.length ; i++) {                       // The Array have the data of the band.
                if (dataSongs[i].cancion_id == id){  
                    console.log(dataSongs[i])              // Search de song in the Array
                    return dataSongs[i]
                }else {
                    return null
                }
         };
        })



}