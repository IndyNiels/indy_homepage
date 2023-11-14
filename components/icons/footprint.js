const FootprintIcon = props => {
  return (
    <svg
      width={20}
      height={20}
      className="w-5 inline-block transition-transform group-hover:rotate-[20deg]"
      viewBox="0 0 40 40"
      fill="currentColor"
      {...props}
    >
      <g>
        <path d="M164.653,132.291C80.118,216.826-2.84,340.268,0.075,407.786l12.52,12.52L432.9,0
		C386.056,3.941,272.078,24.867,164.653,132.291z"/>
        <path d="M33.808,441.519l12.52,12.52c67.518,2.915,190.96-80.043,275.495-164.579C429.247,182.036,450.172,68.057,454.113,21.213
		L33.808,441.519z"/>
      </g>
    </svg>
  )
}

export default FootprintIcon
