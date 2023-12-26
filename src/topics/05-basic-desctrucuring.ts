interface AudioPlayer{
    audioVolume:number;
    songDuration:number;
    song:string;
    details:Details;
}

interface Details{
    author:string
    year:number;
}

const audioPlayer:AudioPlayer={
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author:'Ed Sheeran',
        year:2015
    }
}

const song = 'New Song';
const { song:anotherSong, songDuration:duration, audioVolume:volumen }= audioPlayer;
const {author, year}=audioPlayer.details;

// console.log('Song: ',audioPlayer.song);
console.log('Song: ',anotherSong);
// console.log('Duration: ',audioPlayer.songDuration);
console.log('Duration: ',duration);
console.log('VolumenSong: ',volumen);
// console.log('Author: ',audioPlayer.details.author);
console.log('Year: ',year);
console.log('Author: ',author);
export{}
