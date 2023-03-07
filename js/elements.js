//Variaveis
//Neste página, carpturamos os elementos HTML, e vamos armazenan-los em constantes e exportando-as para o arquivo principal.

// variaveis do display
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

// variaveis de controle
const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonPlus = document.querySelector('.plus')
const buttonMinus = document.querySelector('.minus')
const buttonLight = document.querySelector('.light')
const buttonDark = document.querySelector('.dark')

// variaveis dos sons
const buttonSoundForest = document.querySelector('.card-forest')
const buttonSoundRain = document.querySelector('.card-rain')
const buttonSoundCoffeeShop = document.querySelector('.card-coffeeShop')
const buttonSoundfireplace = document.querySelector('.card-fireplace')


const volForest = document.querySelector('#input-forest')
const volRain = document.querySelector('#input-rain')
const volCoffeeShop = document.querySelector('#input-coffeeShop')
const volFireplace = document.querySelector('#input-fireplace')


//Aqui pegaremos o elemento de background color e font color dos meus elementos svgs.
const bgColorForest = document.querySelector('.bg-color-forest')
const fontColorForest = document.querySelector('.font-color-forest')
const bgColorRain = document.querySelector('.bg-color-rain')
const fontColorRain = document.querySelector('.font-color-rain')
const bgColorCoffeeShop = document.querySelector('.bg-color-coffeeShop')
const fontColorCoffeeShop = document.querySelector('.font-color-coffeeShop')
const bgColorFireplace = document.querySelector('.bg-color-fireplace')
const fontColorFireplace = document.querySelector('.font-color-fireplace')

// Variaveis dos Svgs 
const svgForest = document.querySelector('.forest')
const svgRain = document.querySelector('.rain')
const svgCoffeeShop = document.querySelector('.coffeeShop')
const svgFireplace = document.querySelector('.fireplace')




export const elements =  { 
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
  bgColorForest,
  fontColorForest,
  bgColorRain,
  fontColorRain,
  bgColorCoffeeShop,
  fontColorCoffeeShop,
  bgColorFireplace,
  fontColorFireplace,
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
}