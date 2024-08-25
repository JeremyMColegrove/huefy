import convert from 'color-convert';
import colorstring from 'color-string';
import { HSVData } from './huefy';

export default function toHSV(color:string) {
    if (typeof color === 'string') {
        // cmyk
        if (color.startsWith('cmyk')) {
            var regex = /cmyk?\((\d+).?,\s*(\d+)%?,\s*(\d+)%?,\s*(\d+)%?\)/;
            var match = color.match(regex);
            if (match) {
                return {
                    hsv:convert.cmyk.hsv([
                        parseInt(match[1]), 
                        parseInt(match[2]), 
                        parseInt(match[3]), 
                        parseInt(match[4])
                    ]), 
                    alpha:1};
            }
        }

        if (color.startsWith('hsv')) {
            var regex = /hsv?\((\d+).?,\s*(\d+)%?,\s*(\d+)%?\)/;
            var match = color.match(regex);
            if (match) {
                return {hsv:[parseInt(match[1]), parseInt(match[2]), parseInt(match[3])], alpha:1} as HSVData;
            }
        }
        if (color.startsWith('hsl')) {
            var regex = /hsl?\((\d+).?,\s*(\d+)%?,\s*(\d+)%?\)/;
            var match = color.match(regex);
            if (match) {
                return {hsv: convert.hsl.hsv([parseInt(match[1]), parseInt(match[2]), parseInt(match[3])]), alpha:1} as HSVData;
            }
        }
        // hex, hsl, hwb, rgb, rgba, hsla, keyword
        var parsed = colorstring.get(color)
        if (parsed && parsed.model && parsed.value) {
            return {hsv:convert[parsed.model].hsv(parsed.value.slice(0, 3) as [number, number, number]), alpha:parsed.value[3]??1};
        }
    }
    throw new Error(`Unsupported color format ${color}`);
}