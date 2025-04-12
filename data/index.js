'use strict'

/**
 * @Author - Adam In Tae Gerard
 *
 * Test Data.
 */

const H = require('./helper')

module.exports = {
    TEST_CASES: (f, msg) => {
        const MSG = `========================= Testing ${msg} =========================`
        console.log(MSG)

        let successes = 0, failures = 0

        const FIXED = [
            [-55, 0, 0, 1, 4, 1, 3, -100, -300, 100],
            [10, 11, 1, 0, 1, 100, 111, 1, 1, 21, 31, 41, 51, 66, 5, 4],
            [-1, 1, 2, 3, 3, 10, 100, 4, 2, 1, 1, 1, 0, -1, 3],
            [-1, 1, 100, 4, 2, 1, 45, 5, 3, 1, 0, -1, 3],
            [4, 2, 1, 1, 1, 0, 0, -1, 3],
            [1],
            [0],
            [0,0],
            [0,0,0],
            [-100, -99, -98, -97, -98, 100, 101],
            [100, 101, -100, -99, -98, -97, -98],
            [0, 0, 0, 0, 1, 1, 1, 1, 1, -1, 11, 2, 2, 2, 1, 1, 1, 2, 2, 1, 3, 1, -4, 0, 0],
            [4, 2, 1, 1, 1, 0, -1, 3],
            [4, 2, 1, 1, 1, 2, -1, 3],
            [0, -1, 3, 4, 2, 1, 1, 1],
            [4, 0, -1, 3, 2, 1, 1, 1],
            [4, 2, 1]
        ]

        const RANDOM = [
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE(),
            H.GENERATE_CASE()
        ]

        for (let i = 0; i < FIXED.length; i++) {
            const T = FIXED[i]
            if (!H.ASSERT_ARR_EQUALS(f(T))) failures++
            else successes++
        }

        for (let i = 0; i < RANDOM.length; i++) {
            const T = RANDOM[i]
            if (!H.ASSERT_ARR_EQUALS(f(T))) failures++
            else successes++
        }

        let END = ""
        for (let i = 0; i < MSG.length; i++) {
            END += "="
        }

        console.log(`SUCCESSES: ${successes}`)

        console.log(`FAILURES: ${failures}`)

        console.log(END + "\n")
    }
}