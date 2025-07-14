import { useState, useRef, useCallback } from "react";

export const useRecordVoice = () => {
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [recording, setRecording] = useState(false);
  const chunks = useRef([]);
  const [transcript, setTranscript] = useState("");
  const [isSpeechRecognitionSupported, setIsSpeechRecognitionSupported] =
    useState(false);
  const speechRecognition = useRef(null);

  const initSpeechRecognition = useCallback(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    speechRecognition.current = new SpeechRecognition();
    speechRecognition.current.continuous = true;
    speechRecognition.current.interimResults = true;
    speechRecognition.current.onresult = (event) => {
      const currentTranscript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
      setTranscript(currentTranscript); // Concatenate new results
    };

    speechRecognition.current.onerror = (event) => {
      // console.log("Speech recognition error", event.error);
    };
    setIsSpeechRecognitionSupported(true);
  }, []);

  const initMediaRecorder = useCallback(async () => {
    if (navigator.mediaDevices) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        const newMediaRecorder = new MediaRecorder(stream);
        newMediaRecorder.onstart = () => {
          chunks.current = [];
        };
        newMediaRecorder.ondataavailable = (ev) => {
          chunks.current.push(ev.data);
        };
        newMediaRecorder.onstop = () => {
          const audioBlob = new Blob(chunks.current, { type: "audio/wav" });
          // console.log(audioBlob, "audioBlob");
        };
        setMediaRecorder(newMediaRecorder);
      } catch (err) {
        console.error("Error accessing media devices:", err);
      }
    }
  }, []);

  const initializeRecording = useCallback(async () => {
    initSpeechRecognition();
    await initMediaRecorder();
  }, [initMediaRecorder, initSpeechRecognition]);

  const startRecording = () => {
    // Stop the existing speech recognition session if it's running
    if (speechRecognition.current && recording) {
      speechRecognition.current.stop();
      // Optionally, reset the transcript here if you want to clear the previous result
      setTranscript("");
    }

    // Proceed to check and initialize if necessary
    if (!mediaRecorder) {
      // console.log("Initializing recording...");
      initializeRecording().then(() => {
        // Ensure mediaRecorder and speechRecognition are ready
        if (
          mediaRecorder &&
          isSpeechRecognitionSupported &&
          speechRecognition.current
        ) {
          try {
            mediaRecorder.start();
            speechRecognition.current.start();
            setRecording(true);
          } catch (error) {
            console.error("Error starting recording:", error);
          }
        }
      });
    } else if (
      mediaRecorder &&
      isSpeechRecognitionSupported &&
      speechRecognition.current
    ) {
      // If already initialized, just start recording and speech recognition
      try {
        mediaRecorder.start();
        speechRecognition.current.start();
        setRecording(true);
      } catch (error) {
        console.error("Error starting recording:", error);
      }
    }
  };

  const stopRecording = () => {
    if (
      mediaRecorder &&
      isSpeechRecognitionSupported &&
      speechRecognition.current
    ) {
      mediaRecorder.stop();
      speechRecognition.current.stop();
      setRecording(false);
    }
  };

  return {
    recording,
    startRecording,
    stopRecording,
    transcript,
    isSpeechRecognitionSupported,
  };
};
