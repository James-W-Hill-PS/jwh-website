'use client'

import { useEffect, useState } from 'react'
import { Box, Container, Heading, Text, Card, Grid, Link as ThemeLink, Spinner } from 'theme-ui'
import Navigation from '../components/Navigation'
import Icon from '@hackclub/icons'

interface ToolboxItem {
  name: string
  description: string
  url: string
  icon?: string
  img?: string
  external?: boolean
  forUseBy?: string
  fancy?: boolean
  background?: string
  titleColor?: string
  descriptionColor?: string
}

interface ToolboxCategory {
  category: string
  color: string
  icon: string
  items: ToolboxItem[]
}

export default function Resources() {
  const [toolboxResources, setToolboxResources] = useState<ToolboxItem[]>([])
  const [loading, setLoading] = useState(true)

  const generalResources = [
    {
      category: 'Getting Started',
      color: 'yellow',
      items: [
        { name: 'Club Dashboard', url: 'https://dashboard.hackclub.com', description: 'Hack Club dashboard for JWH' },
        { name: 'Google Classroom', url: 'https://classroom.google.com', description: 'Google Classroom for announcements, projects and more' },
        { name: 'Hack Club Workshops', url: 'https://workshops.hackclub.com', description: 'Free coding tutorials' },
        { name: 'freeCodeCamp', url: 'https://freecodecamp.org', description: 'Learn to code for free' },
        { name: 'The Odin Project', url: 'https://theodinproject.com', description: 'Full-stack curriculum' },
        { name: 'CS50', url: 'https://cs50.harvard.edu', description: 'Harvard\'s intro to CS' }
      ]
    },
    {
      category: 'Web Development',
      color: 'blue',
      items: [
        { name: 'MDN Web Docs', url: 'https://developer.mozilla.org', description: 'Web technology reference' },
        { name: 'Next.js Docs', url: 'https://nextjs.org/docs', description: 'React framework' },
        { name: 'Tailwind CSS', url: 'https://tailwindcss.com', description: 'Utility-first CSS' },
        { name: 'Web.dev', url: 'https://web.dev', description: 'Modern web guidance' }
      ]
    },
    {
      category: 'Programming Languages',
      color: 'green',
      items: [
        { name: 'Python.org', url: 'https://python.org', description: 'Official Python docs' },
        { name: 'JavaScript.info', url: 'https://javascript.info', description: 'Modern JS tutorial' },
        { name: 'Rust Book', url: 'https://doc.rust-lang.org/book/', description: 'Learn Rust' },
        { name: 'Go by Example', url: 'https://gobyexample.com', description: 'Learn Go' }
      ]
    },
    {
      category: 'Tools & Platforms',
      color: 'orange',
      items: [
        { name: 'GitHub', url: 'https://github.com', description: 'Code hosting & collaboration' },
        { name: 'Replit', url: 'https://replit.com', description: 'Online IDE' },
        { name: 'Vercel', url: 'https://vercel.com', description: 'Deploy web apps' },
        { name: 'Hack Club Bank', url: 'https://hackclub.com/bank', description: 'Fiscal sponsorship' }
      ]
    },
    {
      category: 'Practice & Challenges',
      color: 'purple',
      items: [
        { name: 'LeetCode', url: 'https://leetcode.com', description: 'Coding challenges' },
        { name: 'CodeWars', url: 'https://codewars.com', description: 'Code kata' },
        { name: 'HackerRank', url: 'https://hackerrank.com', description: 'Practice & compete' },
        { name: 'Advent of Code', url: 'https://adventofcode.com', description: 'December challenges' }
      ]
    },
    {
      category: 'Design & Assets',
      color: 'cyan',
      items: [
        { name: 'Figma', url: 'https://figma.com', description: 'Design tool' },
        { name: 'Unsplash', url: 'https://unsplash.com', description: 'Free photos' },
        { name: 'Font Awesome', url: 'https://fontawesome.com', description: 'Icons' },
        { name: 'Coolors', url: 'https://coolors.co', description: 'Color palettes' }
      ]
    }
  ]

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/hackclub/toolbox/refs/heads/main/manifest.js')
      .then(res => res.text())
      .then(text => {
        // Parse the JS export default array
        const jsonText = text.replace(/^export default\s+/, '').replace(/;?\s*$/, '')
        const data = eval(`(${jsonText})`) as ToolboxCategory[]
        
        // Find the Resources category
        const resourcesCategory = data.find(cat => cat.category === 'Resources')
        if (resourcesCategory) {
          setToolboxResources(resourcesCategory.items)
        }
        setLoading(false)
      })
      .catch(err => {
        console.error('Error fetching resources:', err)
        setLoading(false)
      })
  }, [])

  return (
    <Box sx={{ bg: 'background', minHeight: '100vh' }}>
      <Navigation />
        
      <Box sx={{ bg: 'sheet', py: [5, 6] }}>
        <Container sx={{ textAlign: 'center', maxWidth: 'copy' }}>
          <Heading 
            variant="title" 
            sx={{ 
              color: 'red',
              fontSize: [5, 6, 7],
              letterSpacing: '-0.02em'
            }}
          >
            Resources
          </Heading>
          <Text 
            variant="subtitle" 
            sx={{ 
              mt: 3,
              fontSize: [2, 3],
              lineHeight: 'subheading'
            }}
          >
            Curated tools and tutorials from Hack Club to help you learn and build
          </Text>
        </Container>
      </Box>

      <Container sx={{ py: [5, 6, 7] }}>
        <Heading variant="headline" sx={{ mb: [4, 5], fontSize: [4, 5], letterSpacing: '-0.01em' }}>
          General Resources
        </Heading>
        <Grid columns={[1, 2]} gap={[3, 4, 5]} sx={{ mb: [6, 7] }}>
          {generalResources.map((section, idx) => (
            <Card 
              key={idx} 
              variant="primary"
              sx={{ 
                p: [4, 4, 5],
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <Heading as="h3" sx={{ fontSize: [3, 4], mb: 4, color: section.color }}>
                {section.category}
              </Heading>
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: 4 
              }}>
                {section.items.map((item, i) => (
                  <Box key={i}>
                    <ThemeLink 
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ 
                        fontSize: [2, 3], 
                        fontWeight: 'bold',
                        textDecoration: 'none',
                        color: 'primary',
                        lineHeight: 'heading',
                        transition: 'color 0.2s ease',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 1,
                        '&:hover': {
                          color: 'red',
                          textDecoration: 'underline'
                        }
                      }}
                    >
                      {item.name} <Icon glyph="enter" size={24} />
                    </ThemeLink>
                    <Text sx={{ fontSize: [1, 1], color: 'muted', mt: 1, lineHeight: 'body' }}>
                      {item.description}
                    </Text>
                  </Box>
                ))}
              </Box>
            </Card>
          ))}
        </Grid>

        <Heading variant="headline" sx={{ mb: [4, 5], fontSize: [4, 5], letterSpacing: '-0.01em' }}>
          Toolbox Resources
        </Heading>
        {loading ? (
          <Box sx={{ textAlign: 'center', py: 5 }}>
            <Spinner />
            <Text sx={{ mt: 3, color: 'muted' }}>Loading toolbox resources...</Text>
          </Box>
        ) : (
          <Grid columns={[1, 2, 3]} gap={[3, 4]}>
            {toolboxResources.map((item, idx) => (
              <Card 
                key={idx} 
                variant="primary"
                sx={{ 
                  p: [4, 4, 5],
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%'
                }}
              >
                <Heading as="h3" sx={{ fontSize: [3, 4], mb: 3 }}>
                  {item.name}
                </Heading>
                <Text sx={{ mb: 4, fontSize: [1, 2], color: 'secondary', flex: 1 }}>
                  {item.description}
                </Text>
                <Box sx={{ mt: 'auto' }}>
                  <ThemeLink 
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ 
                      fontSize: [1, 2], 
                      fontWeight: 'bold',
                      color: 'primary',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 1,
                      '&:hover': {
                        color: 'red'
                      }
                    }}
                  >
                    <Icon glyph="enter" size={24} /> Visit Resource
                  </ThemeLink>
                </Box>
              </Card>
            ))}
          </Grid>
        )}
      </Container>

      <Box sx={{ bg: 'sunken', py: [5, 6, 7] }}>
        <Container sx={{ textAlign: 'center', maxWidth: 'copy' }}>
          <Heading 
            variant="headline"
            sx={{ 
              fontSize: [4, 5],
              letterSpacing: '-0.01em'
            }}
          >
            Know a great resource?
          </Heading>
          <Text sx={{ mt: 3, fontSize: [2, 3], lineHeight: 'body', color: 'secondary' }}>
            Share it with the club! We're always adding new resources to help members learn.
          </Text>
        </Container>
      </Box>
    </Box>
  )
}
