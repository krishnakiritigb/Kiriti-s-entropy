import React from 'react';
import { Box, Typography, Container, Paper, Chip } from '@mui/material';
import { resumeData } from '../data/resumeData';

/**
 * Experience Section Component
 * Displays professional work history in card format
 */
export const Experience: React.FC = () => {
  return (
    <Box
      id="experience"
      sx={{
        py: { xs: 8, md: 12 },
        px: 2,
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              mb: 2,
            }}
          >
            Professional Journey
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Building impactful solutions across industries
          </Typography>
        </Box>

        {/* Experience Cards */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(auto-fit, minmax(320px, 1fr))' },
            gap: 3,
          }}
        >
          {resumeData.experiences.map((exp, index) => (
            <Paper
              key={index}
              elevation={0}
              sx={{
                p: 3,
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 2,
                transition: 'all 0.3s',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
                  opacity: 0,
                  transition: 'opacity 0.3s',
                },
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: (theme) => `0 10px 40px ${theme.palette.primary.main}20`,
                  borderColor: 'primary.main',
                  '&::before': {
                    opacity: 1,
                  },
                },
              }}
            >
              {/* Job Title */}
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 0.5,
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                }}
              >
                {exp.title}
              </Typography>

              {/* Company & Period */}
              <Typography
                variant="body2"
                sx={{
                  color: 'primary.main',
                  fontWeight: 600,
                  mb: 2,
                  fontSize: '0.9rem',
                }}
              >
                {exp.company} • {exp.location} • {exp.period}
              </Typography>

              {/* Description */}
              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.7,
                  mb: 2,
                }}
              >
                {exp.description}
              </Typography>

              {/* Technologies */}
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                {exp.technologies.map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    size="small"
                    sx={{
                      bgcolor: 'background.default',
                      border: '1px solid',
                      borderColor: 'divider',
                      fontSize: '0.75rem',
                      fontWeight: 500,
                    }}
                  />
                ))}
              </Box>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
