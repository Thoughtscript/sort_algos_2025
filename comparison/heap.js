'use strict'

/**
 * @Author - Adam In Tae Gerard
 *
 * Heap Sort.
 */

const C = require('../config')

class TreeNode {
    constructor(v, l = null, r = null) {
        this.val = v
        this.left = l
        this.right = r
    }
}

// https://www.codewars.com/kata/588534713472944a9e000029
// https://leetcode.com/problems/validate-binary-search-tree/
// https://www.geeksforgeeks.org/problems/check-for-bst/1
const isValid = (node, low, high) => {  
    if (!node) return true
    
    const V = node.val

    const LR = !((low != null && V <= low) || (high != null && V >= high))
    const CL = isValid(node.left, low, V)
    const CR = isValid(node.right, V, high)
    
    return LR && CL && CR
}

const isBST = root => isValid(root, null, null)

// Conversion helper to compare generated Data Structure values as Arrays...
const toArray = node => {
    let result = []

    const traverse = (node, result) => {
        if (node) {
            // "Reverse" Right to Left In-Order Traversal
            // Swapping or changing the order of these will cause test cases to fail...
            if (node.right) traverse(node.right, result)
            result.push(node.val)
            if (node.left) traverse(node.left, result)
        }
    }

    traverse(node, result)

    return result
}

module.exports = {
    // An implementation of mine that's been accepted on a few platforms in the past...

    // Sadly, several of the LeetCode problems have apparently broken since - one movitation for testing manually... 

    // Left Biased Perfectly Balanced - always prefers to place descendant into left node and allows duplicate values...
    CUSTOM: arr => {
        const findPivot = arr => arr[Math.floor(arr.length / 2)]
        const firstHalf = arr => arr.slice(0, Math.floor(arr.length / 2))
        const secondHalf = arr => arr.slice(Math.floor(arr.length / 2) + 1, arr.length)
        const recurse = A => {
            const L = A.length

            if (L === 0) return null
            if (L === 1) return new TreeNode(A[0])
            if (L === 2) return new TreeNode(A[1], new TreeNode(A[0]))
            if (L === 3) return new TreeNode(A[1], new TreeNode(A[0]), new TreeNode(A[2]))
            if (L > 3) {
                let node = new TreeNode(findPivot(A))
                node.left = recurse(firstHalf([...A]))
                node.right = recurse(secondHalf([...A]))
                return node
            }
        }

        const sortedArrayToBST = A => {
            const L = A.length
            if (L === 0) return null
            if (L === 1) return new TreeNode(A[0])
            if (L === 2) return new TreeNode(A[1], new TreeNode(A[0]))
            if (L === 3) return new TreeNode(A[1], new TreeNode(A[0]), new TreeNode(A[2]))
            if (L > 3) return recurse(A)
        }

        const BEGIN = new Date()
        if (C.FULL_LOGGING) console.log(`Starting array: ${arr} - Length: ${arr.length}`)

        arr.sort((a, b) => a - b)
        const BST = sortedArrayToBST(arr), is_valid = isBST(BST)

        if (C.FULL_LOGGING || !is_valid) console.log(`${!is_valid ? "Invalid BST constructed: " : ""}` + JSON.stringify(BST))

        const result = toArray(BST)

        const END = new Date()
        if (C.FULL_LOGGING) console.log(`Ending (inorder) array: ${result} - Length: ${result.length} - Time: ${END - BEGIN}`)
        return result
    }
}