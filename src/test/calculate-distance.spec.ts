import calculateDistance from "../services/calculate-distance";

describe("unit test for calculate-distance service", () => {
    it("should be defined", () => {
        expect(calculateDistance).toBeDefined();
    });
});

describe("unit tests for calculateDistance function", () => {
    const inputData = [
        {
            rows: 3,
            columns: 4,
            inputBitmap: [
                [0, 0, 0, 1],
                [0, 0, 1, 1],
                [0, 1, 1, 0]
            ],
            outputBitmap: [
                [3, 2, 1, 0],
                [2, 1, 0, 0],
                [1, 0, 0, 1]
            ]
        },
        {
            rows: 3,
            columns: 4,
            inputBitmap: [
                [0, 0, 0, 1, 0],
                [0, 0, 1, 1, 0],
                [0, 1, 1, 0]
            ],
            outputBitmap: [
                [3, 2, 1, 0],
                [2, 1, 0, 0],
                [1, 0, 0, 1]
            ]
        },
        {
            rows: 4,
            columns: 5,
            inputBitmap: [
                [0, 0, 0, 1, 0],
                [0, 0, 1, 1, 0],
                [0, 1, 1, 0, 0],
                [1, 1, 0, 0, 1]
            ],
            outputBitmap: [
                [3, 2, 1, 0, 1],
                [2, 1, 0, 0, 1],
                [1, 0, 0, 1, 1],
                [0, 0, 1, 1, 0]
            ]
        },
        {
            rows: 3,
            columns: 5,
            inputBitmap: [
                [0, 0, 0, 1, 1],
                [0, 1, 1, 0, 0],
                [0, 0, 0, 0, 0]
            ],
            outputBitmap: [
                [2, 1, 1, 0, 0],
                [1, 0, 0, 1, 1],
                [2, 1, 1, 2, 2]
            ]
        }
    ];

    inputData.forEach(({ rows, columns, inputBitmap, outputBitmap }) => {
        it(`should calculate output bitmap for ${rows}*${columns} bitmap`, () => {
            const result = calculateDistance(rows, columns, inputBitmap);
            expect(result).toEqual(outputBitmap);
        });
    });
});
