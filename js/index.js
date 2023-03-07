//Abaixo, estou importando as constantes:
import {elements} from "./elements.js"


let timerTimeOut


// Importando os sons
import Sounds from "./sounds.js"
const sound = Sounds()


import { Dark } from "./theme.js"

import { Timer } from "./timer.js"



const{
  minutesDisplay,
  secondsDisplay,
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonPlus,
  buttonMinus,
  buttonSoundForest,
  buttonSoundRain,
  buttonSoundCoffeeShop,
  buttonSoundfireplace,
  buttonLight,
  buttonDark,
  svgForest,
  svgRain,
  svgCoffeeShop,
  svgFireplace,
  volForest,
  volRain,
  volCoffeeShop,
  volFireplace,
} = elements




Dark({
  buttonLight,
  buttonDark,
})


const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControl
})

const Sound = Sounds()



function resetControl() {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
}

/* Button Timer */

buttonPlay.addEventListener('click', () => {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')

  sound.pressButton()

  timer.countdown()
})

buttonPause.addEventListener('click', () => {
  resetControl()
  sound.pressButton()
  timer.hold()
})

buttonStop.addEventListener('click', () => {
  resetControl()
  sound.pressButton()
  timer.stop()
})

buttonPlus.addEventListener('click', () => {
  sound.pressButton()
  timer.increment()
})

buttonMinus.addEventListener('click', () => {
  sound.pressButton()
  timer.decrement()
})








// Eventos dos cards: 
//Armazeno o retorno da minha função, nas variaveis de audio.
function togglePlay(sound){
  return sound.paused ? sound.play() : sound.pause()
}
buttonSoundForest.addEventListener('click', function () {
  togglePlay(sound.forestAudio)
  svgForest.classList.toggle('click-svg')
  buttonSoundForest.classList.toggle('selected')
  volForest.classList.toggle('click-input')
})
buttonSoundRain.addEventListener('click', function () {
  togglePlay(sound.rainAudio)
  svgRain.classList.toggle('click-svg')
  buttonSoundRain.classList.toggle('selected')
  volRain.classList.toggle('click-input')

})
buttonSoundCoffeeShop.addEventListener('click', function () {
  togglePlay(sound.CoffeeShopAudio)
  svgCoffeeShop.classList.toggle('click-svg')
  buttonSoundCoffeeShop.classList.toggle('selected')
  volCoffeeShop.classList.toggle('click-input')
})
buttonSoundfireplace.addEventListener('click', function () {
  togglePlay(sound.firePlaceAudio)
  svgFireplace.classList.toggle('click-svg')
  buttonSoundfireplace.classList.toggle('selected')
  volFireplace.classList.toggle('click-input')

})



/* Event Volume */



volForest.addEventListener('input', () => {
  sound.forestAudio.volume = volForest.value
})

volRain.addEventListener('input', () => {
  sound.rainAudio.volume = volRain.value
})

volCoffeeShop.addEventListener('input', () => {
  sound.CoffeeShopAudio.volume = volCoffeeShop.value
})

volFireplace.addEventListener('input', () => {
  sound.firePlaceAudio.volume = volFireplace.value
})







// Funções ------------------------------------------------------

/*
  A função soundCardOnOff() faz a seguinde verificação:
  - Se o audio passado no argumento, for false:
    * executa o audio.
    * muda a cor de fundo do botão
    * muda a cor da fonte do botão
    * atribui true para o audio
    * retorna o audio
  - Se o audio passado no argumento, for true:
    * Pausa o audio
    * muda a cor de fundo do botão de volta a cor original
    * muda a cor da fonte do botão de volta a cor original
    * atribui false para o audio
    * retorna o audio
*/




/*function hold() {
  clearTimeout(timerTimeOut)//o js vai procurar dentro do timeOUt o id referente, e vai pausar.
}

//A função resetTimer, faz o calback do função updateDisplay e da função clearTimeout(), que limpa o tempo limite que foi definido pela função setTimeout() antes disso.
function resetTimer() {
  updateDisplay(minutes, 0)
  clearTimeout(timerTimeOut)
}

//A função resetControls, remove o status hide, no botão play, e adiciona no pause.
function resetControls() {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
}

//A função play,adiciona o status hide, no botão play e remove do botão pause. 
function play() {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
}

//A função pause,adiciona o status hide, no botão pause e remove do botão play. 
function pause() {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
}
*/








