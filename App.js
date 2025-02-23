import React, { useState } from 'react';
import Canvas from './components/Canvas';
import Toolbar from './components/Toolbar';
import TextInput from './components/TextInput';
import OutputDisplay from './components/OutputDisplay';
import NSFWToggle from './components/NSFWToggle';
import ReferenceImageUpload from './components/ReferenceImageUpload';
import Collaboration from './components/Collaboration';

const App = () => {
    const [isNSFW, setIsNSFW] = useState(false);
    const [textInput, setTextInput] = useState("");
    const [referenceImage, setReferenceImage] = useState(null);

    return (
        <div>
            <TextInput setTextInput={setTextInput} />
            <NSFWToggle isNSFW={isNSFW} setIsNSFW={setIsNSFW} />
            <ReferenceImageUpload setReferenceImage={setReferenceImage} />
            <Canvas textInput={textInput} isNSFW={isNSFW} referenceImage={referenceImage} />
            <Toolbar />
            <OutputDisplay />
            <Collaboration />
        </div>
    );
};

export default App;