'use strict'

/**
 * @Author - Adam In Tae Gerard
 *
 * Selection Sort.
 */

const C = require('../config')

module.exports = {
    CUSTOM: arr => {
        if (C.FULL_LOGGING) console.log(`Starting array: ${arr} - Length: ${arr.length}`)

        const BEGIN = new Date()

        const inner = (arr, lastIndex = 0) => {
            let lowest = arr[lastIndex], lowestIndex = lastIndex, flag = false
            for (let i = lastIndex; i < arr.length; i++) {
                if (arr[i] <= lowest) {
                    lowest = arr[i]
                    lowestIndex = i
                    flag = true
                }
            }

            if (flag) {
                const original = arr[lastIndex]
                arr[lastIndex] = lowest
                arr[lowestIndex] = original
                lastIndex++
                return inner(arr, lastIndex)
                
            } else return arr
        }

        let result = inner(arr)
        const END = new Date()
        if (C.FULL_LOGGING) console.log(`Ending array: ${result} - Length: ${result.length} - Time: ${END - BEGIN}`)
        return result
    }
}