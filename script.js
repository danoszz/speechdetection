window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const background = document.querySelector('body');
const recognition = new SpeechRecognition();
recognition.interimResults = true;

recognition.addEventListener('result', e => {
  console.log(e.results);
  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

    if (transcript.includes('red')) {
      background.style.backgroundColor = 'red';
    } else if (transcript.includes('blue')) {
      background.style.backgroundColor = 'blue';
    } else if (transcript.includes('black')) {
      background.style.backgroundColor = 'black';
    }
    console.log(transcript);
});

recognition.addEventListener('end', recognition.start);
recognition.start();
