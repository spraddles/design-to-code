export function rgb2hex(red: number, green: number, blue: number) {

    // Ensure the RGB values are within the valid range [0, 1]
    red = Math.max(0, Math.min(1, red))
    green = Math.max(0, Math.min(1, green))
    blue = Math.max(0, Math.min(1, blue))

    // Convert the floating-point values to 8-bit integers
    red = Math.round(red * 255)
    green = Math.round(green * 255)
    blue = Math.round(blue * 255) 

    // Convert each component to a hexadecimal string
    const redHex = red.toString(16).padStart(2, '0')
    const greenHex = green.toString(16).padStart(2, '0')
    const blueHex = blue.toString(16).padStart(2, '0')

    // Combine the hexadecimal components to form the final color code
    const hexColor = `#${redHex}${greenHex}${blueHex}`

    return hexColor
}