import React from 'react';
import { Box, Typography } from '@mui/material';
import staticData from './AlphaFinderData'; 

export default function AlphaFinder() {
    return (
        <Box sx={{  marginTop: '150px' }}>
           
            <Box
                sx={{
                    position: 'relative',
                    top: '20%',
                    left: '10%',
                    color: 'black',
                    width: '80%',
                }}
            >
                {staticData.map((item, index) => (
                    <div key={index}>
                        <Typography variant="h4" gutterBottom>
                            {item.name} SWOT Analysis
                        </Typography>

                        <Typography variant="h6">Strengths</Typography>
                        <ul>
                            {item.data.strength.map((strength, i) => (
                                <li key={i}>{strength}</li>
                            ))}
                        </ul>

                        <Typography variant="h6">Weaknesses</Typography>
                        <ul>
                            {item.data.weakness.map((weakness, i) => (
                                <li key={i}>{weakness}</li>
                            ))}
                        </ul>

                        <Typography variant="h6">Opportunities</Typography>
                        <ul>
                            {item.data.opportunity.map((opportunity, i) => (
                                <li key={i}>{opportunity}</li>
                            ))}
                        </ul>

                        <Typography variant="h6">Threats</Typography>
                        <ul>
                            {item.data.threat.map((threat, i) => (
                                <li key={i}>{threat}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </Box>
        </Box>
    );
}
