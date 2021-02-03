/* eslint-env mocha */
/* global Game, expect, Phrase */

/* 'use strict'

describe('meets expectations', () => {
  describe('the Game class', () => {
    it('must exist', () => {
      expect(() => {
        const instance = new Game()
      }).to.not.throw(/Game is not defined/)
    })
    it('must have a property called "missed"', () => {
      const instance = new Game()
      expect(instance).to.have.property('missed')
    })
    describe('missed', () => {
      it('must default to 0', () => {
        const expected = 0
        const actual = new Game().missed
        expect(actual).to.equal(expected)
      })
    })
    it('must have a property called "phrases"', () => {
      const instance = new Game()
      expect(instance).to.have.property('phrases')
    })
    describe('phrases', () => {
      let instance = null
      before(() => {
        instance = new Game()
      })
      it('must be an array', () => {
        const expected = true
        const actual = Array.isArray(instance.phrases)
        expect(actual).to.equal(expected)
      })
      it('must have 5 items', () => {
        const expected = 5
        const actual = instance.phrases.length
        expect(actual).to.equal(expected)
      })
      describe('each item', () => {
        it('must be an instance of Phrase', () => {
          instance.phrases.forEach((item) => {
            expect(item).to.be.instanceof(Phrase)
          })
        })
      })
    })
    it('must have a property called "activePhrase"', () => {
      const instance = new Game()
      expect(instance).to.have.property('activePhrase')
    })
    describe('activePhrase', () => {
      let instance = null
      before(() => {
        instance = new Game()
      })
      it('must be set to null initially', () => {
        const expected = null
        const actual = instance.activePhrase
        expect(actual).to.equal(expected)
      })
    })
  })
}) */
