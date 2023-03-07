export default function () {
  const forestAudio = new Audio('./sounds/Floresta.wav')
  const rainAudio = new Audio('./sounds/Chuva.wav')
  const CoffeeShopAudio = new Audio('./sounds/Cafeteria.wav')
  const firePlaceAudio = new Audio ('./sounds/Lareira.wav')
  const buttonPressAudio = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true'
  )
  const alarm = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
  )

  forestAudio.loop = true
  rainAudio.loop = true
  CoffeeShopAudio.loop = true
  firePlaceAudio.loop = true

  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    alarm.play()
  }

  return {
    forestAudio,
    rainAudio,
    CoffeeShopAudio,
    firePlaceAudio,
    pressButton,
    timeEnd
  }
}