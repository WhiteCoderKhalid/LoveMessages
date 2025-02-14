
function generateMessage() {
    const name = document.getElementById('nameInput').value;
    const message = document.getElementById('messageInput').value;
    const messageBox = document.getElementById('messageBox');

    if (name && message) {
        messageBox.innerHTML = `<span style='font-size: 32px; font-weight:bold; color:#ff4d6d;'>💖 Dear ${name},</span><br> 
                                <span style='font-size: 24px; font-style: italic;'>${message} 💕</span>`;
        messageBox.style.display = 'block';
    } else {
        alert("Please enter both a name and message!");
    }
}

function downloadNote() {
    const messageBox = document.getElementById('messageBox');

    if (!messageBox.innerHTML.trim()) {
        alert("Please generate a love note before downloading.");
        return;
    }

    setTimeout(() => {
        html2canvas(messageBox, {
            backgroundColor: null,
            scale: 5,  // High resolution for sharp text
            useCORS: true
        }).then(canvas => {
            let link = document.createElement('a');
            link.download = 'love-note.png';
            link.href = canvas.toDataURL("image/png");
            link.click();
        });
    }, 500);
}