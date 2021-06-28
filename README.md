<h1 align="center">Bitmap Coding Challenge</h1>

<p align="center">
  <img width="300" src="https://learnlearn.uk/binary/wp-content/uploads/sites/11/2017/01/smiley-300x273.png" alt="bitmap smily face">
</p>

***
### Problem
There is given a rectangular bitmap of size n*m. Each pixel of the bitmap is either white or
black, but at least one is white. The pixel in i-th line and j-th column is called the pixel `(i,j)`. The
distance between two pixels `p1=(i1,j1)` and `p2=(i2,j2)` is defined as `d(p1,p2)=|i1-i2|+|j1-j2|`.
<br>
Write a program which:
- Reads the description of the bitmap from the standard input.
- For each pixel, computes the distance to the nearest white.
- Writes the results to the standard output.
<br>

**Input**
<br>
The number of test cases `t` `(1≤t≤1000)` is in the first line of input, then `t` test cases follow
separated by an empty line. In the first line of each test case there is a pair of integer numbers
`n`, `m` separated by a single space, `1<=n <=182`, `1<=m<=182`. In each of the following `n` lines of
the test case exactly one zero-one word of length `m`, the description of one line of the bitmap, is
written. On the j-th position in the line `(i+1)`, `1 <= i <= n`, `1 <= j <= m`, is `'1'` if, and only if the pixel
`(i,j)` is white.

<br>

**Output**
<br>
In the i-th line for each test case, `1<=i<=n`, there should be written m integers `f(i,1),...,f(i,m)`
separated by single spaces, where `f(i,j)` is the distance from the pixel `(i,j)` to the nearest white
pixel. 
<br>
<br>
Example:
<br>

**Input:**
<br>

```
1
3 4
0001
0011
0110
```

<br>

**Output:**
<br>

```
3 2 1 0
2 1 0 0
1 0 0 1
```
***
<br>


### How to run the app locally
1. Run `npm install` to install all the required dependencies
2. Run `npm run start` to start the application
3. Alternatively, you can run `npm run start:dev` to start the application in watch mode

- Application will read the input given in the `src/data/input.txt` file, and will write the resulting output to the `src/data/output.txt` file

### Running unit tests  
Unit tests are written using [Jest](https://jestjs.io/)
1. Run `npm runttest` to run the unit tests
2. Alternatively, you can run `npm run test:watch` to run the test in watch mode
