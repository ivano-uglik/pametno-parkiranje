declare module 'vocative' {
  export function getGenitive(name: string): string | null;
  export function getDative(name: string): string | null;
  export function getAccusative(name: string): string | null;
  export function getVocative(name: string): string | null;
  export function getInstrumental(name: string): string | null;
  export function getLocative(name: string): string | null;
}
