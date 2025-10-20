import React from 'react';
import { Box, useTheme } from '@mui/material';

/**
 * Geometric Background Component
 * Renders decorative circular shapes in the background
 */
export const GeometricBg: React.FC = () => {
  const theme = useTheme();

  const circleStyle = {
    position: 'absolute' as const,
    borderRadius: '50%',
    border: `1px solid ${theme.palette.divider}`,
    opacity: 0.3,
    pointerEvents: 'none' as const,
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        overflow: 'hidden',
      }}
    >
      {/* Circle 1 - Top Right */}
      <Box
        sx={{
          ...circleStyle,
          width: '400px',
          height: '400px',
          top: '-100px',
          right: '-100px',
          background: `radial-gradient(circle, ${theme.palette.primary.main}15, transparent)`,
        }}
      />

      {/* Circle 2 - Bottom Left */}
      <Box
        sx={{
          ...circleStyle,
          width: '300px',
          height: '300px',
          bottom: '-50px',
          left: '-50px',
          background: `radial-gradient(circle, ${theme.palette.secondary.main}15, transparent)`,
        }}
      />

      {/* Circle 3 - Middle Left */}
      <Box
        sx={{
          ...circleStyle,
          width: '200px',
          height: '200px',
          top: '50%',
          left: '10%',
          background: `radial-gradient(circle, ${theme.palette.primary.main}10, transparent)`,
        }}
      />
    </Box>
  );
};
