import linear from "./curves.js";
import hsvInterpolation from "./interpolate.js";
import toHSV from "./toHSV.js";
import convert from 'color-convert'
import colorstring from 'color-string'

export interface TransitionOptions {
    curve?: (value: number) => number;
    as?: 'hex' | 'rgba' | 'rgb' | 'hsl' | 'hsv' | 'cmyk';
}

// handle alpha channel seperate
export type HSVData = {hsv:[number, number, number], alpha:number}

// Main transition function
export default function huefy(color1: string, color2: string, value: number, options: TransitionOptions = {}): string {
    const { curve = linear, as = 'rgba' } = options;

    const hsv1 = toHSV(color1);
    const hsv2 = toHSV(color2);

    // Apply the curve function
    const t = curve(value);

    // Perform the interpolation using HSV
    const resultRgba = hsvInterpolation(hsv1, hsv2, t);

    // Convert the result to the desired format
    switch (as) {
        case 'rgba':
            var rgba = convert.hsv.rgb(resultRgba.hsv).concat(resultRgba.alpha);
            return colorstring.to.rgb(rgba);
        case 'rgb':
            var rgb = convert.hsv.rgb(resultRgba.hsv);
            return colorstring.to.rgb(rgb);
        case 'hsl':
            var hsl = convert.hsv.hsl(resultRgba.hsv);
            return colorstring.to.hsl(hsl);
        case 'hsv':
            var hsv = resultRgba.hsv;
            return `hsv(${hsv[0]}°, ${hsv[1]}%, ${hsv[2]}%)`;
        case 'cmyk':
            return `cmyk(${convert.hsv.cmyk(resultRgba.hsv).join('%, ')}%)`;
        default:
            return '#' + convert.hsv.hex(resultRgba.hsv).toLowerCase() + (resultRgba.alpha * 255).toString(16); // Default to hex
    }
}