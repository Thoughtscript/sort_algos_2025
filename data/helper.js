
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

module.exports = {
    GENERATE_CASE: () => {
        const L = Math.floor(Math.random() * 100)

        let A = []

        for (let i = 0; i < L; i++) {
            A.push(Math.floor(Math.random() * 100))
        }
        
        return A
    },

    ASSERT_ARR_EQUALS: (A) => {
        const EX = MAKE_EXPECTED(A)

        for (let i = 0; i < A.length; i++) {
            if (A[i] === EX[i]) continue
            console.log(`Mismatch found: ${A[i]} and ${EX[i]} at index: ${i}!`)
            console.log(`Problematic Array: ${A}!`)
            return false
        }

        if (C.FULL_LOGGING) console.log(`Test case passed!`)
        return true
    }
}
