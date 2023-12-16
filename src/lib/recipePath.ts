export const createRecipePath = (recipePath: string, itemId: string | number): string => {
    if (recipePath === '')
        return itemId.toString();
    return `${recipePath}_${itemId}`;
}