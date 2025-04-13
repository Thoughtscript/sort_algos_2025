
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
    // https://github.com/datastructures-js/heap?tab=readme-ov-file#sort
    const result = temp.sort()
    if (C.FULL_LOGGING) console.log(`Printing @datastructures-js/heap MinHeap.sort(): ${result}!`)
    return result
}

const GENERATE_CASE = () => {
    const L = Math.floor(Math.random() * C.ARRAY_SIZE)

    let A = [], seen = {}

    // Disallow duplicates
    for (let i = 0; i < L; i++) {
        let N = Math.floor(Math.random() * C.MAX_VAL)
        while(seen[N]) {
            N = Math.floor(Math.random() * C.MAX_VAL)
        }
        A.push(N)
        seen[N] = true
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
    TEST_RANDOM_NO_DUPLICATES: (f, msg) => {
        const MSG = `========================= Testing ${msg} =========================`
        console.log(MSG)

        const TEST_START = new Date()

        let successes = 0, failures = 0

        const RANDOM = []

        for (let i = 0; i < C.TEST_CASES; i++) {
            RANDOM.push(GENERATE_CASE())
        }

        for (let i = 0; i < RANDOM.length; i++) {
            const T = RANDOM[i]
            // Apparently @datastructures-js/heap sorts using
            // something like "reverse" (right to left) inorder traversal...
            
            // Also, make Deep Copies everywhere...
            if (!ASSERT_ARR_EQUALS(f([...T]), [...T])) failures++
            else successes++
        }

        let END = ""
        for (let i = 0; i < MSG.length; i++) {
            END += "="
        }

        console.log(`SUCCESSES: ${successes}`)

        console.log(`FAILURES: ${failures}`)

        console.log(`TIME: ${new Date() - TEST_START}`)

        console.log(END + "\n")
    }
}
