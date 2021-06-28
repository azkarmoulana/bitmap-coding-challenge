import { getWhitePixel, generateNewArray, isEdgeNode, nodeNotVisited } from "../utils";

const DX = [-1, 1, 0, 0];
const DY = [0, 0, 1, -1];

const calculateDistance = (rows: number, columns: number, bitmap: number[][]): number[][] => {
    const whitePixelNodeQueue: number[][] = [];
    bitmap.forEach((row: number[], rowIndex: number) => {
        return row.forEach((pixel: number, columnIndex: number) => {
            if (pixel === 1) {
                whitePixelNodeQueue.push(getWhitePixel(rowIndex, columnIndex));
            }
        });
    });

    const resultBitmap: number[][] = generateNewArray(rows).map((_) => generateNewArray(columns));

    const queueLength: number = whitePixelNodeQueue.length;
    while (queueLength > 0 && whitePixelNodeQueue[0]) {
        const currentPixelNode = whitePixelNodeQueue[0];
        const [rowIndex, columnIndex, distance] = currentPixelNode;

        if (distance < resultBitmap[rowIndex][columnIndex]) {
            resultBitmap[rowIndex][columnIndex] = distance;
        }

        for (let directionIndex = 0; directionIndex <= rows; ++directionIndex) {
            const newRowIndex = rowIndex + DX[directionIndex];
            const newColumnIndex = columnIndex + DY[directionIndex];

            if (isEdgeNode(newRowIndex, newColumnIndex, rows, columns) && nodeNotVisited(newRowIndex, newColumnIndex, resultBitmap)) {
                resultBitmap[newRowIndex][newColumnIndex] = distance + 1;
                whitePixelNodeQueue.push([newRowIndex, newColumnIndex, distance + 1]);
            }
        }

        whitePixelNodeQueue.shift();
    }

    return resultBitmap;
};

export default calculateDistance;
