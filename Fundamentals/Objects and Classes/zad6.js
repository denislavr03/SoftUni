function songs(arr) {
    let numOfSongs = arr.shift();
    let lastEl = arr.pop();
    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }
    let songs = [];
    for (let index = 0; index < numOfSongs; index++) {
        let [type, name, time] = arr[index].split('_');
        let song = new Song(type, name, time);
        songs.push(song);
    }
    if (lastEl === "all") {
        songs.forEach((i) => console.log(i.name));
    }
    else {
        let filteredSongs = songs.filter((i) => i.type === lastEl);
        filteredSongs.forEach((i) => console.log(i.name));
    }
}


songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);