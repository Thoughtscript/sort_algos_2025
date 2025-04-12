'use strict'

/**
 * @Author - Adam In Tae Gerard
 *
 * Insertion Sort.
 */

const C = require('../config')

module.exports = {
    CUSTOM: arr => {
        if (C.FULL_LOGGING) console.log(`Starting array: ${arr} - Length: ${arr.length}`)

        let result = []

        const BEGIN = new Date()
        
        const inner = (arr, result = []) => {
            let lowest = arr[0], lowestIndex = 0
            const L = arr.length

            for (let i = 0; i < L; i++) {
                if (arr[i] < lowest) {
                    lowest = arr[i]
                    lowestIndex = i
                }
            }

            result.push(lowest)

            if (lowestIndex === 0) arr = arr.slice(lowestIndex, L)

            if (lowestIndex === L - 1) arr = arr.slice(0, lowestIndex)

            if (lowestIndex < L) {
                const first = arr.slice(0, lowestIndex)
                const second = arr.slice(lowestIndex + 1, L)
                arr = first.concat(second)
            }

            if (arr.length) return inner(arr, result)
            else return result
        }
        if (arr.length) result = inner(arr)

        const END = new Date()
        if (C.FULL_LOGGING) console.log(`Ending array: ${result} - Length: ${result.length} - Time: ${END - BEGIN}`)
        return result
    }
}