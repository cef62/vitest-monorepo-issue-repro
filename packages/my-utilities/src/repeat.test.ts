import { describe, it, expect } from 'vitest'
import { repeat } from './repeat'

describe('repeat', () => {
  it('should repeat the input string N times', () => {
    expect(repeat('hi', 0)).toBe('')
    expect(repeat('hi', 1)).toBe('hi')
    expect(repeat('hi', 3)).toBe('hihihi')
  })

  it('should throw if the count is a negative number', () => {
    expect(() => repeat('hi', -2)).toThrow()
  })
})
