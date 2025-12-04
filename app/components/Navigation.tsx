'use client'

import { Box, Container, Flex, NavLink } from 'theme-ui'
import Link from 'next/link'

export default function Navigation() {
  return (
    <Box 
      as="nav" 
      sx={{ 
        bg: 'elevated', 
        borderBottom: '1px solid', 
        borderColor: 'border', 
        py: [3, 3, 4],
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)'
      }}
    >
      <Container>
        <Flex 
          sx={{ 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            flexWrap: 'wrap', 
            gap: [2, 3] 
          }}
        >
          <Link href="/" passHref legacyBehavior>
            <NavLink 
              sx={{ 
                fontWeight: 'bold', 
                fontSize: [2, 2, 3],
                color: 'text',
                textDecoration: 'none',
                '&:hover': {
                  color: 'red'
                }
              }}
            >
              J.W.H. Coding Club
            </NavLink>
          </Link>
          <Flex sx={{ gap: [2, 3, 4], flexWrap: 'wrap', alignItems: 'center' }}>
            <Link href="/opportunities" passHref legacyBehavior>
              <NavLink 
                sx={{ 
                  fontSize: [1, 1, 2],
                  fontWeight: 'body',
                  transition: 'color 0.2s ease',
                  '&:hover': {
                    color: 'red'
                  }
                }}
              >
                Opportunities
              </NavLink>
            </Link>
            <Link href="/projects" passHref legacyBehavior>
              <NavLink 
                sx={{ 
                  fontSize: [1, 1, 2],
                  fontWeight: 'body',
                  transition: 'color 0.2s ease',
                  '&:hover': {
                    color: 'red'
                  }
                }}
              >
                Projects
              </NavLink>
            </Link>
            <Link href="/staff" passHref legacyBehavior>
              <NavLink 
                sx={{ 
                  fontSize: [1, 1, 2],
                  fontWeight: 'body',
                  transition: 'color 0.2s ease',
                  '&:hover': {
                    color: 'red'
                  }
                }}
              >
                Staff
              </NavLink>
            </Link>
            <Link href="/resources" passHref legacyBehavior>
              <NavLink 
                sx={{ 
                  fontSize: [1, 1, 2],
                  fontWeight: 'body',
                  transition: 'color 0.2s ease',
                  '&:hover': {
                    color: 'red'
                  }
                }}
              >
                Resources
              </NavLink>
            </Link>
            <NavLink 
              href="https://hackclub.com" 
              target="_blank" 
              rel="noopener noreferrer"
              sx={{ 
                fontSize: [1, 1, 2],
                fontWeight: 'bold',
                color: 'red',
                transition: 'opacity 0.2s ease',
                '&:hover': {
                  opacity: 0.8
                }
              }}
            >
              Hack Club ↗
            </NavLink>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}
