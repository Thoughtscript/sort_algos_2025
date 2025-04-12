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

  D.TEST_CASES(require('./comparison/quick').CUSTOM, 'Comparison Sort: Quick Sort - Custom - O(n*log(n))')
  D.TEST_CASES(require('./comparison/merge').CUSTOM, 'Comparison Sort: Merge Sort - Custom - O(n*log(n))')
  D.TEST_CASES(require('./comparison/merge').CUSTOM, 'Comparison Sort: Bubble Sort - Custom - O(n²)')
  D.TEST_CASES(require('./comparison/selection').CUSTOM, 'Comparison Sort: Selection Sort - Custom - O(n²)')

  D.TEST_CASES(require('./noncomparison/insertion').CUSTOM, 'Noncomparison Sort: Insertion Sort - Custom - O(n²)')
  D.TEST_CASES(require('./noncomparison/frequency').CUSTOM, 'Noncomparison Sort: Frequency Sort - Custom - O(n + k)')
  D.TEST_CASES(require('./noncomparison/bucket').FREQ, 'Noncomparison Sort: Bucket Sort - Frequency - Varies')

} catch (ex) {
  console.error(`Exception ${ex}!`)
  process.exit()
}