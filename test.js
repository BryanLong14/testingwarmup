const expect = require('chai').expect
const myFunc = require('./app.js')

var string = "This is a string."
var reversed = ".gnirts a si sihT"

var numberStr = "2656839"
var numsReversed = "9386562"

describe('#reverses a string', function(){
  it('takes in a string and returns it, reversed', function(){
    expect(myFunc.reverseMe(string).to.deep.equal(reversed))
  })
  it('takes a string of numbers and reverses them', function(){
    expect(myFunc.reverseMe(numberStr).to.deep.equal(numsReversed))
  })
})

describe('#finds remainder', function(){
  it('finds the remainder after dividing 23 by 20', function(){
    expect(myFunc.findTheRemainder(23, 20).to.equal(3))
  })
  it('finds the remainder of 63/13', function(){
    expect(myFunc.findTheRemainder(63/13).to.equal(11))
  })
})
