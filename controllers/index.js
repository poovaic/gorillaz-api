const Song = require('../models/song')
//to create a song
const createSong = async (req, res) => {
  try {
    const song = await new Song(req.body)
    await song.save()
    return res.status(201).json({
      song,
    })

  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}
//to get all songs
const getAllSongs = async (req,res)=>{
    try{
        const songs = await Song.find()
        return res.status(200).json({songs})

    } catch(error){
        return res.status(500).send(error.message)
    }
}
//to get a single song
const getSongById= async(req,res)=> {
    try{
        const{id} = req.params;
        const song=await Song.findById(id)
        if(song){
            return res.status(200).json({song})
        }
        return res.status(404).send('Song not found');

    }catch(error){
        return res.status(500).send(error.message)
    }
}
//crud - u - update. this will not be async. updates are not written async. it has to happen instanly
const updateSong =(req,res)=>{
    try{
        const{id} = req.params
        Song.findByIdAndUpdate(id,req.body,{new:true},(err,song)=>{
            //edge cases for update goes here
            if(err!==null){
            console.log(err,"error")
        //if the entry is not found, iam gonna send a 404
            res.status(404).send(message)

            }else{
            console.log(song)
            res.json(song)
            }
        })



    }catch(error){
        return res.status(500).send(error.message)
    }
}

//CRUD-DELETE

const deleteSong = async(req,res)=>{
try{
const{id} = req.params
const deleted = await Song.findByIdAndDelete(id)
if(deleted){
    return res.status(200).send("Song deleted")
}
//throwing new error
throw new Error("Song not found")

}catch(error){
    return res.status(500).send(error.message)

}

}

module.exports = {
  createSong,
  getAllSongs,
  getSongById,
  updateSong,
  deleteSong,
}




