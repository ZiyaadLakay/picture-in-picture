const videoElement = $('#video')[0]

// Prompt User to Select a Media Stream, then play
const selectMediaStream = async ()=> {
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    }
    catch(error){
        console.log('Ooops ! cannot get Stream :', error)
    }
}

// ON button click Event Listener
$('#button').on('click', async () =>{
    try {
        // Disable Button
        $("#button" ).prop( "disabled", true);

        // Start Picture in Picture
        await videoElement.requestPictureInPicture();

        // Reset Button
        $("#button" ).prop( "disabled", true);
    } catch (error) {
        console.log('could not start player', error)
    }
})
// on Load
selectMediaStream();