const displayPottery = []

export const toSellOrNotToSell = (pottery) => {
    if (pottery.cracked === false) {
        if (pottery.weight >= 6) {
            pottery.price = 40
        }
        if (pottery.weight < 6) {
            pottery.price = 20
        }
        displayPottery.push(pottery)
    }
}

function usePottery() {
    const potteryForSale = structuredClone(displayPottery);
    return potteryForSale
}

export { usePottery };