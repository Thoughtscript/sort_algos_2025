'use strict'

/**
 * @Author - Adam In Tae Gerard
 *
 * Bubble Sort.
 */

const C = require('../config')

module.exports = {
    CUSTOM: arr => {
        if (C.FULL_LOGGING) console.log(`Starting array: ${arr} - Length: ${arr.length}`)

        const BEGIN = new Date()

        for (let i = 0; i < arr.length - 1; i) {
            if (arr[i] > arr[i + 1]) {
                const original = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = original
                i = 0
            } else i++
        }

        const END = new Date()
        if (C.FULL_LOGGING) console.log(`Ending array: ${arr} - Length: ${arr.length} - Time: ${END - BEGIN}`)
        return [...arr]
    }
}