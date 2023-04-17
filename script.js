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
        nome: "Bleach",
        img: "/assets/bleach.jpg",
        trailer: "https://www.youtube.com/watch?v=XnWKHvYCeKk"
    },
    {
        nome: "Naruto Shippuden",
        img: "/assets/naruto.jpg",
        trailer: "https://www.youtube.com/watch?v=1_1VWAQb62Y"
    },
    {
        nome: "Boku no Hero",
        img: "/assets/boku-no-hero.jpg",
        trailer: "https://www.youtube.com/watch?v=RugjT3HYbes"
    },
    {
        nome: "Fate Stay Night",
        img: "/assets/fate-stay-night.jpg",
        trailer: "https://www.youtube.com/watch?v=spseKv7jtmY"
    },

]

window.onload = function () {

    
    for (let i = 0; i < lista.length; i++) {
       
        var item = `
        <a href= "${lista[i].trailer}" target="_blank">
             <div id="anime-item">
                 <img src= "${lista[i].img}">    
                 <p>${lista[i].nome}</p>     
             </div>
         </a>  `
 
         document.getElementById("animes").innerHTML += item;
    }    


}

login = function (){

    /*usuário teste*/
    var usuario_bd = "Teste";
    var senha_bd = "1234"

    var user = document.getElementById("user").value;
    var password = document.getElementById("password").value;

    if(user === usuario_bd && password === senha_bd){
        document.location.href = "home.html"
    }
    else{
        alert("Verifique o usuário ou senha");
      }

}


sair = function(){

    document.location.href = "index.html"
}