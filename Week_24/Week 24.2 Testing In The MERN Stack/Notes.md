Testing in Node.js + Express-

One of the core things to do while writing your code is testing it.
It’s highly ignored in most codebases but we’re going to try to get close to how testing happens in MERN stack codebases

Goal would be to understand-

1. How to test an express backend
2. Mocking, spying, jest, vitest
3. Unit tests vs integration tests vs end to end tests
4. How to integrate testing and coverage in CI/CD

Testing an express app-

Initialize a simple TS project

npm init -y
npx tsc --init

Change rootDir and outDir

"rootDir": "./src",
"outDir": "./dist",

Add dependencies

npm install --save-dev ts-jest @jest/globals @types/express
npm i supertest @types/supertest
npm install express

Initalize jest.config.ts

npx ts-jest config:init

Create src/index.ts

import express from "express";

export const app = express();
app.use(express.json());

app.post("/sum", (req, res) => {
const a = req.body.a;
const b = req.body.b;
const answer = a + b;

    res.json({
        answer
    })

});

Update package.json scripts

"test": "jest"

Add tests/sum.test.ts

import {describe, expect, test, it} from '@jest/globals';
import request from "supertest";
import { app } from "../index"

describe("POST /sum", () => {
it("should return the sum of two numbers", async () => {
const res = await request(app).post("/sum").send({
a: 1,
b: 2
});
expect(res.statusCode).toBe(200);
expect(res.body.answer).toBe(3);
});

      it("should return the sum of two negative numbers", async () => {
        const res = await request(app).post("/sum").send({
          a: -1,
          b: -2
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(-3);
      });

      it("should return the sum of two zero number", async () => {
        const res = await request(app).post("/sum").send({
          a: 0,
          b: 0
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(0);
      });

});

Update jest.config.js

/** @type {import('ts-jest').JestConfigWithTsJest} \*/
module.exports = {
preset: 'ts-jest',
testEnvironment: 'node',
testMatch: ["<rootDir>/src/tests/**/\*.ts"]
};
