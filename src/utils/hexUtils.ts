/** 字符串转十六进制（utf-8 编码） */
export function stringToHex(str: string): `0x${string}` {
  const encoder = new TextEncoder()
  const bytes = encoder.encode(str)
  return `0x${Array.from(bytes)
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')}`
}

/** 十六进制转字符串（utf-8 解码） */
export function hexToString(hex: `0x${string}`): string {
  const bytes = new Uint8Array(
    hex
      .slice(2)
      .match(/.{1,2}/g)!
      .map(byte => parseInt(byte, 16))
  )
  const decoder = new TextDecoder()
  return decoder.decode(bytes)
}
