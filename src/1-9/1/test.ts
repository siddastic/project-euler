import { describe, it } from "mocha";
import { MultiplesOf3And5 } from "./main";
import { expect } from "chai";

describe("Problem 1", () => {
    it("Sum of Multiples of 3 and 5 below 10", () => {
        expect(MultiplesOf3And5(10)).to.equal(23);
    });

    it("Sum of Multiples of 3 and 5 below 1000", () => {
        expect(MultiplesOf3And5(1000)).to.equal(233168);
    })
});