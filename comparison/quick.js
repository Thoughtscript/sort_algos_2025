'use strict'

/**
 * @Author - Adam In Tae Gerard
 *
 * Quick Sort.
 */

const C = require('../config')

module.exports = {
    CUSTOM: arr => {
        let result = []
        if (C.FULL_LOGGING) console.log(`Starting array: ${arr} - Length: ${arr.length}`)
        const BEGIN = new Date()

        const inner = a => {
            let l = [], r = []

            const P = Math.floor(a.length / 2)

            for (let i = 0; i < a.length; i++) {
                if (i === P) continue
                const N = a[i]

                // Skips Partition and Swap
                // Doesn't use Swap but Push
                if (N < a[P]) l.push(N)
                else r.push(N)
            }

            if (l.length >= 2) l = inner(l)
            if (r.length >= 2) r = inner(r)
            return [...l, a[P], ...r]
        }
        if (arr.length) result = inner(arr)

        const END = new Date()
        if (C.FULL_LOGGING) console.log(`Ending array: ${result} - Length: ${result.length} - Time: ${END - BEGIN}`)
        return result
    }
}