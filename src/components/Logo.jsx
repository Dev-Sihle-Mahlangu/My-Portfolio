import { useId } from 'react'

/* SD monogram drawn as a circuit trace: the top bar of the S runs
   through a node and becomes the top of the D. */
export default function Logo({ size = 34 }) {
  const gid = useId().replace(/:/g, '')
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 46 46"
      fill="none"
      role="img"
      aria-label="SD logo"
    >
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="46" y2="46" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3f6bff" />
          <stop offset="1" stopColor="#16246b" />
        </linearGradient>
      </defs>
      <rect width="46" height="46" rx="12" fill={`url(#${gid})`} />
      <path d="M17 13H28" stroke="#45e0c8" strokeWidth="1.6" strokeLinecap="round" />
      <path
        d="M17 13H12A5 5 0 0 0 12 23H17A5 5 0 0 1 17 33H12"
        stroke="#eef1fb"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M28 13H31A10 10 0 0 1 31 33H28Z" stroke="#93aaff" strokeWidth="2.8" strokeLinejoin="round" />
      <circle cx="22.5" cy="13" r="2.2" fill="#45e0c8" />
      <circle cx="12" cy="33" r="2.2" fill="#45e0c8" />
    </svg>
  )
}
