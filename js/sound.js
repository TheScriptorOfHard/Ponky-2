const playlist = [
    'https://files.catbox.moe/7nhos0.mp3',
    'https://files.catbox.moe/wj6n78.mp3',
    'https://files.catbox.moe/dc7d3t.mp3',
    'https://files.catbox.moe/a7obc8.mp3',
    'https://files.catbox.moe/5x2cp5.mp3'
];

let index = 0;
const audio = new Audio(playlist[index]);
const soundToggle = document.getElementById('sound-toggle');

function applySoundState(enabled) {
    if (enabled) {
        audio.muted = false;
        soundToggle.textContent = '🔊 Sound: ON';
        soundToggle.classList.remove('off');
    } else {
        audio.muted = true;
        soundToggle.textContent = '🔇 Sound: OFF';
        soundToggle.classList.add('off');
    }
}

document.addEventListener('click', () => {
    if (!audio.muted) audio.play().catch(() => {});
}, { once: true });

soundToggle.addEventListener('click', () => {
    const isEnabled = audio.muted;
    applySoundState(isEnabled);
    if (isEnabled) audio.play().catch(() => {});
});

audio.addEventListener('ended', () => {
    index = (index + 1) % playlist.length;
    audio.src = playlist[index];
    audio.play();
});