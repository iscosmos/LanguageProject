// This is an empty file
// There is nothing here.
// Its only here so the project shows up as TypeScript

// I will be adding more boilerplate here just in case.

// Path: src\index.ts
// Path: src\calculate.ts
// Path: src\assets\data.ts

// I have provided the fibonacci sequance function below
// This is of no use to this project but once again, due to 
// Compilation of typescript, this project shows up as JS due to added boilerplate.

const fib = (n: number): number => {
    if (n <= 1) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}
