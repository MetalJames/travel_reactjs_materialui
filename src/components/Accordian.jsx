import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
    ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
    }));

    const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
    ))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
    }));

    const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
    }));

    export default function CustomizedAccordions() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>What is the importance of Tour and travel?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                Image result for frequently asked questions about a travel tour
                Traveling is one of the best ways to enhance personal growth. 
                It enables you to do things differently from your daily routine activities. 
                When you travel, you step out from your comfort zone to a different 
                environment which makes you become more responsible and gives a sense of independence.
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>What does traveling do to a person?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                Traveling promotes happiness and helps you take your mind off stressful situations. 
                This leads to lower cortisol levels, making you feel more calm and content. 
                It also helps us reflect on our personal goals and interests.
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>What do you gain from travelling?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                People may travel to learn something specific: a new language, a new cuisine, 
                aspects of a different culture, or a deeper appreciation of faith or spirituality. 
                As a bonus, they'll take away more than their specific goal. ... They'll also 
                gain awareness of new customs, cultures, people, and places.
            </Typography>
            </AccordionDetails>
        </Accordion>
        </div>
    );
}
