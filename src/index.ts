import huefy, {TransitionOptions} from "./huefy";
import linear from "./curves";


export {TransitionOptions, linear}
export default huefy


// function hexToHSV(hex:string): DATA {
//     var r:number, g:number, b:number, a:number;

//     // parse shorthand
//     if (hex.length === 3 || hex.length === 4) {
//         r = parseInt(hex[1] + hex[1], 16);
//         g = parseInt(hex[2] + hex[2], 16);
//         b = parseInt(hex[3] + hex[3], 16);
//         if (hex.length === 4) a = parseInt(hex[4] + hex[4], 16);
//         else a = 255;
//     } else {
//         // parse normal
//         r = parseInt(hex.slice(1, 3), 16);
//         g = parseInt(hex.slice(3, 5), 16);
//         b = parseInt(hex.slice(5, 7), 16),
//         a = parseInt(hex.slice(7, 9), 16) || 255;
//     }
    
//     return {hsv:convert.rgb.hsv([r, g, b]), alpha:a} as DATA;
// }

// // Function to parse colors and convert to RGBA
// function parseColor(color: ColorType): DATA {
//     if (typeof color === 'string') {
//         if (color.startsWith('cmyk')) {
//             var regex = /cmyk?\((\d+).?,\s*(\d+)%?,\s*(\d+)%?/;
//             var match = color.match(regex);
//             if (match) {
//                 return {hsv:convert.cmyk.hsv([parseInt(match[1]), parseInt(match[2]), parseInt(match[3]), 0]), alpha:255} as DATA;
//             }
//         }

//         var value = colorstring.get.rgb(color)
//         return {hsv:convert.rgb.hsv(value.slice(0, 3) as RGB), alpha:value[3]||255} as DATA;
//     }
//     throw new Error('Unsupported color format');
// }
// HSV interpolation function
// function hsvInterpolation(color1: DATA, color2: DATA, value: number): DATA {
//     // Interpolate the HSV values
//     const blendedColor: DATA = {
//         hsv: [
//             color1.hsv[0] + (color2.hsv[0] - color1.hsv[0]) * value,
//             color1.hsv[1] + (color2.hsv[1] - color1.hsv[1]) * value,
//             color1.hsv[2] + (color2.hsv[2] - color1.hsv[2]) * value
//         ],
//         alpha: Math.round(color1.alpha + (color2.alpha - color1.alpha) * value)
//     };

//     return blendedColor;
// }


