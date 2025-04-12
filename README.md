# sort_algos_2025 

Review, refresh, optimizing, testing, validation, and tweaking common Sort Algos for fun and interview prep.

## Use

```bash
npm run tests
```

### Output

Should see:

```bash
$ npm run tests

> sort_algos_2025@1.0.0 tests
> node test_runner.js

========================= Testing Comparison Sort: Quick Sort - Custom - O(n*log(n)) =========================
SUCCESSES: 100
FAILURES: 0
==============================================================================================================

========================= Testing Comparison Sort: Merge Sort - Custom - O(n*log(n)) =========================
SUCCESSES: 100
FAILURES: 0
==============================================================================================================

========================= Testing Comparison Sort: Bubble Sort - Custom - O(n²) =========================
SUCCESSES: 100
FAILURES: 0
=========================================================================================================

========================= Testing Comparison Sort: Selection Sort - Custom - O(n²) =========================
SUCCESSES: 100
FAILURES: 0
============================================================================================================

========================= Testing Noncomparison Sort: Insertion Sort - Custom - O(n²) =========================
SUCCESSES: 100
FAILURES: 0
===============================================================================================================

========================= Testing Noncomparison Sort: Frequency Sort - Custom - O(n + k) =========================
SUCCESSES: 100
FAILURES: 0
==================================================================================================================

========================= Testing Noncomparison Sort: Bucket Sort - Frequency - Varies =========================
SUCCESSES: 100
FAILURES: 0
================================================================================================================

Service shutting down: 0
```

## Refresh and Review Comments

Big O:

1. Acryonym **S.I.B.B.** - `O(n²)` - **Selection**, **Insertion**, **Bubble**, (Can be) **Bucket**
2. `O(n * log(n))` - **Merge**, **Quick**, **Heap**
3. `O(n + k)` - (Can be) **Bucket**, **Frequency**

Comparison:

1. **Selection**
2. **Merge**
3. **Quick**
4. **Heap**
5. **Bubble**

Non-Comparison:

1. **Bucket**
2. **Frequency**
3. **Insertion**