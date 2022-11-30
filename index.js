document.querySelector(".sun").addEventListener("click",()=>{
     document.querySelector(".moon").classList.remove("none")
     document.querySelector("body").classList.remove("body")
     document.querySelector("body").classList.add("body-sub")
     document.querySelector("#inputs").classList.add("input-field-sub")
     document.querySelector("#inputs").classList.remove("input-field")
     document.querySelector("#first-sect").classList.remove("first-section")
     document.querySelector("#first-sect").classList.add("first-section-sub")
     document.querySelector("article").classList.remove("article")
     document.querySelector("article").classList.add("article-sub")
     document.querySelector(".description").style.background="hsl(236, 33%, 92%)"
     document.querySelector(".sun").classList.add("none")   
})

document.querySelector(".moon").addEventListener("click",()=>{
    document.querySelector(".moon").classList.add("none")
    document.querySelector("body").classList.add("body")
    document.querySelector("body").classList.remove("body-sub")
    document.querySelector("#inputs").classList.remove("input-field-sub")
     document.querySelector("#inputs").classList.add("input-field")
     document.querySelector("#first-sect").classList.add("first-section")
     document.querySelector("#first-sect").classList.remove("first-section-sub")
     document.querySelector("article").classList.add("article")
     document.querySelector("article").classList.remove("article-sub")
     document.querySelector(".description").style.background="hsl(235, 24%, 19%)"
    document.querySelector(".sun").classList.remove("none")   
})

document.querySelector("input").addEventListener("keypress",(e)=>{
    if (e.key==="Enter"){
        
     let article = document.querySelector("article");
     let inputValue= document.querySelector("input").value

     let mewElem = document.createElement("div");
     mewElem.classList.add("first-sec-divv")
     mewElem.innerHTML= `
     <div>
        <div class="radio-sub radd">
          <img src="images/icon-check.svg" class="checkbox-subb xx" alt="">
        </div>
         <p class="ppp">`+inputValue+`</p>
       </div>
     <img src="images/icon-cross.svg" class="x-iconn" alt="">`

    
     document.querySelector("#first-sect").appendChild(mewElem)
     document.querySelector("input").value=null
     document.querySelector("#add-num").innerHTML++

     let radioLength = document.querySelectorAll(".rad").length

        for (let i = 0; i<radioLength; i++){
            document.querySelectorAll(".radd")[i].addEventListener("click",()=>{
                document.querySelectorAll(".radd")[i].classList.toggle("radioo")
                document.querySelectorAll(".xx")[i].classList.toggle("checkbox-subb")
                document.querySelectorAll(".xx")[i].classList.toggle("checkboxx")
                document.querySelectorAll(".ppp")[i].classList.toggle("pa")
                document.querySelector("#add-num").innerHTML--
            })

            document.querySelectorAll(".x-iconn")[i].addEventListener("click",function(){
                if (this===document.querySelectorAll(".x-iconn")[i]){
                    document.querySelectorAll(".first-sec-divv")[i].style.display="none"
                    document.querySelector("#add-num").innerHTML--
                }
            })
        }
     
    }else{
        return null
    } 
})

let cancel = document.querySelectorAll(".x-icon");
 
for (let i=0;i<cancel.length;i++){
    cancel[i].addEventListener("click",function(){
        console.log(this)
                if (this===document.querySelectorAll(".x-icon")[0]){
            document.querySelectorAll(".first-sec-div")[0].style.display="none"

        } else if(this===document.querySelectorAll(".x-icon")[1]){
            document.querySelectorAll(".first-sec-div")[1].style.display="none"

        }else if(this===document.querySelectorAll(".x-icon")[2]){
            document.querySelectorAll(".first-sec-div")[2].style.display="none"

        }else if(this===document.querySelectorAll(".x-icon")[3]){
            document.querySelectorAll(".first-sec-div")[3].style.display="none"

        }else if(this===document.querySelectorAll(".x-icon")[4]){
            document.querySelectorAll(".first-sec-div")[4].style.display="none"

        }else if(this===document.querySelectorAll(".x-icon")[5]){
            document.querySelectorAll(".first-sec-div")[5].style.display="none"

        }
    })
}

let radioLength = document.querySelectorAll(".rad").length

for (let i = 0; i<radioLength; i++){
    document.querySelectorAll(".rad")[i].addEventListener("click",()=>{
        document.querySelectorAll(".rad")[i].classList.toggle("radio")
        document.querySelectorAll(".x")[i].classList.toggle("checkbox-sub")
        document.querySelectorAll(".x")[i].classList.toggle("checkbox")
        document.querySelectorAll(".para")[i].classList.toggle("p")
        document.querySelector("#add-num").innerHTML--
    })
}
