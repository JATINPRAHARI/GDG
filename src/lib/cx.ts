/** Tiny class-name joiner — keeps conditional class usage readable. */
export function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ')
}