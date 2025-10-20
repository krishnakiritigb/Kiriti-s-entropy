import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Chip,
} from '@mui/material';
import { Close, ExpandMore } from '@mui/icons-material';

interface AIAttributionDialogProps {
  open: boolean;
  onClose: () => void;
}

/**
 * AI Attribution Dialog
 * Explains ethical AI usage and development workflow
 */
export const AIAttributionDialog: React.FC<AIAttributionDialogProps> = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            AI-Assisted Development Practices
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Ethical use of AI in professional software development
          </Typography>
        </Box>
        <IconButton onClick={onClose}>
          <Close />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ pt: 3 }}>
        {/* My Workflow */}
        <Box sx={{ mb: 3, p: 2, bgcolor: 'primary.main', color: 'white', borderRadius: 2 }}>
          <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
            My Development Workflow (85% Human / 15% AI)
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
            I designed the architecture, made all technical decisions, and wrote core business logic myself.
            Claude was used for code optimization, refactoring repetitive patterns, and documentation -
            similar to how developers use linters, formatters, and Stack Overflow.
          </Typography>
        </Box>

        {/* Ethical Practices Accordion */}
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
          Industry-Standard Ethical AI Practices
        </Typography>

        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography fontWeight={600}>✅ What I Did (Ethical & Professional)</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ '& > *': { mb: 1.5 } }}>
              <Typography variant="body2">
                <strong>1. Architecture & Design:</strong> I designed the component structure, chose React + TypeScript + MUI,
                planned the folder organization, and decided on the tech stack.
              </Typography>
              <Typography variant="body2">
                <strong>2. Core Logic:</strong> I wrote the business logic, state management patterns, API integration strategy,
                and RAG implementation approach myself.
              </Typography>
              <Typography variant="body2">
                <strong>3. Code Review & Refinement:</strong> Used Claude to review my code, suggest optimizations,
                identify edge cases, and refactor repetitive boilerplate.
              </Typography>
              <Typography variant="body2">
                <strong>4. Understanding:</strong> I can explain every line of code, debug issues independently,
                and make modifications without AI assistance.
              </Typography>
              <Typography variant="body2">
                <strong>5. Transparency:</strong> Openly disclosing AI usage (this dialog!) rather than hiding it.
              </Typography>
            </Box>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography fontWeight={600}>🏢 Company-Approved AI Practices (2024 Standards)</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ '& > *': { mb: 1.5 } }}>
              <Typography variant="body2">
                <strong>GitHub Copilot (50M+ users):</strong> Code suggestions, autocomplete, boilerplate generation.
                Used at Microsoft, Google, Shopify, and most tech companies.
              </Typography>
              <Typography variant="body2">
                <strong>Code Review Assistance:</strong> Using AI to identify bugs, security issues, performance bottlenecks.
                Tools like Amazon CodeWhisperer, Tabnine are company-approved.
              </Typography>
              <Typography variant="body2">
                <strong>Documentation:</strong> AI-assisted comment generation, README writing, API documentation.
                Widely accepted when reviewed by humans.
              </Typography>
              <Typography variant="body2">
                <strong>Refactoring:</strong> Using AI to suggest cleaner code patterns, remove duplication,
                improve readability. Standard practice in modern teams.
              </Typography>
              <Typography variant="body2">
                <strong>Learning & Prototyping:</strong> Using AI to explore new libraries, understand unfamiliar codebases,
                rapid prototyping before production implementation.
              </Typography>
            </Box>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography fontWeight={600}>🎯 How I Used Claude Specifically</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ '& > *': { mb: 1.5 } }}>
              <Typography variant="body2">
                <strong>Step 1 - Planning (100% Me):</strong> I  Designed and decided to implement dark/light theme,
                planned the RAG architecture, and selected the tech stack.
              </Typography>
              <Typography variant="body2">
                <strong>Step 2 - Core Development (85% Me):</strong> I wrote the component structure, state management,
                API endpoints, and business logic. Claude helped with TypeScript interfaces and refining syntax in across the stack.
              </Typography>
              <Typography variant="body2">
                <strong>Step 3 - Optimization (15% AI):</strong> Claude suggested performance improvements,
                identified repetitive code patterns, and helped refactor for cleaner architecture.
              </Typography>
              <Typography variant="body2">
                <strong>Step 4 - Documentation (Collaborative):</strong> I outlined what to document,
                Claude helped format and expand explanations for clarity.
              </Typography>
              <Typography variant="body2">
                <strong>Step 5 - Testing (100% Me):</strong> I designed test cases based on requirements,
                Claude helped with test boilerplate.
              </Typography>
            </Box>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography fontWeight={600}>📊 Industry Data on AI-Assisted Development</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ '& > *': { mb: 1.5 } }}>
              <Typography variant="body2">
                <strong>Stack Overflow 2024 Survey:</strong> 92% of professional developers use AI tools regularly.
                76% report improved productivity. 82% of hiring managers expect AI proficiency.
              </Typography>
              <Typography variant="body2">
                <strong>GitHub Stats:</strong> Copilot users are 55% faster at completing tasks.
                74% can focus on more satisfying work. 87% feel more productive.
              </Typography>
              <Typography variant="body2">
                <strong>Industry Adoption:</strong> Google encourages internal AI tool use. Microsoft built GitHub Copilot.
                Meta uses AI coding assistants. Amazon created CodeWhisperer. All FAANG companies promote AI-assisted development.
              </Typography>
              <Typography variant="body2">
                <strong>Developer Efficiency:</strong> AI reduces time on boilerplate by 60%, increases code review quality,
                and helps developers learn new technologies 3x faster.
              </Typography>
            </Box>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography fontWeight={600}>❌ What I Did NOT Do (Unethical Practices)</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ '& > *': { mb: 1.5 } }}>
              <Typography variant="body2">
                ❌ <strong>Copy-paste without understanding:</strong> I understand every architectural decision and can explain any code.
              </Typography>
              <Typography variant="body2">
                ❌ <strong>Use proprietary code:</strong> All generated code is original, no copyrighted material.
              </Typography>
              <Typography variant="body2">
                ❌ <strong>Rely on AI for critical decisions:</strong> Security, architecture, data models - all decided by me.
              </Typography>
              <Typography variant="body2">
                ❌ <strong>Hide AI usage:</strong> I'm transparent about my workflow (as evidenced by this dialog).
              </Typography>
              <Typography variant="body2">
                ❌ <strong>Use AI as a crutch:</strong> I have 3+ years of professional experience building systems without AI assistance.
              </Typography>
            </Box>
          </AccordionDetails>
        </Accordion>

        {/* Key Metrics */}
        <Box sx={{ mt: 3, p: 2, bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: 2 }}>
          <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
            My Contribution Breakdown:
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            <Chip label="Architecture: 100% Me" color="primary" />
            <Chip label="Core Logic: 85% Me" color="primary" />
            <Chip label="Tech Decisions: 100% Me" color="primary" />
            <Chip label="Code Review: AI-Assisted" />
            <Chip label="Optimization: AI-Assisted" />
            <Chip label="Documentation: Collaborative" />
          </Box>
        </Box>

        {/* Analogy */}
        <Box sx={{ mt: 3, p: 2, bgcolor: 'info.main', color: 'white', borderRadius: 2 }}>
          <Typography variant="body2" sx={{ fontStyle: 'italic', lineHeight: 1.8 }}>
            <strong>Analogy:</strong> Using AI to code is like a chef using a food processor.
            The chef still designs the recipe, chooses ingredients, and creates the dish.
            The food processor just makes chopping faster. You wouldn't say the chef can't cook -
            you'd say they're efficient! Same applies to AI-assisted development.(Totally Claude Generated! 😂)
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
