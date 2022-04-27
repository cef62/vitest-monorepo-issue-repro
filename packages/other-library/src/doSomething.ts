import { repeat } from '@my-org/my-utilities'

export function doSomething(words: string) {
  return `Your words, three times: ${repeat(words, 3)}`
}
