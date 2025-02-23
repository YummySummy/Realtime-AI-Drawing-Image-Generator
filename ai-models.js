import { HfInference } from '@huggingface/inference';

const hf = new HfInference('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');

export const loadModel = async (modelName) => {
    try {
        const model = await hf.loadModel(modelName);
        return model;
    } catch (error) {
        console.error('Error loading model:', error);
        throw error;
    }
};

export const generateImage = async (model, inputs) => {
    try {
        const result = await model(inputs);
        return result;
    } catch (error) {
        console.error('Error generating image:', error);
        throw error;
    }
};