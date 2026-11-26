export function ChanhDaiMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 512 256"
      {...props}
    >
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="currentColor"
        fontSize="32"
        fontWeight="700"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        Yo, yo, yo! 1-4-8-3-to-the-3-to-the-6-to-the-nine...
      </text>
    </svg>
  )
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 128"><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${color}" font-size="16" font-weight="700" font-family="system-ui, -apple-system, sans-serif">Yo, yo, yo!</text></svg>`
}
