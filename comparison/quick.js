'use strict'

/**
 * @Author - Adam In Tae Gerard
 *
 * Quick Sort.
 */

const C = require('../config')

module.exports = {
    /*

    The CUSTOM implementation far below is a scratch Quicksort 
    implementation using the immediately following as the primary 
    inspiration:

    def quicksort(arr):
        if len(arr) <= 1:
            return arr
        else:
            pivot = arr[len(arr) // 2]  # Choose the middle element as pivot
            left = [x for x in arr if x < pivot]
            middle = [x for x in arr if x == pivot]
            right = [x for x in arr if x > pivot]
            return quicksort(left) + middle + quicksort(right)

    my_array = [3, 6, 8, 10, 1, 2, 1]
    sorted_array = quicksort(my_array)
 
    Google indicates that the above is a common implementation of Quicksort in Python.

    GFG: https://www.geeksforgeeks.org/dsa/quick-sort-algorithm/ has what might be called a "purer" 
    in-place Quicksort but both are common implementation approaches.

    Quicksort has some flexibility in how the Pivot point is selected (GFG starts at the Right-most)
    and it's known that Last Element: "Selecting the last element of the sub-array as the pivot.
    Similar to the first element strategy, this can also lead to worst-case performance in specific scenarios." 
    (From the above.)

    As such, I've chosen the Middle Pivot which is known to not be the fastest technique but is typically 
    the most-balanced across scenarios.

    The Python approach above is more Space Complexity intensive than the GFG approach.

    */
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