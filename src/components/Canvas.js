import React, { useRef, useEffect } from 'react';
import { initializeCanvas, useAI } from '../api';

const Canvas = ({ textInput, isNSFW, referenceImage }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        initializeCanvas(canvas);
    }, []);

    useEffect(() => {
        // Logic for sending updates to AI endpoint
        useAI(textInput, isNSFW, referenceImage, canvasRef.current);
    }, [textInput, isNSFW, referenceImage]);

    return <canvas ref={canvasRef} width={800} height={600}></canvas>;
};

export default Canvas;
