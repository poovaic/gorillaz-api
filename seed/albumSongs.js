const db = require('../db')
const Album = require('../models/album')
const Song = require('../models/song')


db.on('error',console.error.bind(console,'MongoDB connection error'))

const main = async()=>{
    const album1= await new Album({ name:"Gorillaz",
        year_of_release:"2001",
        genre:"Punk rock",
        label:"Parlophone",
        image:"https://en.wikipedia.org/wiki/Gorillaz_(album)#/media/File:GorillazAlbum.jpg",
        })
        album1.save()

        const album2 = await new Album({ name:"Demon Days",
        year_of_release:"2005",
        genre:"Alternative rock",
        label:"Parlophone",
        image:"https://en.wikipedia.org/wiki/Demon_Days#/media/File:Gorillaz_Demon_Days.PNG",
        })
        album2.save()

        const album3 = await new Album({ name:"Plastic Beach",
        year_of_release:"2010",
        genre:"Electronic",
        label:"Parlophone",
        image:"https://en.wikipedia.org/wiki/Plastic_Beach#/media/File:Plasticbeach452.jpg",
        })
        album3.save()

        const album4 = await new Album({ name:"The Fall",
        year_of_release:"2010",
        genre:"Electronic",
        label:"Parlophone",
        image:"https://en.wikipedia.org/wiki/The_Fall_(Gorillaz_album)#/media/File:The_Fall_(Gorillaz_album)_cover.jpg",
        })
        album4.save()

        const album5 = await new Album({ name:"Humanz",
        year_of_release:"2017",
        genre:"Electronic",
        label:"Parlophone",
        image:"https://en.wikipedia.org/wiki/Humanz#/media/File:HumanzGorillaz.png",
        })
        album5.save()

        const album6 = await new Album({ name:"The Now Now",
        year_of_release:"2018",
        genre:"Synth-pop",
        label:"Parlophone",
        image:"https://en.wikipedia.org/wiki/The_Now_Now#/media/File:Gorillaz_-_The_Now_Now.jpg",
        })
        album6.save()

        const album7 = await new Album({ name:"Song Machine, Season One: Strange Timez",
        year_of_release:"2020",
        genre:"Alternative Rock",
        label:"Parlophone",
        image:"https://en.wikipedia.org/wiki/Song_Machine,_Season_One:_Strange_Timez#/media/File:Song_Machine_Season_One_Strange_Timez.png",
        })
        album7.save()
        

    const songs = [
        { 
        title:"Re-Hash",
        description:"https://gorillaz.fandom.com/wiki/Re-Hash",
        length:"3:41",
        lyrics:"It's a sweet sensation, over the dub.Oh what a situation, that don't want to stop.It's the drugstore soulboy, over the dub.With the sweetest inspiration, we don't want to stop.Cause' it's the money or stop.It's the money or stop, (Yeah Yeah).It's the money or stop,It's the money or stop,It's the money or stop,It's the money or stop,It's the money or stop,It's the money or stop,",
        artist:"gorillaz",
        album:album1._id
        },

        { 
        title:"Tomorrow Comes Today",
        description:"https://gorillaz.fandom.com/wiki/Tomorrow_Comes_Today",
        length:"3:14",
        lyrics:"Everybody's here with me.Got no camera to see.Don't think I'm all in this world.The camera won't let me go.The verdict don't love our soul.The digital won't let me go.Yeah, yeah, yeah.I'll pay (yeah, yeah, yeah).When tomorrow.Tomorrow comes today",
        artist:"gorillaz",
        album:album1._id
        },

        { 
        title:"Last Living Souls",
        description:"https://gorillaz.fandom.com/wiki/Last_Living_Souls",
        length:"3:11",
        lyrics:"Are we the last living souls?Are we the last living souls?Are we the last living souls?Are we the last living souls?Take a gun, or how you say That's no way to behave.But just as long, you need the gear.To sing a song that doesn't sin.It grows. You know?Are we the last living souls?Are we the last living souls?Are we the last to get away?",
        artist:"gorillaz",
        album:album2._id
        },

        { 
        title:"Dirty Harry",
        description:"https://gorillaz.fandom.com/wiki/Dirty_Harry",
        length:"3:44",
        lyrics:"I need a gun to keep myself among.The poor people are burning in the sun.But they ain't got a chance.They ain't got a chance.I need a gun.'Cause all I do is dance.'Cause all I do is dance.I need a gun to keep myself among.The poor people are burning in the sun.They ain't got a chance.They ain't got a chance.I need a gun.'Cause all I do is dance.'Cause all I do is dance",
        artist:"gorillaz",
        album:album2._id
        },

        { 
        title:"Rhinestone Eyes",
        description:"https://gorillaz.fandom.com/wiki/Plastic_Beach",
        length:"3:20",
        lyrics:"I'm a scary gargoyle on a tower.That you made with plastic power.Your rhinestone eyes are like factories far away.Where the paralytic dreams that we all seem to keep.Drive on engines til they weep with future pixels in factories far away.So call the mainland from the beach.All parties now washed up in bleach.The waves are rising for this time of year.And nobody knows what to do with the heat.Under sunshine pylons we'll meet.While rain is falling like rhinestones from the sky.I got a feeling now my heart is frozen.all the bowses and the growses have been after native in my soul.I prayed on the immovable yeah,clinging to the atoms of rocks.Seasons the adjustments signs of change.I can't see now she said taxi.Now red light is all I can take.This dawn brings strange loyalties and skies.I'm a scary gargoyle on a tower.That you made with plastic power.Your rhinestone eyes are like factories far away.Here we go again.That's electric.That's electric.Helicopters fly over the beach.Same time every day same routine.Clear target in summer when skies are blue.It's part of the noise when winter comes.It reverberates in my lungs.Natures corrupted in factories far away. Here we go again.That's electric.Your love's like rhinestones falling from the sky.That's electric.With future pixels in factories far away.Here we go again.That's electric.Your love's like rhinestones falling from the sky.That's electric.With future pixels in factories far away.Here we go again",
        artist:"gorillaz",
        album:album3._id
        },

        { 
        title:"Saturnz Barz ",
        description:"https://gorillaz.fandom.com/wiki/Saturnz_Barz",
        length:"3:01",
        lyrics:"All my life.Mi ever have mi gun so mi haffi move sharp like mi knife.All my life.Mi pray say when mi get wealthy a ma a mi wife.All my life.The system force mi.Fi be a killer just like Rodney Price.All my life.No, all my life" ,
        artist:"gorillaz",
        album:album5._id
        },

        { 
        title:"PAC-MAN",
        description:"https://gorillaz.fandom.com/wiki/PAC-MAN",
        length:"3:13",
        lyrics:"No stressin' out, No stressin' out.No stressin' out, No stressin' out.No stressin' out, No stressin' out.No stressin' out, No stressin' out.No stressin' out, No stressin' out.No stressin' out, No stressin' out.No stressin' out, No stressin' out.No stressin' out" ,
        artist:"gorillaz",
        album:album7._id
        },
        
    ]

    await Song.insertMany(songs)
    console.log('Created Songs successfully!')
}

const run = async()=>{
    await main()
    db.close()
}
run()