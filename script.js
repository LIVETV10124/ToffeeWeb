document.addEventListener('DOMContentLoaded', () => {
    const channelsGrid = document.getElementById('channels-grid');
    const videoPlayer = document.getElementById('video-player');

    // Load JSON data
    fetch('channels.json')
        .then(response => response.json())
        .then(data => {
            data.channels.forEach(channel => {
                const channelCard = document.createElement('div');
                channelCard.className = 'channel-card';

                // Channel logo, name, and play button
                channelCard.innerHTML = `
                    <img src="${channel.logo}" alt="${channel.name} Logo">
                    <p>${channel.name}</p>
                    <button onclick="playChannel('${channel.link}', '${channel.cookie}')">Play</button>
                `;
                channelsGrid.appendChild(channelCard);
            });
        });

    // Function to play a channel
    window.playChannel = (link, cookie) => {
        videoPlayer.src = link;
        videoPlayer.setAttribute('crossorigin', 'use-credentials');

        // Append cookies to the request
        document.cookie = cookie;
        videoPlayer.load();
        videoPlayer.play();
    };
});
