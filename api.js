document.addEventListener("DOMContentLoaded", function(e){
     let openCardBtn1 = d.querySelectorAll(".openCardApi1")
     let openCardBtn2 = d.querySelectorAll(".openCardApi2")
     let openCardBtn3 = d.querySelectorAll(".openCardApi3")
     let openCardBtn4 = d.querySelectorAll(".openCardApi4")
     let openCardBtn5 = d.querySelectorAll(".openCardApi5")
     let openCardBtn6 = d.querySelectorAll(".openCardApi6")
     let openCardBtn7 = d.querySelectorAll(".openCardApi7")
     let openCardBtn8 = d.querySelectorAll(".openCardApi8")
     // Api card 1 Open
     openCardBtn1.forEach(btn1=>{
          btn1.addEventListener("click", function(e){
               d.querySelector(".api-card1").style.height = "600px"
               d.querySelector(".main-api-card1").style.display = "flex"
               d.querySelector(".bottomIconApiCard1").style.rotate = "180deg"
               d.querySelector(".bottomIconApiCard1").classList.remove("openCardApi1")


               d.querySelector(".bottomIconApiCard1").classList.add("closeCardApi1")
               d.querySelector(".closeCardApi1").addEventListener("click", function(e){
                    d.querySelector(".api-card1").style.height = "95px"
                    d.querySelector(".main-api-card1").style.display = "none"
                    d.querySelector(".bottomIconApiCard1").style.rotate = "0deg"
                    d.querySelector(".bottomIconApiCard1").classList.remove("closeCardApi1")
                    d.querySelector(".bottomIconApiCard1").classList.add("openCardApi1")
                    
                    
               })

              
          })
     })

     // Api card 2 Open
     openCardBtn2.forEach(btn2=>{
          btn2.addEventListener("click", function(e){
               d.querySelector(".api-card2").style.height = "600px"
               d.querySelector(".main-api-card2").style.display = "flex"
               d.querySelector(".bottomIconApiCard2").style.rotate = "180deg"
               d.querySelector(".bottomIconApiCard2").classList.remove("openCardApi1")


               d.querySelector(".bottomIconApiCard2").classList.add("closeCardApi2")
               d.querySelector(".closeCardApi2").addEventListener("click", function(e){
                    d.querySelector(".api-card2").style.height = "95px"
                    d.querySelector(".main-api-card2").style.display = "none"
                    d.querySelector(".bottomIconApiCard2").style.rotate = "0deg"
                    d.querySelector(".bottomIconApiCard2").classList.remove("closeCardApi1")
                    d.querySelector(".bottomIconApiCard2").classList.add("openCardApi1")
                    
                    
               })

              
          })
     })

     // Api card 3 Open
     openCardBtn3.forEach(btn3=>{
          btn3.addEventListener("click", function(e){
               d.querySelector(".api-card3").style.height = "600px"
               d.querySelector(".main-api-card3").style.display = "flex"
               d.querySelector(".bottomIconApiCard3").style.rotate = "180deg"
               d.querySelector(".bottomIconApiCard3").classList.remove("openCardApi3")


               d.querySelector(".bottomIconApiCard3").classList.add("closeCardApi3")
               d.querySelector(".closeCardApi3").addEventListener("click", function(e){
                    d.querySelector(".api-card3").style.height = "95px"
                    d.querySelector(".main-api-card3").style.display = "none"
                    d.querySelector(".bottomIconApiCard3").style.rotate = "0deg"
                    d.querySelector(".bottomIconApiCard3").classList.remove("closeCardApi3")
                    d.querySelector(".bottomIconApiCard3").classList.add("openCardApi3")
                    
                    
               })

              
          })
     })

     // Api card 4 Open
     openCardBtn4.forEach(btn4=>{
          btn4.addEventListener("click", function(e){
               d.querySelector(".api-card4").style.height = "600px"
               d.querySelector(".main-api-card4").style.display = "flex"
               d.querySelector(".bottomIconApiCard4").style.rotate = "180deg"
               d.querySelector(".bottomIconApiCard4").classList.remove("openCardApi4")


               d.querySelector(".bottomIconApiCard4").classList.add("closeCardApi4")
               d.querySelector(".closeCardApi4").addEventListener("click", function(e){
                    d.querySelector(".api-card4").style.height = "95px"
                    d.querySelector(".main-api-card4").style.display = "none"
                    d.querySelector(".bottomIconApiCard4").style.rotate = "0deg"
                    d.querySelector(".bottomIconApiCard4").classList.remove("closeCardApi4")
                    d.querySelector(".bottomIconApiCard4").classList.add("openCardApi4")
                    
                    
               })
              
          })
     })

     // Api card 5 Open
     openCardBtn5.forEach(btn5=>{
          btn5.addEventListener("click", function(e){
               d.querySelector(".api-card5").style.height = "600px"
               d.querySelector(".main-api-card5").style.display = "flex"
               d.querySelector(".bottomIconApiCard5").style.rotate = "180deg"
               d.querySelector(".bottomIconApiCard5").classList.remove("openCardApi5")


               d.querySelector(".bottomIconApiCard5").classList.add("closeCardApi5")
               d.querySelector(".closeCardApi5").addEventListener("click", function(e){
                    d.querySelector(".api-card5").style.height = "95px"
                    d.querySelector(".main-api-card5").style.display = "none"
                    d.querySelector(".bottomIconApiCard5").style.rotate = "0deg"
                    d.querySelector(".bottomIconApiCard5").classList.remove("closeCardApi5")
                    d.querySelector(".bottomIconApiCard5").classList.add("openCardApi5")
               })
              
          })
     })

     // Api card 6 Open
     openCardBtn6.forEach(btn6=>{
          btn6.addEventListener("click", function(e){
               d.querySelector(".api-card6").style.height = "400px"
               d.querySelector(".main-api-card6").style.display = "flex"
               d.querySelector(".bottomIconApiCard6").style.rotate = "180deg"
               d.querySelector(".bottomIconApiCard6").classList.remove("openCardApi6")


               d.querySelector(".bottomIconApiCard6").classList.add("closeCardApi6")
               d.querySelector(".closeCardApi6").addEventListener("click", function(e){
                    d.querySelector(".api-card6").style.height = "95px"
                    d.querySelector(".main-api-card6").style.display = "none"
                    d.querySelector(".bottomIconApiCard6").style.rotate = "0deg"
                    d.querySelector(".bottomIconApiCard6").classList.remove("closeCardApi6")
                    d.querySelector(".bottomIconApiCard6").classList.add("openCardApi6")
               })
              
          })
     })

     // Api card 7 Open
     openCardBtn7.forEach(btn7=>{
          btn7.addEventListener("click", function(e){
               d.querySelector(".api-card7").style.height = "600px"
               d.querySelector(".main-api-card7").style.display = "flex"
               d.querySelector(".bottomIconApiCard7").style.rotate = "180deg"
               d.querySelector(".bottomIconApiCard7").classList.remove("openCardApi7")


               d.querySelector(".bottomIconApiCard7").classList.add("closeCardApi7")
               d.querySelector(".closeCardApi7").addEventListener("click", function(e){
                    d.querySelector(".api-card7").style.height = "95px"
                    d.querySelector(".main-api-card7").style.display = "none"
                    d.querySelector(".bottomIconApiCard7").style.rotate = "0deg"
                    d.querySelector(".bottomIconApiCard7").classList.remove("closeCardApi7")
                    d.querySelector(".bottomIconApiCard7").classList.add("openCardApi7")
               })
              
          })
     })

     // Api card 6 Open
     openCardBtn8.forEach(btn8=>{
          btn8.addEventListener("click", function(e){
               d.querySelector(".api-card8").style.height = "600px"
               d.querySelector(".main-api-card8").style.display = "flex"
               d.querySelector(".bottomIconApiCard8").style.rotate = "180deg"
               d.querySelector(".bottomIconApiCard8").classList.remove("openCardApi8")


               d.querySelector(".bottomIconApiCard8").classList.add("closeCardApi8")
               d.querySelector(".closeCardApi8").addEventListener("click", function(e){
                    d.querySelector(".api-card8").style.height = "95px"
                    d.querySelector(".main-api-card8").style.display = "none"
                    d.querySelector(".bottomIconApiCard8").style.rotate = "0deg"
                    d.querySelector(".bottomIconApiCard8").classList.remove("closeCardApi8")
                    d.querySelector(".bottomIconApiCard8").classList.add("openCardApi8")
               })
              
          })
     })









     //copy btns api card
     // link1
     d.querySelector(".copyBtn1").addEventListener("click", function(e){
          let copyText = d.querySelector(".copyTextLink1").innerText        
          d.querySelector(".api-card-link-copied-container").classList.add("copiedAnm")

           // Copy the text inside the text field
          navigator.clipboard.writeText(copyText);

          setTimeout(()=>{
               d.querySelector(".api-card-link-copied-container").style.top = "-100px"
               setTimeout(()=>{
                    d.querySelector(".api-card-link-copied-container").classList.remove("copiedAnm")
                    d.querySelector(".api-card-link-copied-container").style.top = "-200px"
               },500)
          },300)
     })
     // link2
     d.querySelector(".copyBtn2").addEventListener("click", function(e){
          let copyText = d.querySelector(".copyTextLink2").innerText        
          d.querySelector(".api-card-link-copied-container").classList.add("copiedAnm")

           // Copy the text inside the text field
          navigator.clipboard.writeText(copyText);

          setTimeout(()=>{
               d.querySelector(".api-card-link-copied-container").style.top = "-100px"
               setTimeout(()=>{
                    d.querySelector(".api-card-link-copied-container").classList.remove("copiedAnm")
                    d.querySelector(".api-card-link-copied-container").style.top = "-200px"
               },500)
          },300)
     })
     // link3
     d.querySelector(".copyBtn3").addEventListener("click", function(e){
          let copyText = d.querySelector(".copyTextLink3").innerText        
          d.querySelector(".api-card-link-copied-container").classList.add("copiedAnm")

           // Copy the text inside the text field
          navigator.clipboard.writeText(copyText);

          setTimeout(()=>{
               d.querySelector(".api-card-link-copied-container").style.top = "-100px"
               setTimeout(()=>{
                    d.querySelector(".api-card-link-copied-container").classList.remove("copiedAnm")
                    d.querySelector(".api-card-link-copied-container").style.top = "-200px"
               },500)
          },300)
     })
     // link4
     d.querySelector(".copyBtn4").addEventListener("click", function(e){
          let copyText = d.querySelector(".copyTextLink4").innerText        
          d.querySelector(".api-card-link-copied-container").classList.add("copiedAnm")

           // Copy the text inside the text field
          navigator.clipboard.writeText(copyText);

          setTimeout(()=>{
               d.querySelector(".api-card-link-copied-container").style.top = "-100px"
               setTimeout(()=>{
                    d.querySelector(".api-card-link-copied-container").classList.remove("copiedAnm")
                    d.querySelector(".api-card-link-copied-container").style.top = "-200px"
               },500)
          },300)
     })
     // link5
     d.querySelector(".copyBtn5").addEventListener("click", function(e){
          let copyText = d.querySelector(".copyTextLink5").innerText        
          d.querySelector(".api-card-link-copied-container").classList.add("copiedAnm")

           // Copy the text inside the text field
          navigator.clipboard.writeText(copyText);

          setTimeout(()=>{
               d.querySelector(".api-card-link-copied-container").style.top = "-100px"
               setTimeout(()=>{
                    d.querySelector(".api-card-link-copied-container").classList.remove("copiedAnm")
                    d.querySelector(".api-card-link-copied-container").style.top = "-200px"
               },500)
          },300)
     })
     // link6
     d.querySelector(".copyBtn6").addEventListener("click", function(e){
          let copyText = d.querySelector(".copyTextLink6").innerText        
          d.querySelector(".api-card-link-copied-container").classList.add("copiedAnm")

           // Copy the text inside the text field
          navigator.clipboard.writeText(copyText);

          setTimeout(()=>{
               d.querySelector(".api-card-link-copied-container").style.top = "-100px"
               setTimeout(()=>{
                    d.querySelector(".api-card-link-copied-container").classList.remove("copiedAnm")
                    d.querySelector(".api-card-link-copied-container").style.top = "-200px"
               },500)
          },300)
     })
     // link7
     d.querySelector(".copyBtn7").addEventListener("click", function(e){
          let copyText = d.querySelector(".copyTextLink7").innerText        
          d.querySelector(".api-card-link-copied-container").classList.add("copiedAnm")

           // Copy the text inside the text field
          navigator.clipboard.writeText(copyText);

          setTimeout(()=>{
               d.querySelector(".api-card-link-copied-container").style.top = "-100px"
               setTimeout(()=>{
                    d.querySelector(".api-card-link-copied-container").classList.remove("copiedAnm")
                    d.querySelector(".api-card-link-copied-container").style.top = "-200px"
               },500)
          },300)
     })
     // link8
     d.querySelector(".copyBtn8").addEventListener("click", function(e){
          let copyText = d.querySelector(".copyTextLink8").innerText        
          d.querySelector(".api-card-link-copied-container").classList.add("copiedAnm")

          // Copy the text inside the text field
          navigator.clipboard.writeText(copyText);

          setTimeout(()=>{
               d.querySelector(".api-card-link-copied-container").style.top = "-100px"
               setTimeout(()=>{
                    d.querySelector(".api-card-link-copied-container").classList.remove("copiedAnm")
                    d.querySelector(".api-card-link-copied-container").style.top = "-200px"
               },500)
          },300)
     })
})