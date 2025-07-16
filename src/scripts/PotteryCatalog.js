displayPottery = []

export const toSellOrNotToSell = (pottery) => {
    if (pottery.cracked = false) {
        if (pottery.weight >= 6) {
            pottery.price = 40
        }
        if (pottery.weight < 6) {
            pottery.price = 20
        }
        displayPottery.push(pottery)
    }
}

export const usePottery = displayPottery.map()