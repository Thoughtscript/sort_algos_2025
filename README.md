# sort_algos_2025 

Review, refresh, optimizing, testing, validation, and tweaking common Sort Algos for fun and interview prep.

## Use

```bash
npm run tests
```

> Will run a number of tests as configured [here](./config.js). By default, `100,000` randomly generated tests. Should pass all of them.

> Please feel free to inspect the [Test Cases](./data/) and recommend suggestions or fixes if you see any! 

Setting the [Config](./config.js) to the following is useful to help with debugging/validating test cases:

```javascript
module.exports = {
    FULL_LOGGING: true,
    TEST_CASES: 100,
    ARRAY_SIZE: 100,
    MAX_VAL: 300
}
```

### Output

Should see:

```bash
$ npm run tests

> sort_algos_2025@1.0.0 tests
> npm i && node test_runner.js


up to date, audited 2 packages in 842ms

found 0 vulnerabilities
========================= Testing Comparison Sort: Quick Sort - Custom - O(n*log(n)) =========================
SUCCESSES: 100000
FAILURES: 0
TIME: 781
==============================================================================================================

========================= Testing Comparison Sort: Merge Sort - Custom - O(n*log(n)) =========================
SUCCESSES: 100000
FAILURES: 0
TIME: 821
==============================================================================================================

========================= Testing Comparison Sort: Bubble Sort - Custom - O(n²) =========================
SUCCESSES: 100000
FAILURES: 0
TIME: 2584
=========================================================================================================

========================= Testing Comparison Sort: Selection Sort - Custom - O(n²) =========================
SUCCESSES: 100000
FAILURES: 0
TIME: 685
============================================================================================================

========================= Testing Comparison Sort: Heap Sort - Custom - O(n*log(n)) =========================
SUCCESSES: 100000
FAILURES: 0
TIME: 1023
=============================================================================================================

========================= Testing Noncomparison Sort: Insertion Sort - Custom - O(n²) =========================
SUCCESSES: 100000
FAILURES: 0
TIME: 1455
===============================================================================================================

========================= Testing Noncomparison Sort: Frequency Sort - Custom Array Based - O(n + k) =========================
SUCCESSES: 100000
FAILURES: 0
TIME: 601
==============================================================================================================================

========================= Testing Noncomparison Sort: Frequency Sort - Custom Hash Map Based - O(n + k) =========================
SUCCESSES: 100000
FAILURES: 0
TIME: 726
=================================================================================================================================

========================= Testing Noncomparison Sort: Bucket Sort - Frequency - Varies =========================
SUCCESSES: 100000
FAILURES: 0
TIME: 1494
================================================================================================================

========================= Testing Noncomparison Sort: Bucket Sort - Insertion - Varies =========================
SUCCESSES: 100000
FAILURES: 0
TIME: 2443
================================================================================================================

Service shutting down: 0
```

> **Note**: `TIME` represents the entire overhead of the test suite not just the individual execution times (enable `FULL_LOGGING` to see those).

## Refresh and Review Comments

### Notes

1. Several prior variations of the algos container herein were Greedily coded (assuming only non-empty Arrays, etc.) or allowed certain shortcuts (`undefined` as a value, etc.):
   * All of the algos within here have been standardized to cover those common edge scenarios.
1. Some (**Frequency Sort**) algos remain Greedily coded for Positive Integers and will fail for Negative Values (being Array-indexed implementations).
1. Uses [@datastructures-js/heap](https://github.com/datastructures-js/heap) for generating some Heap test cases.
   * It's presently used to perform what's essentially a basic reverse sort as the aim of this tiny project is to verify common Sorting scenarios (not Heaps or Binary Search Tree constructions). Nothing fancy. 
      * I've still added some Binary Search Tree validation.
   * **Note**: `@datastructures-js/heap` will convert its generated values (specifically, `MinHeap.sort()`) into a Array but in "reverse" (Right-to-Left In-Order) order as described [here](./data/heap_helper.js)!
1. For now, my [Customized Heap implementation](./comparison/heap.js) has the modest aim to: 
     * Generate a sorted data structure.
     * Generate a descending order sort through In-Order traversal of that data structure.
       * Verifying the structure itself is responsible for the sort (not just the presorted Array).
     * The Algorithm I've written actually supports duplicate values (generating BST's of the Left Biased Perfectly Balanced variety) but is presently only validated against non-duplicated values here.
       * I'm a bit surprised by the sheer number of diverging approaches to Binary Search Trees with duplicate values:
         * [This site](https://visualgo.net/en/bst) for instance deduplicates Nodes (removing copies entirely - preferring annotations).
         * [This site](https://www.cs.usfca.edu/~galles/visualization/BST.html) rotates duplicate values to the Right when the duplicate is added to a Leaf Node. 
       * Perfectly Balanced Binary Search Trees will typically be "Left-Justified" balanced / Left Biased (and I've coded for that convention).
       * To avoid confusion, I've restricted test cases to non-duplicate values.  

### Big O

1. Acryonym **S.I.B.B.** - `O(n²)` - **Selection**, **Insertion**, **Bubble**, (Can be) **Bucket**
1. `O(n * log(n))` - **Merge**, **Quick**, **Heap**
1. `O(n + k)` - (Can be) **Bucket**, **Frequency**

### Comparison

1. **Selection**
1. **Merge**
1. **Quick**
1. **Heap**
1. **Bubble**

### Non-Comparison

1. **Bucket**
1. **Frequency**
1. **Insertion**