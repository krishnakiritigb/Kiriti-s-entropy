import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { GeometricBg } from './components/GeometricBg';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';
import { Box } from '@mui/material';

/**
 * Main App Component
 * Renders the complete portfolio application
 */
function App() {
  return (
    <ThemeProvider>
      <Box sx={{ position: 'relative', minHeight: '100vh' }}>
        {/* Background Elements */}
        <GeometricBg />

        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main>
          <Hero />
          <Experience />
          <Education />
          <Skills />
        </main>

        {/* Footer */}
        <Footer />

        {/* Chat Widget */}
        <ChatWidget />

        {/* Easter Egg Badge */}
        <Box
          sx={{
            position: 'fixed',
            bottom: { xs: 16, md: 32 },
            left: { xs: 16, md: 32 },
            px: 2,
            py: 1,
            bgcolor: 'background.paper',
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 2,
            fontSize: '0.85rem',
            color: 'text.secondary',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'all 0.3s',
            '&:hover': {
              borderColor: 'primary.main',
              color: 'primary.main',
            },
          }}
        >
          🌌 v2.0 coming soon
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
