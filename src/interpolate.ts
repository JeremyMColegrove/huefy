import { HSVData } from "./huefy";



// HSV interpolation function
export default function hsvInterpolation(color1: HSVData, color2: HSVData, value: number): HSVData {
    // Interpolate the HSV values
    const blendedColor: HSVData = {
        hsv: [
            color1.hsv[0] + (color2.hsv[0] - color1.hsv[0]) * value,
            color1.hsv[1] + (color2.hsv[1] - color1.hsv[1]) * value,
            color1.hsv[2] + (color2.hsv[2] - color1.hsv[2]) * value
        ],
        alpha: Math.round(100 * (color1.alpha + (color2.alpha - color1.alpha) * value)) / 100
    };

    return blendedColor;
}