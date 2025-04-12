
'use strict'

/**
 * @Author - Adam In Tae Gerard
 *
 * Test Data.
 */

const { MinHeap } = require('@datastructures-js/heap'),  C = require('../config')

const MAKE_EXPECTED = A => {
    const temp = new MinHeap()
    A.forEach(n => temp.push(n))
    const result = temp.sort()
    if (C.FULL_LOGGING) console.log(`Printing @datastructures-js/heap MinHeap.sort(): ${result} - will be in reverse order!`)
    return result
}

const GENERATE_CASE = () => {
    const L = Math.floor(Math.random() * 15)

    let A = []

    for (let i = 0; i < L; i++) {
        A.push(Math.floor(Math.random() * 100))
    }

    return A
}

const ASSERT_ARR_EQUALS = (A, T) => {
    const EX = MAKE_EXPECTED(T)
    
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
    TEST_RANDOM: (f, msg) => {
        const MSG = `========================= Testing ${msg} =========================`
        console.log(MSG)

        let successes = 0, failures = 0

        const RANDOM = []

        for (let i = 0; i < C.TEST_CASES; i++) {
            RANDOM.push(GENERATE_CASE())
        }

        for (let i = 0; i < RANDOM.length; i++) {
            const T = RANDOM[i]
            // Apparently @datastructures-js/heap sorts node values in reverse...
            // You can test this by enabling full logging and removing reverse()...
            if (!ASSERT_ARR_EQUALS(f([...T]).reverse(), [...T])) failures++
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
