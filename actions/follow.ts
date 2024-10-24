"use server"

export const onFollow = async (id : string) =>{
   try{
    console.log("I am the same as an API call",id);
   }catch{
    throw new Error("Internal Error")
   }
}