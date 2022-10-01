const userAPI=`https://reqres.in/api/users`
const fetchButton = document.createElement('button')
document.body.appendChild(fetchButton)
fetchButton.innerText = 'Fetch data'


fetchButton.addEventListener('click', userData )

    async function userData(){
        console.log('im here')
        try{
            const userRes= await fetch(userAPI)
            const userdata= await userRes.json()
            const userDataArray = userdata.data
           const userEmails =  userDataArray.map(user => user.email)
           const ul = document.createElement('ul');
           document.body.appendChild(ul)

           const li1 = document.createElement('li');
           const slicedArray = userEmails.slice(0,3)
           li1.innerHTML = slicedArray[0]
           ul.appendChild(li1)

           const li2 = document.createElement('li');
           li2.innerHTML = slicedArray[1]
           li1.appendChild(li2)

           const li3 = document.createElement('li');
           li3.innerHTML = slicedArray[2]
           li1.appendChild(li3)
        }
        catch(error){
            console.log(error);
        }
    
    } 