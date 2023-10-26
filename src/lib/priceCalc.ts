export function calculateProfit(sellPrice: number, buyPrice: number, marketFeePercent: number): number {
    return sellPrice - buyPrice - sellPrice * marketFeePercent / 100;
}

export function calculateROI(sellPrice: number, buyPrice: number, marketFeePercent: number): number {
    return calculateProfit(sellPrice, buyPrice, marketFeePercent) / buyPrice;
}

export function calculateFloatPrice(price: number) {
    return price / 100;
}