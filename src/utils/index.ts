/**
 * Converts the string input to multidimentional array as number bitmap
 * @param input - string bitmap
 * @returns number bitmap array
 */
const strToNumberBitmap = (input: string): number[][] => {
    const rows: string[] = input.split(",");

    const numBitmap: number[][] = rows.map((_row) => {
        return _row.split("").map((_pixel) => +_pixel);
    });
    return numBitmap;
};

/**
 * Converts the number bitmap array to string output
 * @param input - number bitmap array
 * @returns string bitmap output
 */
const numberToStrBitmap = (input: number[][]): string => {
    return input.map((row) => row.join(" ")).join("\n");
};

/**
 * Creates a new pixel node for white pixels in the bitmap with default distance of '0'
 * @param rowIndex - position in the row
 * @param columnIndex - position in the column
 * @returns white pixel node
 */
const getWhitePixel = (rowIndex: number, columnIndex: number): number[] => {
    const INIT_DISTANCE = 0;
    return [rowIndex, columnIndex, INIT_DISTANCE];
};

/**
 * Creates a new array with given size that it filled with positive 'Infinity' values as defaults
 * @param arrSize - size of the array
 * @returns newly generated array
 */
const generateNewArray = (arrSize: number): number[] => {
    return new Array(arrSize).fill(Number.POSITIVE_INFINITY);
};

/**
 * Checks if a given node is within the arry boundry
 * @param currentRow - current row position
 * @param currentColumn - current row column
 * @param rows - no. of rows of the bitmap array
 * @param columns - no.of columns of the bitmap array
 * @returns 'true' if the given postion is within array boundry
 */
const isEdgeNode = (currentRow: number, currentColumn: number, rows: number, columns: number): boolean => {
    return currentRow >= 0 && currentRow < rows && currentColumn >= 0 && currentColumn < columns;
};

/**
 * Checks if a give node is not visited
 * @param currentRow - current row position
 * @param currentColumn - current column position
 * @param bitmap - resulting bitmap
 * @returns 'true' if the node is not visited
 */
const nodeNotVisited = (currentRow: number, currentColumn: number, bitmap: number[][]): boolean => {
    return bitmap[currentRow][currentColumn] === Number.POSITIVE_INFINITY;
};

export { strToNumberBitmap, numberToStrBitmap, getWhitePixel, generateNewArray, isEdgeNode, nodeNotVisited };
