
'use strict'

/**
 * @Author - Adam In Tae Gerard
 *
 * Test Data.
 */

const C = require('../config')

const MAKE_EXPECTED = A => {
    const R = [...A]
    R.sort((a, b) => a - b)
    return R
}

const GENERATE_CASE = () => {
    const L = Math.floor(Math.random() * 100)

    let A = []

    for (let i = 0; i < L; i++) {
        A.push(Math.floor(Math.random() * 100))
    }

    return A
}

const ASSERT_ARR_EQUALS = (A, T) => {
    const EX = MAKE_EXPECTED(T)
    
    // Check same length
    if (A.length !== T.length) {
        console.log(`Mismatch found - lengths: ${A.length} =/= ${T.length}!`)
        console.log(`Problematic Array Pair - A: ${A}!`)
        console.log(`Problematic Array Pair - EX: ${EX}!\n`)
        return false
    }

    for (let i = 0; i < A.length; i++) {
        // No Array or Element Value should ever be Undefined, Null, or NAN
        if (isNaN(A[i]) || isNaN(EX[i])) {
            console.log(`NAN found: ${A[i]} and ${EX[i]} at index: ${i}!`)
            console.log(`Problematic Array Pair - A: ${A}!`)
            console.log(`Problematic Array Pair - EX: ${EX}!\n`)
            return false
        }

        // Check same value by index
        if (A[i] === EX[i]) continue
        console.log(`Mismatch found: ${A[i]} and ${EX[i]} at index: ${i}!`)
        console.log(`Problematic Array Pair - A: ${A}!`)
        console.log(`Problematic Array Pair - EX: ${EX}!\n`)
        return false
    }

    if (C.FULL_LOGGING) console.log(`Test case passed!\n`)
    return true
}

module.exports = {
    TEST_SET: (FIXED, f, msg) => {
        const MSG = `========================= Testing ${msg} =========================`
        console.log(MSG)

        let successes = 0, failures = 0

        const RANDOM = []

        for (let i = 0; i < C.TEST_CASES - FIXED.length; i++) {
            RANDOM.push(GENERATE_CASE())
        }

        for (let i = 0; i < FIXED.length; i++) {
            const T = FIXED[i]
            if (!ASSERT_ARR_EQUALS(f([...T]), [...T])) failures++
            else successes++
        }

        for (let i = 0; i < RANDOM.length; i++) {
            const T = RANDOM[i]
            if (!ASSERT_ARR_EQUALS(f([...T]), [...T])) failures++
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
