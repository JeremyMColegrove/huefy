/**
 * Clamps a value between min and max numbers inclusive
 * @param value current number
 * @param min minimum number
 * @param max maximum number
 * @returns number
 */
export function clamp (value:number, min:number, max:number) {
    if (value < min) return min;
    if (value > max) return max;
    return value;
}

// Default linear curve function
export function linear(value: number): number {
    return clamp(value, 0, 1);
}