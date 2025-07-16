// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firepottery } from "./Kiln.js"

// Make 5 pieces of pottery at the wheel
const mug = makePottery("mug", 5, 10)
const plate = makePottery("plate", 99999, 1)
const vase = makePottery("vase", 50, 50)
const bowl = makePottery("bowl", 5, 5)
const pitcher = makePottery("pitcher", 15, 15)

console.log(mug)
console.log(plate)
console.log(vase)
console.log(bowl)
console.log(pitcher)

const firedMug = firepottery(mug, 2300)
const firedPlate = firepottery(plate, 2000)
const firedVase = firepottery(vase, 1900)
const firedBowl = firepottery(bowl, 2100)
const firedPitcher = firepottery(pitcher, 2200)


console.log(firedMug)
console.log(firedPlate)
console.log(firedVase)
console.log(firedBowl)
console.log(firedPitcher)
// Fire each piece of pottery in the kiln


// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list

