import { ColorElementTuple } from '../../types/ColorElementTuple';
import { colorHexMatch } from '../color-hex-match';

export function extractColorInformation(
  colorElementTupleList: ColorElementTuple[],
  template: string | [string] | [string, string] = 'x'
): ColorElementTuple[] {
  return colorElementTupleList.map(colorElementTuple => {
    const [colorElementName, colorHexValue] = colorElementTuple;
    return [
      colorElementName,
      colorExtractHex(colorHexValue, template),
    ] as ColorElementTuple;
  });
}

/*
  export async function extractColorInformation(
  colorElementTupleList: Promise<ColorElementTuple[]>,
  template: string | [string] | [string, string] = 'x'
): Promise<ColorElementTuple[]> {
 */

export function colorExtractHex(
  inputString: string,
  template: string | [string] | [string, string]
): string {
  return colorHexMatch_(inputString, template);
}

export async function colorExtractHexAsync(
  inputString: Promise<string> | string,
  template: string | [string] | [string, string]
): Promise<string> {
  return colorExtractHex((await Promise.resolve(inputString)) || '', template);
}

function colorHexMatch_(
  inputString: string,
  template: string | [string] | [string, string]
): string {
  const extractedHex = colorHexMatch(inputString).toUpperCase();

  if (typeof template === 'string') return template + extractedHex;
  if (Array.isArray(template)) {
    if (template.length === 1) return template[0] + extractedHex;
    if (template.length === 2) return template[0] + extractedHex + template[1];
  }

  return '';
}
