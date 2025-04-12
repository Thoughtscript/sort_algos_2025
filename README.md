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
    TEST_CASES: 100
}
```

### Output

Should see:

```bash
$ npm run tests

> sort_algos_2025@1.0.0 tests
> node test_runner.js

========================= Testing Comparison Sort: Quick Sort - Custom - O(n*log(n)) =========================
SUCCESSES: 100000
FAILURES: 0
==============================================================================================================

========================= Testing Comparison Sort: Merge Sort - Custom - O(n*log(n)) =========================
SUCCESSES: 100000
FAILURES: 0
==============================================================================================================

========================= Testing Comparison Sort: Bubble Sort - Custom - O(n²) =========================
SUCCESSES: 100000
FAILURES: 0
=========================================================================================================

========================= Testing Comparison Sort: Selection Sort - Custom - O(n²) =========================
SUCCESSES: 100000
FAILURES: 0
============================================================================================================

========================= Testing Comparison Sort: Heap Sort - Custom - O(n*log(n)) =========================
SUCCESSES: 100000
FAILURES: 0
=============================================================================================================

========================= Testing Noncomparison Sort: Insertion Sort - Custom - O(n²) =========================
SUCCESSES: 100000
FAILURES: 0
===============================================================================================================

========================= Testing Noncomparison Sort: Frequency Sort - Custom Array Based - O(n + k) =========================
SUCCESSES: 100000
FAILURES: 0
==============================================================================================================================

========================= Testing Noncomparison Sort: Frequency Sort - Custom Hash Map Based - O(n + k) =========================
SUCCESSES: 100000
FAILURES: 0
=================================================================================================================================

========================= Testing Noncomparison Sort: Bucket Sort - Frequency - Varies =========================
SUCCESSES: 100000
FAILURES: 0
================================================================================================================

========================= Testing Noncomparison Sort: Bucket Sort - Insertion - Varies =========================
SUCCESSES: 100000
FAILURES: 0
================================================================================================================

Service shutting down: 0
```

## Refresh and Review Comments

### Notes

1. Several prior variations of the algos container herein were Greedily coded (assuming only non-empty Arrays, etc.) or allowed certain shortcuts (`undefined` as a value, etc.):
   * All of the algos within here have been standardized to cover those common edge scenarios.
2. Some (**Frequency Sort**) algos remain Greedily coded for Positive Integers and will fail for Negative Values (being Array-indexed implementations).
3. Uses [@datastructures-js/heap](https://github.com/datastructures-js/heap) for generating test cases.
   * **Note**: `@datastructures-js/heap` will convert its generated values (specifically, `MinHeap.sort()`) into a Array but in reverse order as described [here](./data/heap_helper.js)!

### Big O

1. Acryonym **S.I.B.B.** - `O(n²)` - **Selection**, **Insertion**, **Bubble**, (Can be) **Bucket**
2. `O(n * log(n))` - **Merge**, **Quick**, **Heap**
3. `O(n + k)` - (Can be) **Bucket**, **Frequency**

### Comparison

1. **Selection**
2. **Merge**
3. **Quick**
4. **Heap**
5. **Bubble**

### Non-Comparison

1. **Bucket**
2. **Frequency**
3. **Insertion**