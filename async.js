const users=new Request("https://jsonplaceholder.typicode.com/users/")
fetch(users)
.then((response)=>response.json())
.then((json)=>console.log(json))