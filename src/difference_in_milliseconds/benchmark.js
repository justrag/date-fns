// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var differenceInMilliseconds = require('./')
var moment = require('moment')

suite('differenceInMilliseconds', function () {
  benchmark('date-fns', function () {
    return differenceInMilliseconds(this.dateA, this.dateB)
  })

  benchmark('Moment.js', function () {
    return this.momentA.diff(this.momentB)
  })
}, {
  setup: function () {
    this.dateA = new Date()
    this.momentA = moment()
    this.dateB = new Date(this.dateA.getTime() + 604800000)
    this.momentB = this.momentA.clone().add(7, 'days')
  }
})
