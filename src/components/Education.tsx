import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import { School } from '@mui/icons-material';
import { resumeData } from '../data/resumeData';

/**
 * Education Component
 * Displays educational background
 */
export const Education: React.FC = () => {
  return (
    <Box
      id="education"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        px: 2,
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <School sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            Education
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Academic Background & Qualifications
          </Typography>
        </Box>

        {/* Education Items */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {resumeData.education.map((edu, index) => (
            <Paper
              key={index}
              elevation={0}
              sx={{
                p: 3,
                border: '1px solid',
                borderColor: 'divider',
                transition: 'all 0.3s',
                '&:hover': {
                  borderColor: 'primary.main',
                  transform: 'translateY(-4px)',
                  boxShadow: (theme) =>
                    `0 8px 24px ${theme.palette.primary.main}20`,
                },
              }}
            >
              {/* Degree */}
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 1,
                  color: 'primary.main',
                }}
              >
                {edu.degree}
              </Typography>

              {/* Institution & Location */}
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 500,
                  mb: 0.5,
                }}
              >
                {edu.institution}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 1 }}
              >
                {edu.location} • {edu.period}
              </Typography>

              {/* Details */}
              {edu.details && (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 1 }}
                >
                  {edu.details}
                </Typography>
              )}
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
