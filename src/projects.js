import fridgePic from './images/fridge-boss.jpeg'
import doggoPic from './images/doggo-daycare.png'

const fridge = {
  title: "Fridge Boss",
  image: fridgePic,
  description: "Fridge Boss a single page application built using React + Redux frontend and a Ruby on Rails API backend. Users can keep track of their ingredients and get recipes suggestions from selected ingredients and filters.",
  github: "https://github.com/Porzingod/fridge-boss",
  video: "https://youtu.be/scUg8TZ5dFo",
  live: "https://fridge-boss.herokuapp.com/"
}

const doggo = {
  title: "Doggo Daycare",
  image: doggoPic,
  description: "Doggo Daycare is a relaxing game built using vanilla Javascript and a Ruby on Rails API backend. Make sure to love and take care of your doggo!",
  github: "https://github.com/Porzingod/doggo_daycare",
  video: "https://youtu.be/Pi0hbxoUGb8",
  live: "https://porzingod.github.io/doggo_daycare/"
}

export const projects = [
  fridge,
  doggo
]
