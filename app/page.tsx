'use client'

import { ThemeUIProvider, Box, Container, Heading, Text, Button, Card, Grid, Badge, Flex } from 'theme-ui'
import theme from '@hackclub/theme'
import Icon from '@hackclub/icons'
import Link from 'next/link'
import Navigation from './components/Navigation'

export default function Home() {
  return (
    <ThemeUIProvider theme={theme}>
      <Box sx={{ bg: 'background', minHeight: '100vh' }}>
        <Navigation />

        <Box as="header" sx={{ bg: 'sheet', py: [5, 6] }}>
          <Container sx={{ textAlign: 'center', maxWidth: 'copy' }}>
            <Heading variant="ultratitle" sx={{ color: 'red', fontSize: [5, 6, 7], letterSpacing: '-0.02em', mb: 3 }}>
              J.W.H. Coding Club
            </Heading>
            <Text variant="subtitle" sx={{ fontSize: [3, 4], lineHeight: 'subheading', color: 'text', mx: 'auto', maxWidth: '600px' }}>
              Building the future, one line of code at a time
            </Text>
            <br />
            <Text sx={{ mt: 3, fontSize: [1, 2], color: 'muted' }}>
              Proudly part of{' '}
              <a href="https://hackclub.com" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', fontWeight: 'bold', textDecoration: 'underline', textDecorationColor: '#ec3750' }}>
                Hack Club
              </a>
            </Text>
            <Flex sx={{ gap: [2, 3], justifyContent: 'center', mt: [4, 5], flexWrap: 'wrap' }}>
              <Link href="/opportunities" passHref legacyBehavior>
                <Button as="a" variant="lg" sx={{ px: [3, 4], py: [2, 3] }}>
                  View Opportunities
                </Button>
              </Link>
              <Link href="/projects" passHref legacyBehavior>
                <Button as="a" variant="outlineLg" sx={{ px: [3, 4], py: [2, 3] }}>
                  Our Projects
                </Button>
              </Link>
            </Flex>
          </Container>
        </Box>

        <Container sx={{ py: [5, 6], textAlign: 'center' }}>
          <Heading variant="headline" sx={{ mb: [4, 5], fontSize: [4, 5] }}>
            What We Do
          </Heading>

          <Flex sx={{ flexDirection: ['column', 'row'], gap: [4, 2], alignItems: 'center' }}>
            <Card variant="interactive" sx={{ p: [4, 5], flex: 1, minWidth: 0 }}>
              <Badge variant="pill" sx={{ bg: 'red', mb: 3, fontSize: [0, 1] }}>Learn</Badge>
              <Heading as="h3" sx={{ fontSize: [3, 4], mb: 3 }}>Build Skills</Heading>
              <Text sx={{ fontSize: [1, 2], color: 'secondary' }}>
                Learn programming, web development, and computer science through hands-on projects.
              </Text>
            </Card>
            <Box sx={{ flexShrink: 0, px: 2 }}>
              <Icon glyph="enter" size={16} />
            </Box>
            <Card variant="interactive" sx={{ p: [4, 5], flex: 1, minWidth: 0 }}>
              <Badge variant="pill" sx={{ bg: 'blue', mb: 3, fontSize: [0, 1] }}>Create</Badge>
              <Heading as="h3" sx={{ fontSize: [3, 4], mb: 3 }}>Make Projects</Heading>
              <Text sx={{ fontSize: [1, 2], color: 'secondary' }}>
                Work on real projects that matter. From websites to games to apps.
              </Text>
            </Card>
            <Box sx={{ flexShrink: 0, px: 2 }}>
              <Icon glyph="enter" size={16} />
            </Box>
            <Card variant="interactive" sx={{ p: [4, 5], flex: 1, minWidth: 0 }}>
              <Badge variant="pill" sx={{ bg: 'green', mb: 3, fontSize: [0, 1] }}>Enjoy</Badge>
              <Heading as="h3" sx={{ fontSize: [3, 4], mb: 3 }}>Get Free Food</Heading>
              <Text sx={{ fontSize: [1, 2], color: 'secondary' }}>
                Come for the coding, stay for the snacks.
              </Text>
            </Card>
          </Flex>
        </Container>

        <Box sx={{ bg: 'sunken', py: [5, 6] }}>
          <Container>
            <Heading variant="headline" sx={{ textAlign: 'center', mb: [4, 5], fontSize: [4, 5] }}>
              Quick Links
            </Heading>
            <Grid columns={[1, 2]} gap={[3, 4]} sx={{ maxWidth: '900px', mx: 'auto' }}>
              <Link href="/staff" passHref legacyBehavior>
                <Card as="a" variant="interactive" sx={{ textDecoration: 'none', p: [4, 5], height: '100%' }}>
                  <Heading as="h3" sx={{ fontSize: [3, 4], mb: 3 }}>
                    <Box as="span" sx={{ display: 'inline-block', verticalAlign: 'middle', mr: 2 }}>
                      <Icon glyph="person" size={20} />
                    </Box>
                    Meet the Staff
                  </Heading>
                  <Text sx={{ fontSize: [1, 2], color: 'secondary' }}>
                    Get to know the team behind J.W.H. Coding Club
                  </Text>
                </Card>
              </Link>

              <Link href="/resources" passHref legacyBehavior>
                <Card as="a" variant="interactive" sx={{ textDecoration: 'none', p: [4, 5], height: '100%' }}>
                  <Heading as="h3" sx={{ fontSize: [3, 4], mb: 3 }}>
                    <Box as="span" sx={{ display: 'inline-block', verticalAlign: 'middle', mr: 2 }}>
                      <Icon glyph="docs" size={20} />
                    </Box>
                    Resources
                  </Heading>
                  <Text sx={{ fontSize: [1, 2], color: 'secondary' }}>
                    Tutorials, guides, and tools to help you learn
                  </Text>
                </Card>
              </Link>
            </Grid>
          </Container>
        </Box>

        <Container sx={{ py: [5, 6], textAlign: 'center', maxWidth: 'copy' }}>
          <Heading variant="title" sx={{ fontSize: [4, 5, 6] }}>
            Ready to start coding?
          </Heading>
          <br />
          <Text sx={{ mt: 3, fontSize: [2, 3], color: 'secondary' }}>
            Join us at J.W.H. Coding Club and build amazing things
          </Text>
          <br />
          <Button as="a" href="https://hackclub.com" target="_blank" rel="noopener noreferrer" variant="ctaLg" sx={{ mt: [4, 5], px: [4, 5], py: [3, 3] }}>
            Learn About Hack Club
          </Button>
        </Container>
      </Box>
    </ThemeUIProvider>
  )
}
