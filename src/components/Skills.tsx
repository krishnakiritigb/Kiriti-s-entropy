import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import { resumeData } from '../data/resumeData';

/**
 * Skills Section Component
 * Displays technical skills organized by category
 */
export const Skills: React.FC = () => {
  return (
    <Box
      id="skills"
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
            Technical Expertise
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Technologies I work with
          </Typography>
        </Box>

        {/* Skills Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(auto-fit, minmax(280px, 1fr))' },
            gap: 3,
          }}
        >
          {resumeData.skillCategories.map((category, index) => (
            <Paper
              key={index}
              elevation={0}
              sx={{
                p: 3,
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 2,
              }}
            >
              {/* Category Title */}
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  fontSize: '1.2rem',
                  '&::before': {
                    content: '""',
                    width: 4,
                    height: 20,
                    bgcolor: 'primary.main',
                    borderRadius: 1,
                  },
                }}
              >
                {category.title}
              </Typography>

              {/* Skills List */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {category.skills.map((skill) => (
                  <Box
                    key={skill}
                    sx={{
                      p: 1.5,
                      bgcolor: 'background.default',
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: 1,
                      fontSize: '0.95rem',
                      transition: 'all 0.3s',
                      cursor: 'default',
                      '&:hover': {
                        borderColor: 'primary.main',
                        bgcolor: (theme) => `${theme.palette.primary.main}10`,
                        pl: 2,
                      },
                    }}
                  >
                    {skill}
                  </Box>
                ))}
              </Box>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
