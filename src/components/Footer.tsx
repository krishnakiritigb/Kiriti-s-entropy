import React, { useState } from 'react';
import { Box, Typography, Container } from '@mui/material';
import { resumeData } from '../data/resumeData';
import { AIAttributionDialog } from './AIAttributionDialog';

/**
 * Footer Component
 * Contact information and copyright
 */
export const Footer: React.FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
    <Box
      id="contact"
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
        py: { xs: 6, md: 8 },
        px: 2,
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        {/* Title */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 3,
            fontSize: { xs: '1.75rem', md: '2rem' },
          }}
        >
          Get In Touch
        </Typography>

        {/* Contact Info */}
        <Box
          sx={{
            mb: 3,
            '& > *': {
              mb: 1,
            },
          }}
        >
          <Typography variant="body1">
            <a
              href={`mailto:${resumeData.email}`}
              style={{
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              {resumeData.email}
            </a>
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {resumeData.location}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {resumeData.phone}
          </Typography>
        </Box>

        {/* Copyright */}
        <Box
          sx={{
            pt: 3,
            mt: 3,
            borderTop: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © 2024 {resumeData.name}
          </Typography>
          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1 }}>
            Hosted on Azure Kubernetes Service
          </Typography>
          <Typography
            variant="caption"
            color="text.secondary"
            onClick={() => setDialogOpen(true)}
            sx={{
              display: 'block',
              mt: 1,
              opacity: 0.8,
              cursor: 'pointer',
              transition: 'all 0.3s',
              '&:hover': {
                opacity: 1,
                color: 'primary.main',
                textDecoration: 'underline',
              },
            }}
          >
            Built with AI-assisted development • Pair-programmed with Claude
          </Typography>
        </Box>
      </Container>
    </Box>

    {/* AI Attribution Dialog */}
    <AIAttributionDialog open={dialogOpen} onClose={() => setDialogOpen(false)} />
    </>
  );
};
