const userAPI=`https://reqres.in/api/users`
//@ts_ignore
async function userData(){
    try{
        const userRes= await fetch(userAPI)
        const userdata= await userRes.json()
        console.log(userdata.data[0].email)
        console.log(userdata.data[1].email)
        console.log(userdata.data[2].email)

        //Promise.all  [

    }
    catch(error){
        console.log(error);
    }

}
userData();