const potteryArray = [];

export const makePottery = (shape, weight, height) => {
    const pottery = {
        shape: shape,
        weight: weight,
        height: height,
        id: potteryArray.length + 1
    };
    potteryArray.push(pottery)
    return pottery
}

