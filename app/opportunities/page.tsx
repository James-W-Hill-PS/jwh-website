'use client'

import {
  ThemeUIProvider,
  Box,
  Container,
  Heading,
  Text,
  Card,
  Grid,
  Badge,
  Link as ThemeLink
} from 'theme-ui'
import theme from '@hackclub/theme'
import Navigation from '../components/Navigation'
import opportunitiesData from '../../data/opportunities.json'

export default function Opportunities() {
  return (
    <ThemeUIProvider theme={theme}>
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
              Opportunities
            </Heading>
            <Text
              variant="subtitle"
              sx={{
                mt: 3,
                fontSize: [2, 3],
                lineHeight: 'subheading'
              }}
            >
              Explore ways to grow your coding skills and connect with the
              community
            </Text>
          </Container>
        </Box>

        <Container sx={{ py: [5, 6, 7] }}>
          <Grid columns={[1, 2, 3]} gap={[3, 4]}>
            {opportunitiesData.map((opp, idx) => (
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
                <Box sx={{ mb: 3 }}>
                  <Box
                    sx={{
                      width: [48, 56],
                      height: [48, 56],
                      mb: 3,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bg: opp.color,
                      borderRadius: 'default',
                      p: 2
                    }}
                  >
                    <img
                      src={opp.icon}
                      alt={opp.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        filter: 'brightness(0) invert(1)'
                      }}
                    />
                  </Box>
                  <Badge
                    variant="pill"
                    sx={{ bg: opp.color, fontSize: [0, 1] }}
                  >
                    {opp.badge}
                  </Badge>
                </Box>
                <Heading
                  as="h3"
                  sx={{ fontSize: [3, 4], mb: 3, lineHeight: 'heading' }}
                >
                  {opp.title}
                </Heading>
                {opp.description && (
                  <Text
                    sx={{
                      mb: 4,
                      fontSize: [1, 2],
                      lineHeight: 'body',
                      color: 'secondary',
                      flex: 1
                    }}
                  >
                    {opp.description}
                  </Text>
                )}
                {opp.links && (
                  <Box sx={{ fontSize: 1, color: 'muted', mt: 'auto' }}>
                    {opp.links.map((link, i) => (
                      <Box key={i} sx={{ mb: 2 }}>
                        <ThemeLink
                          href={link.url}
                          target={
                            link.url.startsWith('http') ? '_blank' : undefined
                          }
                          rel={
                            link.url.startsWith('http')
                              ? 'noopener noreferrer'
                              : undefined
                          }
                          sx={{
                            fontSize: [0, 1],
                            fontWeight: 'bold',
                            color: 'primary',
                            textDecoration: 'none',
                            '&:hover': {
                              textDecoration: 'underline'
                            }
                          }}
                        >
                          → {link.name}
                        </ThemeLink>
                      </Box>
                    ))}
                  </Box>
                )}
              </Card>
            ))}
          </Grid>
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
              Have an opportunity to share?
            </Heading>
            <Text
              sx={{
                mt: 3,
                fontSize: [2, 3],
                lineHeight: 'body',
                color: 'secondary'
              }}
            >
              Contact the club staff to add it to this page!
            </Text>
          </Container>
        </Box>
      </Box>
    </ThemeUIProvider>
  )
}
