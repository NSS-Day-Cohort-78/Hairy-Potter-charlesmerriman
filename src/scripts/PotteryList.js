export const potteryList = (potteryForSale) => {
    let potteryForSaleHTML = ``
    for (const pottery of potteryForSale) {
        potteryForSaleHTML += `<section class="pottery" id="pottery--${pottery.id}">
            <h2 class="pottery__shape">${pottery.shape}</h2>
            <div class="pottery__properties">
                Item weighs ${pottery.weight} and is ${pottery.height} in height
            </div>
            <div class="pottery__price">Price is ${pottery.price}</div>
        </section>`
    }
    return potteryForSaleHTML
}