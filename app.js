//Movement Animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');

//Items
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');



//Moving Animation Event
container.addEventListener('mousemove', (e) => //cada vez que movemos el mouse en el container  
{       //(e) porque vamos a run an event
    //console.log(e.pageX, e.pageY); con eso podemos ver las coordenadas x e y cuando el mouse está dentro del container
    let xAxis = (window.innerWidth / 2 - e.pageX) / 12; //lo dividimos por 2 para estar en el centro
    let yAxis = (window.innerHeight / 2 - e.pageY) / 12;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg`;
}); 

//Animate In
container.addEventListener('mouseenter', (e) =>
{
    card.style.transition = "none";
    //Popout
    title.style.transform = "translateZ(46px)";
    sneaker.style.transform = "translateZ(20px)";
    description.style.transform = "translateZ(40px)";
    purchase.style.transform = "translateZ(40px)";
    description.style.transform = "translateZ(30px)";
    sizes.style.transform = "translateZ(40px)";
})

//Animate Out
container.addEventListener('mouseleave', (e) =>
{
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    title.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
});
