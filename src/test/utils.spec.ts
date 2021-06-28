import { strToNumberBitmap, numberToStrBitmap, getWhitePixel, generateNewArray, isEdgeNode, nodeNotVisited } from "../utils";

describe("unit test for strToNumberBitmap utility function", () => {
    it("should be defined", () => {
        expect(strToNumberBitmap).toBeDefined();
    });

    it("should convert the string bitmap to number bitmap", () => {
        const stringBitmap = "0001,0011,0110";
        const numberBitmap = [
            [0, 0, 0, 1],
            [0, 0, 1, 1],
            [0, 1, 1, 0]
        ];

        const result = strToNumberBitmap(stringBitmap);
        expect(result).toEqual(numberBitmap);
    });
});

describe("unit test for numberToStrBitmap utility function", () => {
    it("should be difined", () => {
        expect(numberToStrBitmap).toBeDefined();
    });

    it("should conver the number bitmap to string", () => {
        const numberBitmap = [
            [3, 2, 1, 0],
            [2, 1, 0, 0],
            [1, 0, 0, 1]
        ];
        const stringBitmap = `3 2 1 0
2 1 0 0
1 0 0 1`;

        const result = numberToStrBitmap(numberBitmap);
        expect(result).toEqual(stringBitmap);
    });
});

describe("unit test for getWhitePixel utility function", () => {
    it("should be defined", () => {
        expect(getWhitePixel).toBeDefined();
    });

    it("should generate a white pixed node", () => {
        const rowIndex = 0;
        const columnIndex = 3;
        const whitePixelNoed = [0, 3, 0];

        const result = getWhitePixel(rowIndex, columnIndex);

        expect(result).toEqual(whitePixelNoed);
    });
});

describe("unit test for generateNewArray utility function", () => {
    it("should be defined", () => {
        expect(generateNewArray).toBeDefined();
    });

    it("should generate a new array for a given size", () => {
        const size = 3;
        const newArr = [Infinity, Infinity, Infinity];

        const result = generateNewArray(size);

        expect(result).toEqual(newArr);
    });
});

describe("unit test for isEdgeNode utility function", () => {
    it("should be defined", () => {
        expect(isEdgeNode).toBeDefined();
    });

    it("should retrun true for edge node", () => {
        const currentRow = 1;
        const currentColumn = 3;
        const rows = 3;
        const columns = 4;

        const result = isEdgeNode(currentRow, currentColumn, rows, columns);

        expect(result).toEqual(true);
    });

    it("should return false for non edge node", () => {
        const currentRow = 0;
        const currentColumn = 4;
        const rows = 3;
        const columns = 4;

        const result = isEdgeNode(currentRow, currentColumn, rows, columns);

        expect(result).toEqual(false);
    });
});

describe("unit test for nodeNotVisited utility function", () => {
    it("should be defined", () => {
        expect(nodeNotVisited).toBeDefined();
    });

    it("should return true for not visited node", () => {
        const currentRow = 0;
        const currentColumn = 0;
        const bitmap = [
            [Infinity, 2, 1, 0],
            [2, 1, 0, 0],
            [1, 0, 0, 1]
        ];

        const result = nodeNotVisited(currentRow, currentColumn, bitmap);

        expect(result).toEqual(true);
    });

    it("should return false for visited node", () => {
        const currentRow = 0;
        const currentColumn = 0;
        const bitmap = [
            [3, 2, 1, 0],
            [2, 1, 0, 0],
            [1, 0, 0, 1]
        ];

        const result = nodeNotVisited(currentRow, currentColumn, bitmap);

        expect(result).toEqual(false);
    });
});
