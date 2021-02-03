/* eslint-env mocha */
/* global Phrase, expect */
/* 
'use strict'

describe('meets expectations', () => {
  describe('the Phrase class', () => {
    it('must exist', () => {
      expect(() => {
        const instance = new Phrase()
      }).to.not.throw(/Phrase is not defined/)
    })

    it('must have a property called "phrase"', () => {
      const instance = new Phrase()
      expect(instance).to.have.property('phrase')
    })

    context('when a value is provided to the constructor', () => {
      it('must be returned from the "phrase" property', () => {
        const instance = new Phrase('test')
        const actual = instance.phrase

        expect(actual).to.equal('test')
      })
    })

    it('must have a property called addPhraseToDisplay', () => {
      const instance = new Phrase()
      expect(instance).to.have.property('addPhraseToDisplay')
    })

    describe('addPhraseToDisplay', () => {
      it('must be a function', () => {
        const expected = 'function'
        const actual = typeof (new Phrase()).addPhraseToDisplay
        expect(actual).to.equal(expected)
      })

      context('when the function is called', () => {
        let instance = null

        before(() => {
          instance = new Phrase('hello')
          instance.addPhraseToDisplay()
        })

        it('must add the correct number of HTML elements to the ul', () => {
          const expected = instance.phrase.length
          const actual = document.querySelectorAll('#phrase li').length
          expect(actual).to.equal(expected)
        }) */
        /* it('must have class name set to "hide letter x"', () => {
          const expected = instance.phrase.
          const actual = document.querySelectorAll('#phrase li').classList.contains('hide letter')
          expect(actual).to.equal(expected)
        }) */

        /* it('must have corresponding letter in li elements', () => {
          const expected = 
          const actual = document.querySelectorAll
        })
      })
    })
  })
})
 */