var lista = [
    {
        nome: "Attack on Titan",
        img: "/assets/attack-on-titan.jpg",
        trailer: "https://www.youtube.com/watch?v=hb-mo0URZBw"
    },
    {
        nome: "Demon Slayer",
        img: "/assets/kimetsu-3-temporada-poster.jpg",
        trailer: "https://www.youtube.com/watch?v=YhrA6hjQbTw"
    },
    {
        nome: "Attack on Titan",
        img: "/assets/attack-on-titan.jpg",
        trailer: "https://www.youtube.com/watch?v=hb-mo0URZBw"
    },
    {
        nome: "Demon Slayer",
        img: "/assets/kimetsu-3-temporada-poster.jpg",
        trailer: "https://www.youtube.com/watch?v=YhrA6hjQbTw"
    },
    {
        nome: "Attack on Titan",
        img: "/assets/attack-on-titan.jpg",
        trailer: "https://www.youtube.com/watch?v=hb-mo0URZBw"
    },
    {
        nome: "Demon Slayer",
        img: "/assets/kimetsu-3-temporada-poster.jpg",
        trailer: "https://www.youtube.com/watch?v=YhrA6hjQbTw"
    },

]

window.onload = function () {

    for (let i = 0; i < lista.length; i++) {
       
        var item = `
        <a href= "${lista[i].trailer}">
             <div id="anime-item">
                 <img src= "${lista[i].img}">    
                 <p>${lista[i].nome}</p>     
             </div>
         </a>  `
 
         document.getElementById("animes").innerHTML += item;
    }    
}


