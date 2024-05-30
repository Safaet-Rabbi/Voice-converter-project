// Check for browser support
if ('speechSynthesis' in window) {
    console.log('Speech Synthesis API supported.');

    function speakText() {
        // Get the text input value
        const textInput = document.getElementById('text-input').value;

        // Create a new speech synthesis utterance
        const utterance = new SpeechSynthesisUtterance(textInput);

        // Set options (optional)
        utterance.lang = 'en-US';  // Language
        utterance.pitch = 1;       // Pitch (0 to 2, default is 1)
        utterance.rate = 1;        // Rate (0.1 to 10, default is 1)
        utterance.volume = 1;      // Volume (0 to 1, default is 1)

        // Speak the text
        window.speechSynthesis.speak(utterance);
    }
} else {
    console.log('Speech Synthesis API not supported.');
    alert('Sorry, your browser does not support the Speech Synthesis API.');
}
 // Add event listener for the 'Enter' key
 document.getElementById('text-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();  // Prevent the default form submission behavior
        speakText();
    }
});