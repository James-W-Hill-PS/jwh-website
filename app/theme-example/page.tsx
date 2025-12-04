'use client'

import { ThemeUIProvider, Box, Container, Heading, Text, Button, Card, Grid, Input, Label, Badge, Flex } from 'theme-ui'
import theme from '@hackclub/theme'

export default function ThemeExample() {
  return (
    <ThemeUIProvider theme={theme as any}>
      <Box sx={{ bg: 'background', minHeight: '100vh' }}>
        {/* Header */}
        <Box as="header" sx={{ bg: 'sheet', py: 4 }}>
          <Container>
            <Heading variant="title" sx={{ textAlign: 'center', color: 'red' }}>
              Hack Club Theme Example
            </Heading>
            <Text sx={{ textAlign: 'center', mt: 2, color: 'muted' }}>
              A simple demo of the Hack Club theme system
            </Text>
          </Container>
        </Box>

        {/* Main Content */}
        <Container sx={{ py: 4 }}>
          {/* Buttons Section */}
          <Box sx={{ mb: 5 }}>
            <Heading variant="headline">Buttons</Heading>
            <Flex sx={{ gap: 3, flexWrap: 'wrap' }}>
              <Button variant="primary">Primary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="lg">Large</Button>
              <Button variant="cta">Call to Action</Button>
            </Flex>
          </Box>

          {/* Cards Section */}
          <Box sx={{ mb: 5 }}>
            <Heading variant="headline">Cards</Heading>
            <Grid columns={[1, 2, 3]} gap={3}>
              <Card variant="primary">
                <Heading as="h3" sx={{ fontSize: 3, mb: 2 }}>Primary Card</Heading>
                <Text>This is a primary card with elevated styling.</Text>
              </Card>
              <Card variant="sunken">
                <Heading as="h3" sx={{ fontSize: 3, mb: 2 }}>Sunken Card</Heading>
                <Text>This card has a sunken appearance.</Text>
              </Card>
              <Card variant="interactive">
                <Heading as="h3" sx={{ fontSize: 3, mb: 2 }}>Interactive</Heading>
                <Text>Hover over me for an effect!</Text>
              </Card>
            </Grid>
          </Box>

          {/* Form Section */}
          <Box sx={{ mb: 5 }}>
            <Heading variant="headline">Forms</Heading>
            <Card variant="sunken">
              <Grid gap={3} columns={[1, 2]}>
                <Label>
                  Name
                  <Input placeholder="Enter your name" />
                </Label>
                <Label>
                  Email
                  <Input type="email" placeholder="your@email.com" />
                </Label>
              </Grid>
              <Button sx={{ mt: 3 }}>Submit</Button>
            </Card>
          </Box>

          {/* Badges Section */}
          <Box sx={{ mb: 5 }}>
            <Heading variant="headline">Badges</Heading>
            <Flex sx={{ gap: 2, flexWrap: 'wrap' }}>
              <Badge variant="pill" sx={{ bg: 'red' }}>Red Pill</Badge>
              <Badge variant="pill" sx={{ bg: 'blue' }}>Blue Pill</Badge>
              <Badge variant="pill" sx={{ bg: 'green' }}>Green Pill</Badge>
              <Badge variant="outline" sx={{ color: 'orange' }}>Outline</Badge>
            </Flex>
          </Box>

          {/* Text Variants */}
          <Box sx={{ mb: 5 }}>
            <Heading variant="headline">Typography</Heading>
            <Card>
              <Heading variant="title">Title Text</Heading>
              <Heading variant="subtitle">Subtitle Text</Heading>
              <Text variant="lead" sx={{ mt: 3 }}>
                This is lead text that stands out from regular body copy.
              </Text>
              <Text sx={{ mt: 2 }}>
                Regular body text with <Text as="span" sx={{ color: 'primary', fontWeight: 'bold' }}>colored</Text> and{' '}
                <Text as="code" variant="styles.code">inline code</Text> elements.
              </Text>
            </Card>
          </Box>

          {/* Color Palette */}
          <Box>
            <Heading variant="headline">Colors</Heading>
            <Grid columns={[2, 4, 6]} gap={3}>
              {['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'purple'].map(color => (
                <Box key={color}>
                  <Box sx={{ bg: color, height: 80, borderRadius: 'default', mb: 2 }} />
                  <Text sx={{ textAlign: 'center', fontSize: 1 }}>{color}</Text>
                </Box>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </ThemeUIProvider>
  )
}
