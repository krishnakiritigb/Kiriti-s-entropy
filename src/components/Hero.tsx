import React from 'react';
import { Box, Typography, Button, Chip, Container } from '@mui/material';
import { resumeData } from '../data/resumeData';

/**
 * Hero Section Component
 * Main introduction with avatar, name, title, and CTAs
 */
export const Hero: React.FC = () => {
  const handleDownloadResume = () => {
    window.open('/resume.pdf', '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      sx={{
        minHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        py: { xs: 8, md: 4 },
        px: 2,
      }}
    >
      <Container maxWidth="md">
        {/* Avatar */}
        <Box
          sx={{
            width: 120,
            height: 120,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '3rem',
            fontWeight: 700,
            color: 'white',
            margin: '0 auto 2rem',
            boxShadow: (theme) => `0 10px 40px ${theme.palette.primary.main}40`,
          }}
        >
          KG
        </Box>

        {/* Name */}
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2.5rem', md: '4rem' },
            fontWeight: 700,
            mb: 2,
            letterSpacing: '-1px',
          }}
        >
          {resumeData.name}
        </Typography>

        {/* Title */}
        <Typography
          variant="h5"
          sx={{
            color: 'primary.main',
            mb: 2,
            fontWeight: 600,
            fontSize: { xs: '1.25rem', md: '1.5rem' },
          }}
        >
          {resumeData.title}
        </Typography>

        {/* Description */}
        <Typography
          variant="body1"
          sx={{
            color: 'text.secondary',
            maxWidth: 600,
            mx: 'auto',
            mb: 4,
            lineHeight: 1.8,
            fontSize: { xs: '1rem', md: '1.1rem' },
          }}
        >
          {resumeData.summary}
        </Typography>

        {/* Tech Stack Pills */}
        <Box
          sx={{
            display: 'flex',
            gap: 1,
            flexWrap: 'wrap',
            justifyContent: 'center',
            mb: 4,
          }}
        >
          {resumeData.techStack.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              sx={{
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
                fontWeight: 500,
                transition: 'all 0.3s',
                '&:hover': {
                  borderColor: 'primary.main',
                  bgcolor: (theme) => `${theme.palette.primary.main}10`,
                  transform: 'translateY(-2px)',
                },
              }}
            />
          ))}
        </Box>

        {/* CTA Buttons */}
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            size="large"
            onClick={() => scrollToSection('experience')}
            sx={{
              px: 4,
              py: 1.5,
              fontWeight: 600,
              textTransform: 'none',
              fontSize: '1rem',
              boxShadow: (theme) => `0 4px 20px ${theme.palette.primary.main}40`,
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: (theme) => `0 6px 30px ${theme.palette.primary.main}60`,
              },
            }}
          >
            View Work
          </Button>

          <Button
            variant="outlined"
            size="large"
            onClick={handleDownloadResume}
            sx={{
              px: 4,
              py: 1.5,
              fontWeight: 600,
              textTransform: 'none',
              fontSize: '1rem',
              borderWidth: 2,
              '&:hover': {
                borderWidth: 2,
                bgcolor: (theme) => `${theme.palette.primary.main}10`,
              },
            }}
          >
            Download Resume
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
