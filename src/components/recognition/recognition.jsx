import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Dictaphone = (props) => {
	const [checkon, setCheckOn] = useState(false);
	const { transcript, resetTranscript } = useSpeechRecognition();

	useEffect(() => {
		SpeechRecognition.startListening({ continuous: true });
		SpeechRecognition.startListening({ language: 'en-US' });
		console.log('listening starts');
	}, []);

	return (
		<div>
			<div onClick={SpeechRecognition.startListening}>{props.icon}</div>
			<div onClick={SpeechRecognition.stopListening}>{props.icon2}</div>
			{/* <button onClick={resetTranscript}>Reset</button> */}
			<p>{transcript}</p>
		</div>
	);
};
export default Dictaphone;
