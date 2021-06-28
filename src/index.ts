import { readFileSync, writeFileSync } from "fs";
import { strToNumberBitmap, numberToStrBitmap } from "./utils";
import calculateDistance from "./services/calculate-distance";

const INPUT_FILE = `./src/data/input.txt`;
const OUTPUT_FILE = `./src/data/output.txt`;

try {
    const input = readFileSync(INPUT_FILE, "utf-8");
    const testCasesSplit = input.trim().split("\n");

    const [testNo, size, ...bitmap] = testCasesSplit;
    const [rows, columns] = size.split(" ");

    const inputBitmap = strToNumberBitmap(bitmap.toString());
    const result = calculateDistance(+rows, +columns, inputBitmap);
    const outputBitmap = numberToStrBitmap(result);

    writeFileSync(OUTPUT_FILE, outputBitmap);
} catch (e) {
    console.error("[ERROR] Something went wrong, please try again...");
}
