var arr=[
    {dp:"https://images.unsplash.com/photo-1597586124394-fbd6ef244026?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", story:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHw4MzQyMDM3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {dp:"https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", story:"https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OXwzNDMwMjgwfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {dp:"https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8MzQzMDI4MHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60", story:"https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTB8MzQzMDI4MHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"},
    {dp:"https://images.unsplash.com/photo-1509503643053-8fc818177382?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTF8MzQzMDI4MHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60", story:"https://images.unsplash.com/photo-1504276048855-f3d60e69632f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Nnw4MzQyMDM3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {dp:"https://images.unsplash.com/photo-1568739253582-afa48fbcea47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwzNDMwMjgwfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", story:"https://images.unsplash.com/photo-1568739554935-6f313c5d4075?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwzNDMwMjgwfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}
]

var clutter="";

arr.forEach(function(elem, index){

    clutter += `  <div class="story">
    <div class="inner">
        <img id="${index}" src="${elem.dp}" alt="">
    </div>
</div>`;
})

document.querySelector("#stories").innerHTML=clutter;

var percent=0;

document.querySelector("#stories").
addEventListener("click", function(dets){
    console.log(arr[dets.target.id]);
    document.querySelector("#fs img").setAttribute("src", arr[dets.target.id].story);
    document.querySelector("#fs").style.display="flex";
   

   timer = setInterval(function(){

    if(percent>100)
    {
        clearInterval(timer);
        percent=0;
    }
     percent++;
     document.querySelector("#progmaker").style.width= `${percent}%`;
   },30)

    setTimeout(function(){
        document.querySelector("#fs").style.display="none";
    },3000)

})