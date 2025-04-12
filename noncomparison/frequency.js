'use strict'

/**
 * @Author - Adam In Tae Gerard
 *
 * Frequency Sort.
 */

const C = require('../config')

module.exports = {
    CUSTOM_ARRAY_BASED: arr => {
        let freq = [], result = [], max = arr[0]

        for (let i = 0; i < arr.length; i++) {
            if (max < arr[i]) max = arr[i]
        }

        for (let i = 0; i < max + 1; i++) {
            freq[i] = 0
        }

        if (C.FULL_LOGGING) console.log(`Starting array: ${arr} - Length: ${arr.length}`)
        const BEGIN = new Date()

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
    },

    CUSTOM_HM_BASED: arr => {
        let pos_freq = {}, neg_freq = {}, pos = [], negs = []

        for (let i = 0; i < arr.length; i++) {
            let K = arr[i]

            if (K < 0) {
                K *= -1
                if (neg_freq[K] === undefined) neg_freq[K] = 0
                neg_freq[K]++

            } else {
                if (pos_freq[K] === undefined) pos_freq[K] = 0
                pos_freq[K]++

            }
        }

        if (C.FULL_LOGGING) console.log(`Starting array: ${arr} - Length: ${arr.length}`)
        const BEGIN = new Date()
        if (C.FULL_LOGGING) console.log(`Frequency arrays: ${JSON.stringify(neg_freq)}`, "neg_freq", JSON.stringify(pos_freq), "pos_freq")
        
            const O_K_PF = Object.keys(pos_freq)
        for (let i = 0; i < O_K_PF.length; i++) {
            const K = O_K_PF[i]

            for (let j = 0; j < pos_freq[K]; j++) { 
                pos.push(parseInt(K)) 
            }
        }
        const O_K_NF = Object.keys(neg_freq)
        for (let i = O_K_NF.length - 1; i >= 0; i--) {
            const K = O_K_NF[i]

            for (let j = 0; j < neg_freq[K]; j++) { 
                negs.push(parseInt(K) * -1) 
            }
        }
        const result = [...negs, ...pos]

        const END = new Date()
        if (C.FULL_LOGGING) console.log(`Ending array: ${result} - Length: ${result.length} - Time: ${END - BEGIN}`)
        return result
    }
}