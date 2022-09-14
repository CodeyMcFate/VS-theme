import { colorHexTemplatedAsync } from './async';
import { colorHexTemplatedSync } from './sync';

export function colorHexMatchTemplated(inputString: string): string;
export function colorHexMatchTemplated(
  inputString: string,
  template?: string | [string] | [string, string]
): string;
export function colorHexMatchTemplated(
  inputString: Promise<string>
): Promise<string>;
export function colorHexMatchTemplated(
  inputString: Promise<string>,
  template?: string | [string] | [string, string]
): Promise<string>;
export function colorHexMatchTemplated(
  inputString: Promise<string> | string,
  template: string | [string] | [string, string] = ['', '']
): Promise<string> | string {
  if (typeof inputString === 'string') {
    return colorHexTemplatedSync(inputString, template);
  }
  return colorHexTemplatedAsync(inputString, template);
}

/* istanbul ignore if */
if (require?.main?.filename === __filename) main();
/* istanbul ignore next */
async function main() {
  console.log(__filename, require?.main?.filename);
}