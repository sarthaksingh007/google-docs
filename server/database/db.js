import mongoose from 'mongoose';

const connection= async(URL)=>{
    try{
        await mongoose.connect(URL, {useUnifiedTopology:true, useNewUrlParser: true});
        console.log("database connected successfully");
    }catch(error){
        console.log("error while connecting with the database",error);
    }

}
export default connection;