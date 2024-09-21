import React from 'react';
import { Typography } from '@mui/material'; 
import './RoadMap.css';
export default function RoadMap() {
    
    return (
        <>
            <div className='full-page'>
                <Typography variant='h3' > Roadmap </Typography>
                <Typography variant='h5'>Stock Market Analysis Journey</Typography>
                <br></br>
                <p>We are on a mission to enhance our understanding of stock price movements and company fundamentals. Through this journey, we'll share our experiences, learnings, and vision, empowering others to effectively analyze stocks and make informed decisions.</p>
                <Typography variant='h6'>Key Milestones:</Typography>
                <Typography variant='h6'>September 15, 2024: Initial Tool Creation</Typography>
                <p>We developed a simple, user-friendly table that allows you to analyze stock prices based on key financial metrics such as future price, earnings per share (EPS), and various price-to-earnings (PE) multiples.

                    <br></br>
                    <Typography variant='h6'>Upcoming Feature:</Typography> Simplified Stock Analysis

Soon, you'll be able to input just the company name to get an automated calculation of future prices, EPS, and PE multiples. This will simplify your analysis process, making it more intuitive and faster.
<br></br>
                    <Typography variant='h6'>Content Expansion:</Typography> YouTube, Blog, and Twitter

We are also planning to share deeper company analysis through multiple platforms:
<Typography variant='h6'>YouTube Channel:</Typography> Regular videos breaking down company fundamentals and market trends.
<Typography variant='h6'>Blog:</Typography> In-depth articles on stock market strategies and financial insights.
<Typography variant='h6'>Twitter:</Typography> Quick updates, charts, and market news to keep you informed on the go.
<br></br>
                    <Typography variant='h6'>Vision:</Typography>
Our goal is to provide actionable insights and resources to help you sharpen your stock analysis skills. By simplifying complex financial data and offering educational content, we aim to support both beginner and advanced investors. </p>
            </div>
        </>
)
}