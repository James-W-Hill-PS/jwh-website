'use client'

import { IconButton, useColorMode } from 'theme-ui'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [mode, setMode] = useColorMode()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <IconButton
        sx={{
          color: 'text',
          borderRadius: 'circle',
          visibility: 'hidden'
        }}
      >
        <svg width="24" height="24" />
      </IconButton>
    )
  }

  return (
    <IconButton
      onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
      title="Toggle theme"
      aria-label={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}
      sx={{
        color: 'text',
        borderRadius: 'circle',
        transition: 'box-shadow .125s ease-in-out, transform .125s ease-in-out',
        cursor: 'pointer',
        ':hover,:focus': {
          boxShadow: '0 0 0 2px',
          outline: 'none',
          transform: 'scale(1.1)'
        },
        '& .sun-and-moon > :is(.moon, .sun, .sun-beams)': {
          transformOrigin: 'center'
        },
        '& .sun-and-moon > .sun-beams': {
          stroke: 'currentColor',
          strokeWidth: '2px',
          transition: 'transform .5s ease, opacity .5s ease'
        },
        '& .sun-and-moon > .sun': {
          fill: 'currentColor',
          transition: 'transform .5s ease'
        },
        '& .sun-and-moon > .moon': {
          fill: 'currentColor'
        },
        ...(mode === 'dark' && {
          '& .sun-and-moon > .sun': {
            transform: 'scale(1.75)',
            transitionDuration: '.25s'
          },
          '& .sun-and-moon > .sun-beams': {
            opacity: 0,
            transform: 'rotateZ(-25deg)',
            transitionDuration: '.15s'
          },
          '& .sun-and-moon > .moon > circle': {
            transform: 'translateX(-7px)',
            transitionDuration: '.5s',
            transitionDelay: '.25s'
          }
        })
      }}
    >
      <svg
        className="sun-and-moon"
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <mask className="moon" id="moon-mask" maskUnits="userSpaceOnUse">
          <rect x="0" y="0" width="24" height="24" fill="white" />
          <circle cx="24" cy="10" r="6" fill="black" />
        </mask>

        <circle
          className="sun"
          cx="12"
          cy="12"
          r="6"
          mask="url(#moon-mask)"
          fill="currentColor"
        />
        <g className="sun-beams" stroke="currentColor">
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </g>
      </svg>
    </IconButton>
  )
}
