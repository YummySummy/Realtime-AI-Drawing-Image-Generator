import * as tf from '@tensorflow/tfjs';
import { HfInference } from '@huggingface/inference';

const hf = new HfInference('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');

export const initializeCanvas = (canvas) => {
    // Initialize canvas and drawing tools
    const context = canvas.getContext('2d');
    context.fillStyle = '#FFFFFF';
    context.fillRect(0, 0, canvas.width, canvas.height);
};

export const useAI = async (textInput, isNSFW, referenceImage, canvas) => {
    if (!canvas) return;

    // Convert canvas to image data
    const context = canvas.getContext('2d');
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);

    // Prepare data for AI model
    const data = {
        inputs: {
            text: textInput,
            image: imageData.data,
            nsfw: isNSFW,
            reference_image: referenceImage,
        },
    };

    // Call AI model from Hugging Face
    const result = await hf.textToImage({
        model: 'CompVis/stable-diffusion-v1-4',
        inputs: data,
    });

    // Update canvas with AI-generated image
    const img = new Image();
    img.src = result.image;
    img.onload = () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
};