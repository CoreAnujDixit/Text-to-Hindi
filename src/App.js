import "./App.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import useClipboard from "react-use-clipboard";
import { useState } from "react";

const App = () => {
  const [textToCopy, setTextToCopy] = useState();
  const [isCopied, setCopied] = useClipboard(textToCopy, {
    successDuration: 1000,
  });
  //DEVAD copyright
  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "hi-IN" });
  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <>
      <div className="container">
        <h2>Speech to Hindi Converter</h2>
        <br />
        <p>
          <b>Please allow the permission of Microphone..</b>
          <i class="fas fa-microphone"></i>
        </p>

        <div className="main-content" onClick={() => setTextToCopy(transcript)}>
          {transcript}
        </div>

        <div className="btn-style">
          <button onClick={setCopied} id="copyBtn">
            {isCopied ? "Copied!" : "Copy to clipboard"}
          </button>
          <button onClick={startListening} id="startBtn">
            Start Listening
          </button>
          <button onClick={SpeechRecognition.stopListening} id="stopBtn">
            Stop Listening
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
