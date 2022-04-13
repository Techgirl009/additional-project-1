var music = "";
function preload()
{
	music = loadSound("music1.mp3");
}

function play()
{
     music.play();	
}
//Define pause_music() function which is called on click of "Pause Music" button and write code to pause the audio from playing inside this function (Hint: use p5 pause() function to stop the audio)
function pause_music()
{
     music.pause();	
}


function setup(){
}