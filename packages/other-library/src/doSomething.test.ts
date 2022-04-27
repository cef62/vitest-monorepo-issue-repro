import { describe, it, expect } from 'vitest'
import { doSomething } from './doSomething'

describe('doSomething', () => {
  it('should use the input words 3 times', () => {
    expect(doSomething('hi')).toBe('Your words, three times: hihihi')
  })
})
