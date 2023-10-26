const $html = document.querySelector("html")
const $toggletheme = document.getElementById("#toggletheme")
const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)');

toggletheme.onclick = function(){
    $html.classList.toggle("dark-mode")
    if($html.classList.contains("dark-mode")){
        toggletheme.src = "img/light_mode.svg"
    }else{
        toggletheme.src = "'img/dark_mode.svg"
    }
}

if( prefersColorScheme.matches ) {
    $html.classList.toggle("dark-mode")
    if($html.classList.contains("dark-mode")){
        toggletheme.src = "img/light_mode.svg"
    }else{
        toggletheme.src = "img/dark_mode.svg"
    }
}
