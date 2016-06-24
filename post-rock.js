/*
lastfm.artist.getInfo({artist: 'The xx'}, {success: function(data){
    console.log(data);
}, error: function(code, message){
    console.log(code, message);
}});
*/

lastfm.tag.getTopArtists({tag: 'post-rock'}, {success: function(data){
    data.topartists.artist.forEach(function(item){
        var name = item.name;
        var tags = null;
        lastfm.artist.getTags({artist: name}, {success: function(data){ 
            console.log(data);
        }, error: function(code, message){
            console.log(code, message);
        }});
        console.warn(name);
        console.log(tags);

    })
}, error: function(code, message){
    console.log(code, message);
}});
