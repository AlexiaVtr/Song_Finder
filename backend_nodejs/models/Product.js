

export const precio = {
    valor: Number,
    moneda: String
};

export let canciones = [{
    cancion_id: Number,
    nombre_album: String,
    nombre_tema: String,
    preview_url: String,
    fecha_lanzamiento: String,
    precio: {
        valor: Number,
        moneda: String
    }
}];


export const obj = {
    total_albumes: Number,
    total_canciones: String,
    albumes: [],
    canciones: []
};

export const song = {
    cancion_id: Number,
    nombre_album: String,
    nombre_tema: String,
    preview_url: String,
    fecha_lanzamiento: String,
    precio 
};

export const fav = {
	nombre_banda: String,
    cancion_id: Number,
	usuario : String,
	ranking : String
}