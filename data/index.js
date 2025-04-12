'use strict'

/**
 * @Author - Adam In Tae Gerard
 *
 * Test Data.
 */

const A_H = require('./array_helper'), H_H = require('./heap_helper')

module.exports = {
    /*
     * No NULL, undefined elements or Arrays.
     *
     * Integer values -Infinity to +Infinity.
     */
    NATURAL_NUM_TEST_CASES: (f, msg) => {
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
            [4, 2, 1],
            []
        ]
        
        A_H.TEST_SET(FIXED, f, msg)
    },

    /*
     * No NULL, undefined elements or Arrays.
     *
     * Integer values inclusive of 0 to +Infinity.
     */
    ORDINAL_TEST_CASES: (f, msg) => {
        const FIXED = [
            [55, 0, 0, 1, 4, 1, 3, 100, 300, 100],
            [10, 11, 1, 0, 1, 100, 111, 1, 1, 21, 31, 41, 51, 66, 5, 4],
            [1, 1, 2, 3, 3, 10, 100, 4, 2, 1, 1, 1, 0, 1, 3],
            [1, 1, 100, 4, 2, 1, 45, 5, 3, 1, 0, 1, 3],
            [4, 2, 1, 1, 1, 0, 0, 1, 3],
            [1],
            [0],
            [0,0],
            [0,0,0],
            [100, 99, 98, 97, 98, 100, 101],
            [100, 101, 100, 99, 98, 97, 98],
            [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 11, 2, 2, 2, 1, 1, 1, 2, 2, 1, 3, 1, 4, 0, 0],
            [4, 2, 1, 1, 1, 0, 1, 3],
            [4, 2, 1, 1, 1, 2, 1, 3],
            [0, 1, 3, 4, 2, 1, 1, 1],
            [4, 0, 1, 3, 2, 1, 1, 1],
            [4, 2, 1],
            []
        ]

        A_H.TEST_SET(FIXED, f, msg)
    },

        /*
     * No NULL, undefined elements or Arrays.
     *
     * Integer values inclusive of 0 to +Infinity.
     */
    HEAP_TEST_CASES: (f, msg) => {
        H_H.TEST_RANDOM(f, msg)
    }
}