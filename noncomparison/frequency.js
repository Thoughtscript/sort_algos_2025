'use strict'

/**
 * @Author - Adam In Tae Gerard
 *
 * Frequency Sort.
 */

const C = require('../config')

module.exports = {
    CUSTOM: arr => {
        let freq = [], result = [], max = arr[0]

        for (let i = 0; i < arr.length; i++) {
            if (max < arr[i]) max = arr[i]
        }

        for (let i = 0; i < max + 1; i++) {
            freq[i] = 0
        }

        if (C.FULL_LOGGING) console.log(`Starting array: ${arr} - Length: ${arr.length}`)
        const BEGIN = new Date()

        /** Algorithm begins */
        for (let i = 0; i < arr.length; i++) {
            freq[arr[i]] = freq[arr[i]] + 1
        }

        if (C.FULL_LOGGING) console.log(`Frequency array: ${freq}`, "bucketfreq")
        for (let i = 0; i < freq.length; i++) {
            for (let j = 0; j < freq[i]; j++) {
                result.push(i)
            }
        }

        const END = new Date()
        if (C.FULL_LOGGING) console.log(`Ending array: ${result} - Length: ${result.length} - Time: ${END - BEGIN}`)
        return result
    }
}