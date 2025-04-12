'use strict'

/**
 * @Author - Adam In Tae Gerard
 *
 * Bucket Sort.
 */

const C = require('../config')

module.exports = {
    FREQ: arr => require('./frequency').CUSTOM_ARRAY_BASED(arr),

    INSERT: arr => require('./insertion').CUSTOM(arr)
}