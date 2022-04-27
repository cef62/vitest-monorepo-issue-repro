/**
 * Repeat string n times
 */
 export function repeat(source: string, count: number) {
  return new Array(count + 1).join(source)
}
