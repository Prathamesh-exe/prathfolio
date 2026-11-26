export function SiteMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 1024 256"
      {...props}
    >
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="currentColor"
        fontSize="160"
        fontWeight="700"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
      >
        prathamesh
      </text>
    </svg>
  )
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1024 256"><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${color}" font-size="160" font-weight="700" font-family="ui-monospace, SFMono-Regular, Menlo, monospace">prathamesh</text></svg>`
}
