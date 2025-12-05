'use client'

import { Box, Container, Flex, NavLink, IconButton } from 'theme-ui'
import Link from 'next/link'
import Icon from '@hackclub/icons'
import { useState } from 'react'
import ThemeToggle from './ThemeToggle'

export default function Navigation() {
  const [isHackClubHovered, setIsHackClubHovered] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
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
            gap: [2, 3] 
          }}
        >
          <NavLink 
            as={Link}
            href="/"
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
          
          {/* Desktop Menu */}
          <Flex sx={{ gap: [2, 3, 4], alignItems: 'center', display: ['none', 'none', 'flex'] }}>
            <NavLink 
              as={Link}
              href="/opportunities"
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
            <NavLink 
              as={Link}
              href="/projects"
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
            <NavLink 
              as={Link}
              href="/staff"
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
            <NavLink 
              as={Link}
              href="/resources"
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
            <NavLink 
              href="https://hackclub.com" 
              target="_blank" 
              rel="noopener noreferrer"
              onMouseEnter={() => setIsHackClubHovered(true)}
              onMouseLeave={() => setIsHackClubHovered(false)}
              sx={{ 
                fontSize: [1, 1, 2],
                fontWeight: 'bold',
                color: 'red',
                transition: 'opacity 0.2s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                whiteSpace: 'nowrap'
              }}
            >
              Hack Club <Icon glyph={isHackClubHovered ? "external-fill" : "external"} size={24} />
            </NavLink>
            <ThemeToggle />
          </Flex>

          {/* Mobile Menu Button */}
          <Flex sx={{ gap: 2, alignItems: 'center', display: ['flex', 'flex', 'none'] }}>
            <ThemeToggle />
            <IconButton
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              sx={{
                color: 'text',
                cursor: 'pointer',
                transition: 'transform 0.2s ease',
                '&:hover': {
                  transform: 'scale(1.1)'
                }
              }}
            >
              <Icon glyph={isMobileMenuOpen ? "view-close" : "menu"} size={32} />
            </IconButton>
          </Flex>
        </Flex>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <Box
            sx={{
              display: ['block', 'block', 'none'],
              mt: 3,
              pt: 3,
              borderTop: '1px solid',
              borderColor: 'border'
            }}
          >
            <Flex sx={{ flexDirection: 'column', gap: 3 }}>
              <NavLink 
                as={Link}
                href="/opportunities"
                onClick={() => setIsMobileMenuOpen(false)}
                sx={{ 
                  fontSize: 2,
                  fontWeight: 'body',
                  transition: 'color 0.2s ease',
                  '&:hover': {
                    color: 'red'
                  }
                }}
              >
                Opportunities
              </NavLink>
              <NavLink 
                as={Link}
                href="/projects"
                onClick={() => setIsMobileMenuOpen(false)}
                sx={{ 
                  fontSize: 2,
                  fontWeight: 'body',
                  transition: 'color 0.2s ease',
                  '&:hover': {
                    color: 'red'
                  }
                }}
              >
                Projects
              </NavLink>
              <NavLink 
                as={Link}
                href="/staff"
                onClick={() => setIsMobileMenuOpen(false)}
                sx={{ 
                  fontSize: 2,
                  fontWeight: 'body',
                  transition: 'color 0.2s ease',
                  '&:hover': {
                    color: 'red'
                  }
                }}
              >
                Staff
              </NavLink>
              <NavLink 
                as={Link}
                href="/resources"
                onClick={() => setIsMobileMenuOpen(false)}
                sx={{ 
                  fontSize: 2,
                  fontWeight: 'body',
                  transition: 'color 0.2s ease',
                  '&:hover': {
                    color: 'red'
                  }
                }}
              >
                Resources
              </NavLink>
              <NavLink 
                href="https://hackclub.com" 
                target="_blank" 
                rel="noopener noreferrer"
                sx={{ 
                  fontSize: 2,
                  fontWeight: 'bold',
                  color: 'red',
                  transition: 'opacity 0.2s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1
                }}
              >
                Hack Club <Icon glyph="external" size={24} />
              </NavLink>
            </Flex>
          </Box>
        )}
      </Container>
    </Box>
  );
}
