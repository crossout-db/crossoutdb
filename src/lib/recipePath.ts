export const createRecipePath = (recipePath: string, itemId: string | number): string => {
    let result = `${recipePath}_${itemId}`;
    if (result[0] === '_')
        return result.substring(1);
    return result;
}