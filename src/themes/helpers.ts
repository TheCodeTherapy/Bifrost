export function hexToRgb(hex: number): { b: number; g: number; r: number } {
  return {
    b: hex & 255,
    g: (hex >> 8) & 255,
    r: (hex >> 16) & 255,
  }
}

export function rgbToHex(r: number, g: number, b: number): number {
  return (Math.round(r) << 16) | (Math.round(g) << 8) | Math.round(b)
}

export function rgbToHsl(
  r: number,
  g: number,
  b: number
): { h: number; l: number; s: number } {
  r /= 255
  g /= 255
  b /= 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h: number, s: number
  const l = (max + min) / 2

  if (max === min) {
    h = s = 0 // achromatic
  } else {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
      default:
        h = 0
    }
    h /= 6
  }

  return { h: h * 360, l: l * 100, s: s * 100 }
}

export function hslToRgb(
  h: number,
  s: number,
  l: number
): { b: number; g: number; r: number } {
  h /= 360
  s /= 100
  l /= 100

  const hue2rgb = (p: number, q: number, t: number) => {
    if (t < 0) t += 1
    if (t > 1) t -= 1
    if (t < 1 / 6) return p + (q - p) * 6 * t
    if (t < 1 / 2) return q
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
    return p
  }

  let r: number, g: number, b: number

  if (s === 0) {
    r = g = b = l // achromatic
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s
    const p = 2 * l - q
    r = hue2rgb(p, q, h + 1 / 3)
    g = hue2rgb(p, q, h)
    b = hue2rgb(p, q, h - 1 / 3)
  }

  return { b: b * 255, g: g * 255, r: r * 255 }
}

export function calculateLuminance(hex: number): number {
  const { b, g, r } = hexToRgb(hex)
  // Convert to linear RGB
  const toLinear = (c: number) => {
    c /= 255
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
  }

  const rLinear = toLinear(r)
  const gLinear = toLinear(g)
  const bLinear = toLinear(b)

  // Calculate relative luminance using ITU-R BT.709 coefficients
  return 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear
}

export function adjustLuminance(
  hex: number | string,
  targetLuminance: number
): string {
  // Convert string hex to number if needed
  const hexNumber =
    typeof hex === 'string' ? parseInt(hex.replace('#', ''), 16) : hex

  const { b, g, r } = hexToRgb(hexNumber)
  const { h, s } = rgbToHsl(r, g, b)

  // Binary search to find the lightness that gives us the target luminance
  let minL = 0
  let maxL = 100
  let bestL = 50
  let bestDiff = Infinity

  for (let i = 0; i < 50; i++) {
    // 50 iterations should be enough for precision
    const testL = (minL + maxL) / 2
    const testRgb = hslToRgb(h, s, testL)
    const testHex = rgbToHex(testRgb.r, testRgb.g, testRgb.b)
    const testLuminance = calculateLuminance(testHex)

    const diff = Math.abs(testLuminance - targetLuminance)
    if (diff < bestDiff) {
      bestDiff = diff
      bestL = testL
    }

    if (testLuminance < targetLuminance) {
      minL = testL
    } else {
      maxL = testL
    }

    if (diff < 0.001) break // Good enough precision
  }

  const finalRgb = hslToRgb(h, s, bestL)
  const finalHex = rgbToHex(finalRgb.r, finalRgb.g, finalRgb.b)
  return '#' + finalHex.toString(16).padStart(6, '0')
}

export const getRandomHexColor = () => {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

export const hslColorToHex = (hsl: string) => {
  const [h, s, l] = hsl.match(/\d+/g)!.map(Number)
  const hNorm = h / 360
  const sNorm = s / 100
  const lNorm = l / 100

  const hue2rgb = (p: number, q: number, t: number) => {
    if (t < 0) t += 1
    if (t > 1) t -= 1
    if (t < 1 / 6) return p + (q - p) * 6 * t
    if (t < 1 / 2) return q
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
    return p
  }

  let r: number, g: number, b: number
  if (sNorm === 0) {
    r = g = b = lNorm // achromatic
  } else {
    const q = lNorm < 0.5 ? lNorm * (1 + sNorm) : lNorm + sNorm - lNorm * sNorm
    const p = 2 * lNorm - q
    r = hue2rgb(p, q, hNorm + 1 / 3)
    g = hue2rgb(p, q, hNorm)
    b = hue2rgb(p, q, hNorm - 1 / 3)
  }

  const toHex = (c: number) => {
    const hex = Math.round(c * 255).toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}

export const getHexColorFromHueSpectrum = (totalColors: number): string[] => {
  const colors: string[] = []
  for (let i = 0; i < totalColors; i++) {
    const offset = Math.random() * 360
    const hue = Math.round((offset + (i / totalColors) * 360) % 360)
    const hslColor = `hsl(${hue}, 100%, 70%)`
    const hex = hslColorToHex(hslColor)
    colors.push(hex)
  }
  return colors
}

export const desaturateColor = (hex: string, percentage: number): string => {
  const hexStringToNumber = parseInt(hex.replace('#', ''), 16)
  const { b, g, r } = hexToRgb(hexStringToNumber)
  const hsl = rgbToHsl(r, g, b)

  hsl.s -= (hsl.s * percentage) / 100
  const newRGB = hslToRgb(hsl.h, hsl.s, hsl.l)
  const newHex = rgbToHex(newRGB.r, newRGB.g, newRGB.b)
  return '#' + newHex.toString(16).padStart(6, '0')
}
