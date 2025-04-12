'use strict'

/**
 * @Author - Adam In Tae Gerard
 *
 * Test Runner.
 */

const D = require('./data')

try {
  process.on('warning', warning => { console.error(`Warning encountered: ${warning}`) })
  process.on('unhandledRejection', rej => { console.error(`Unhandled Rejection override: ${rej}`) })
  process.on('uncaughtException', exception => { console.error(`Error encountered: ${exception}`) })
  process.on('exit', msg => { console.log(`Service shutting down: ${msg}`) })

  D.NATURAL_NUM_TEST_CASES(require('./comparison/quick').CUSTOM, 'Comparison Sort: Quick Sort - Custom - O(n*log(n))')
  D.NATURAL_NUM_TEST_CASES(require('./comparison/merge').CUSTOM, 'Comparison Sort: Merge Sort - Custom - O(n*log(n))')
  D.NATURAL_NUM_TEST_CASES(require('./comparison/bubble').CUSTOM, 'Comparison Sort: Bubble Sort - Custom - O(n²)')
  D.NATURAL_NUM_TEST_CASES(require('./comparison/selection').CUSTOM, 'Comparison Sort: Selection Sort - Custom - O(n²)')
  D.HEAP_TEST_CASES(require('./comparison/heap').CUSTOM, 'Comparison Sort: Heap Sort - Custom - O(n*log(n))')

  D.NATURAL_NUM_TEST_CASES(require('./noncomparison/insertion').CUSTOM, 'Noncomparison Sort: Insertion Sort - Custom - O(n²)')
  D.ORDINAL_TEST_CASES(require('./noncomparison/frequency').CUSTOM_ARRAY_BASED, 'Noncomparison Sort: Frequency Sort - Custom Array Based - O(n + k)')
  D.NATURAL_NUM_TEST_CASES(require('./noncomparison/frequency').CUSTOM_HM_BASED, 'Noncomparison Sort: Frequency Sort - Custom Hash Map Based - O(n + k)')
  D.ORDINAL_TEST_CASES(require('./noncomparison/bucket').FREQ, 'Noncomparison Sort: Bucket Sort - Frequency - Varies')
  D.NATURAL_NUM_TEST_CASES(require('./noncomparison/bucket').INSERT, 'Noncomparison Sort: Bucket Sort - Insertion - Varies')

} catch (ex) {
  console.error(`Exception ${ex}!`)
  process.exit()
}