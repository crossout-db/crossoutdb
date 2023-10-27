export const createRecipePath = (recipePath: string, itemId: string | number): string => {
    const result = `${recipePath}_${itemId}`;
    if (result[0] === '_')
        return result.substring(1);
    return result;
}