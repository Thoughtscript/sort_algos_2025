'use strict'

/**
 * @Author - Adam In Tae Gerard
 *
 * Heap Sort.
 */

const C = require('../config')

class TreeNode {
    constructor(v, l, r) {
        this.val = v
        this.left = l
        this.right = r
    }
}

module.exports = {
    // An implementation of mine that's been accepted on a few platforms in the past...
    
    // Sadly, several of the LeetCode problems have apparently broken since - one movitation for testing manually... 
    CUSTOM: arr => {       
        const findPivot = arr => arr[Math.floor(arr.length / 2)]
        const firstHalf = arr => arr.slice(0, Math.floor(arr.length / 2))
        const secondHalf = arr => arr.slice(Math.floor(arr.length / 2) + 1, arr.length)
        const recurse = A => {
            const L = A.length
          
            if (L === 0) return null
            if (L === 1) return new TreeNode(A[0], null, null)
            if (L === 2) return new TreeNode(A[1], new TreeNode(A[0], null, null), null)
            if (L === 3) return new TreeNode(A[1], new TreeNode(A[0], null, null), new TreeNode(A[2], null, null))
            if (L > 3) {
                let node = new TreeNode(findPivot(A), null, null)
                node.left = recurse(firstHalf([...A]))
                node.right = recurse(secondHalf([...A]))
                return node
            }
        }

        // Conversion helper to compare generated Data Structure values as Arrays...
        const toArray = node => {
            let result = []

            const traverse = (node, result) => {
                if (node) {
                    if (node.left) traverse(node.left, result)
                    result.push(node.val)
                    if (node.right) traverse(node.right, result)
                }
            }

            traverse(node, result)

            return result
        }
        const sortedArrayToBST = A => {
            const L = A.length
            if (L === 0) return null
            if (L === 1) return new TreeNode(A[0], null, null)
            if (L === 2) return new TreeNode(A[1], new TreeNode(A[0], null, null), null)
            if (L === 3) return new TreeNode(A[1], new TreeNode(A[0], null, null), new TreeNode(A[2], null, null))
            if (L > 3) return recurse(A)
        }

        const BEGIN = new Date()
        if (C.FULL_LOGGING) console.log(`Starting array: ${arr} - Length: ${arr.length}`)

        arr.sort((a,b) => a - b)
        const result = toArray(sortedArrayToBST(arr))

        const END = new Date()
        if (C.FULL_LOGGING) console.log(`Ending array: ${result} - Length: ${result.length} - Time: ${END - BEGIN}`)
        return result
    }
}