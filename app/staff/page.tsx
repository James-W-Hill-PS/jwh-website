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
  Flex,
  Link as ThemeLink
} from 'theme-ui'
import theme from '@hackclub/theme'
import Navigation from '../components/Navigation'
import staffData from '../../data/staff.json'

export default function Staff() {
  return (
    <ThemeUIProvider theme={theme as any}>
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
              Meet the Staff
            </Heading>
            <Text
              variant="subtitle"
              sx={{
                mt: 3,
                fontSize: [2, 3],
                lineHeight: 'subheading'
              }}
            >
              The team making J.W.H. Coding Club awesome
            </Text>
          </Container>
        </Box>

        <Container sx={{ py: [5, 6, 7] }}>
          <Grid columns={[1, 2, 3]} gap={[3, 4]}>
            {staffData.map((member, idx) => (
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
                <Flex sx={{ alignItems: 'center', mb: 4, gap: 3 }}>
                  <Box
                    sx={{
                      width: [60, 70],
                      height: [60, 70],
                      borderRadius: 'circle',
                      overflow: 'hidden',
                      flexShrink: 0,
                      bg: 'sunken'
                    }}
                  >
                    <img
                      src={member.icon}
                      alt={member.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </Box>
                  <Box>
                    <Heading
                      as="h3"
                      sx={{ fontSize: [3, 4], mb: 2, lineHeight: 'heading' }}
                    >
                      {member.name}
                    </Heading>
                    <Badge
                      variant="pill"
                      sx={{ bg: member.color, fontSize: [0, 1] }}
                    >
                      {member.role}
                    </Badge>
                  </Box>
                </Flex>
                {member.description && (
                  <Text
                    sx={{
                      mb: 4,
                      fontSize: [1, 2],
                      lineHeight: 'body',
                      color: 'secondary'
                    }}
                  >
                    {member.description}
                  </Text>
                )}
                {member.responsibilities && (
                  <Box sx={{ fontSize: 1, color: 'muted', mb: 4 }}>
                    <Text
                      sx={{ fontWeight: 'bold', mb: 2, fontSize: [1, 1] }}
                    >
                      Responsibilities:
                    </Text>
                    {member.responsibilities.map((resp, i) => (
                      <Text
                        key={i}
                        sx={{ display: 'block', mb: 1, fontSize: [0, 1] }}
                      >
                        • {resp}
                      </Text>
                    ))}
                  </Box>
                )}
                {(member.github || member.link) && (
                  <Flex sx={{ gap: 2, mt: 'auto', flexWrap: 'wrap' }}>
                    {member.github && (
                      <ThemeLink
                        href={
                          member.link || `https://github.com/${member.github}`
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          fontSize: [0, 1],
                          flex: 1,
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          px: 3,
                          py: 2,
                          bg: 'transparent',
                          color: 'primary',
                          border: '2px solid',
                          borderColor: 'primary',
                          borderRadius: 'default',
                          fontWeight: 'bold',
                          textDecoration: 'none',
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                          '&:hover': {
                            bg: 'primary',
                            color: 'background'
                          }
                        }}
                      >
                        GitHub →
                      </ThemeLink>
                    )}
                  </Flex>
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
              Want to join the team?
            </Heading>
            <Text
              sx={{
                mt: 3,
                fontSize: [2, 3],
                lineHeight: 'body',
                color: 'secondary'
              }}
            >
              We're always looking for passionate members to help lead the club.
            </Text>
            <Text sx={{ mt: 2, fontSize: [1, 2], color: 'muted' }}>
              Talk to current staff members to learn about opportunities!
            </Text>
          </Container>
        </Box>
      </Box>
    </ThemeUIProvider>
  )
}
