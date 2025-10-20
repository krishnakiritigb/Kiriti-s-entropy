import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, useTheme as useMuiTheme } from '@mui/material';
import { useTheme } from '../contexts/ThemeContext';

/**
 * Navbar Component
 * Sticky navigation bar with logo and theme toggle
 */
export const Navbar: React.FC = () => {
  const muiTheme = useMuiTheme();
  const { mode, toggleTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: muiTheme.palette.mode === 'dark'
          ? 'rgba(15, 23, 42, 0.9)'
          : 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        borderBottom: `1px solid ${muiTheme.palette.divider}`,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 4 } }}>
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box
            sx={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              bgcolor: 'primary.main',
              animation: 'pulse 2s infinite',
              '@keyframes pulse': {
                '0%, 100%': { transform: 'scale(1)', opacity: 1 },
                '50%': { transform: 'scale(1.2)', opacity: 0.7 },
              },
            }}
          />
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: 'primary.main',
              cursor: 'pointer',
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Kiriti GB
          </Typography>
        </Box>

        {/* Nav Links + Theme Toggle */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, md: 3 } }}>
          {/* Desktop Nav Links */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
            {['Experience', 'Skills', 'Contact'].map((item) => (
              <Typography
                key={item}
                variant="body2"
                sx={{
                  cursor: 'pointer',
                  color: 'text.secondary',
                  fontWeight: 500,
                  transition: 'color 0.3s',
                  '&:hover': {
                    color: 'primary.main',
                  },
                }}
                onClick={() => scrollToSection(item.toLowerCase())}
              >
                {item}
              </Typography>
            ))}
          </Box>

          {/* Theme Toggle */}
          <IconButton
            onClick={toggleTheme}
            sx={{
              width: 50,
              height: 26,
              borderRadius: '13px',
              bgcolor: 'background.paper',
              border: `1px solid ${muiTheme.palette.divider}`,
              position: 'relative',
              padding: 0,
              '&::after': {
                content: mode === 'light' ? '"☀️"' : '"🌙"',
                position: 'absolute',
                top: '2px',
                left: mode === 'light' ? '2px' : '24px',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                bgcolor: 'primary.main',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '10px',
                transition: 'left 0.3s',
              },
            }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
