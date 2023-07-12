import { describe, it } from "mocha";
import { sumOfFibonacciUpto } from "./main";
import { expect } from "chai";

describe("Problem 2", () => {
    it ("Sum of Even Fibonacci numbers upto 4 million", () => {
        expect(sumOfFibonacciUpto(4_000_000)).to.equal(4613732);
    })
});