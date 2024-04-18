const btn1=document.getElementById("btne")
const url="https://api.quotable.io/random"
const contentel=document.getElementById("quotes")
const auth=document.getElementById("writer")



 async function getquote()
    {
    try{
      const val = await fetch(url);
      const data = await val.json();
      const quote=data.content;
      const author=data.author;
      contentel.innerText=quote;
      auth.innerText= " ~ " +author;
      console.log(data)
    }
    catch(error)
    {
        console.log(error)
        contentel.innerText="No Internet"
    }


    }
    getquote();


btn1.addEventListener("click",getquote);