'use strict'

/**
 * @Author - Adam In Tae Gerard
 *
 * Merge Sort.
 */

const C = require('../config')

module.exports = {
    CUSTOM: arr => {
        const BEGIN = new Date()
        if (C.FULL_LOGGING) console.log(`Starting array: ${arr} - Length: ${arr.length}`)

        const merge = (a, b) => {
            let i = 0, j = 0, results = []

            while (i < a.length && j < b.length) {
                if (a[i] < b[j]) {
                    results.push(a[i])
                    i++

                } else {
                    results.push(b[j])
                    j++
                }
            }

            while (i < a.length) {
                results.push(a[i])
                i++
            }

            while (j < b.length) {
                results.push(b[j])
                j++
            }

            return results
        }

        const innerMerge = arr => {
            if (arr.length <= 1) return arr
            const MID = Math.floor(arr.length / 2)
            const LEFT = innerMerge(arr.slice(0, MID))
            const RIGHT = innerMerge(arr.slice(MID))
            return merge(LEFT, RIGHT)
        }

        const result = innerMerge(arr)

        const END = new Date()
        if (C.FULL_LOGGING) console.log(`Ending array: ${result} - Length: ${result.length} - Time: ${END - BEGIN}`)
        return result
    }
}