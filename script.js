function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
}

document.addEventListener("DOMContentLoaded", function(event) {
        var messageBox = document.querySelector('.message-box');
        var color = getRandomColor();
        messageBox.style.backgroundColor = color;
});
