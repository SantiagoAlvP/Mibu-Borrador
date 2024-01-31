// footer_deploy.js
const d = document;
const w = window;
const $footer = d.querySelector(".footer")
let mouseY;

/*
let posCursorX,posCusorY

export default function logKey() {

    d.addEventListener("mousemove", (event) => {
        cursorP(event);

        console.log(posCusorY, window.scrollY);

        if(posCusorY > 870 && window.scrollY >= 10){
            $footer.classList.add("is-active")
        }else{
            $footer.classList.remove("is-active")
        }

    });
      
    w.addEventListener('scroll', (event) => {
        if(window.scrollY < 10){
            $footer.classList.add("is-active")
        }else{
            $footer.classList.remove("is-active")
        }
    });

}

function cursorP (event){
    posCursorX = event.clientX
    posCusorY = event.clientY
}*/



export default function logKey() {

    function handleScroll() {
        console.log('Scrolling:', window.scrollY);
        if(window.scrollY < 10){
            $footer.classList.add("is-active")
        }else{
            $footer.classList.remove("is-active")
        }
    }
    
    function handleMouseMove(event) {

        var cursorY = event.clientY; // Obtener la posición Y del cursor

        var visibleHeight = window.innerHeight; // Altura visible en la ventana del navegador

        var bottomThreshold = 80; // Umbral inferior para considerar que el cursor está en la parte inferior

        console.log(cursorY,">=",(visibleHeight - bottomThreshold));

        if(cursorY >= (visibleHeight - bottomThreshold) && window.scrollY >= 10){
            $footer.classList.add("is-active")
        }

        if(cursorY < (visibleHeight - bottomThreshold) && window.scrollY >= 10){
            $footer.classList.remove("is-active")
        }
    }
    
    // Agrega los oyentes de eventos
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

}
