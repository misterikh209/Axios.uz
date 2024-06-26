document.addEventListener("DOMContentLoaded", async function (e) {
     if(localStorage.getItem("userId") != undefined && localStorage.getItem("token") != undefined){
          location.href = "loginSucces.html"
     }
     let d = document
     let inputs = document.querySelectorAll("input")
     inputs.forEach((inputAll)=>{
          inputAll.setAttribute("autocomplete", "off")
     })
     let container = d.querySelector(".container1")
     let container2 = d.querySelector(".container2")
     let offset = 0
     
     let req = await fetch("https://axios.uz/index.php/api/getMovies", {
          method: "GET"
     })   
     let resp = await req.json()

     resp.forEach(function(mov) {
          

          let card = d.createElement("div")
          card.classList.add("card_movie")
          card.innerHTML = `
          <img id="movieCardImg" src="./images/movie.png" alt="">
               <div class="bottom-about-card">
                    <div class="card-top-part">
                         <h1>${mov.title}</h1>
                         <div class="card-top-btns">
                              <button id="comentsContainerFilm"><ion-icon name="play-circle"></ion-icon></button>
                              <button><ion-icon name="trash"></ion-icon></button>
                         </div>
                    </div>
                    <p><span>Release:</span> ${mov.release}</p>
                    <p><span>Duration:</span> ${mov.duration}</p>
                    <p><span>Actors:</span> ${mov.actors.map(ac=>ac.name)}</p>
                    <p><span>Description: <br></span> ${mov.description}</p>
          </div>
          `
          container.append(card)

          let openComentsContainerBtn = document.querySelectorAll("#comentsContainerFilm")
          openComentsContainerBtn.forEach((btnComent)=>{
               btnComent.addEventListener("click", function(e){
                    document.querySelector(".coments-container").style.display = "flex"
                    document.body.style.overflow = "hidden"

                    document.querySelector(".coments-container").innerHTML = ``
                    document.querySelector(".coments-container").innerHTML = `
                         <div class="coments-content">
                              <div class="movie-img-coment-top">
                                   <div class="mict-img">

                                   </div>
                                   <div class="mict-about">
                                        <h1 id="movieNameComent">Titanik</h1>
                                        <p id="movieRelizComent">Yili: 1995</p>
                                        <p id="movieGenreComent">Janr: Романтика Драмма История Мелодрамма</p>
                                        <p id="movieActorsComent">Aktyorlar: Леонардо Ди Каприо Кейт Уинслет</p>
                                        <p id="movieDurationComent">Duration: 03:14:00</p>
                    
                                        <h1>Описание</h1>
                                        <h6 id="movieOpisanionComent" style="padding-right: 50px;">Молодые влюбленные Джек и Роза находят друг друга в первом и последнем плавании «непотопляемого» Титаника. Они не могли знать, что шикарный лайнер столкнется с айсбергом в холодных водах Северной Атлантики, и их страстная любовь превратится в схватку со смертью…</h3>
                                   </div>
                              </div>
                              <div class="coment-container-bottom">
                                   <h1 style="color:#fff;">Izoh yozish uchun <span class="comentsLoginHref">ro'yhatdan o'tish</span>ingiz kerak</h1>
                              </div>
                         </div>
                    `
                    
                    d.querySelector(".comentsLoginHref").addEventListener("click", function(e){
                         d.querySelector(".coments-container").style.display = "none"
                         d.getElementById("login").click()
                    })
                    
               })
               document.body.addEventListener("click", function(e){
                    if(e.target.classList.contains("coments-container")){
                         d.querySelector(".coments-container").style.display = "none"
                    }
               })
          })

          
          // else if(offset == 1220){
          //      document.getElementById("movieCardImg").setAttribute("src", "https://w0.peakpx.com/wallpaper/982/511/HD-wallpaper-interstellar-nolan.jpg")
          // }

     })

     // carusel

     let img = document.querySelector(".carousel-main")
     document.querySelector(".next-slide").addEventListener("click", function(e){
          // right slide
          offset = offset + 1220
          img.style.left = -offset + "px"
          if (offset> 4880) {
               offset = 0
               img.style.left = -offset + "px"
          }
          // right slide
          
          // box shadow 
          let caruselBox = document.querySelector(".carousel-box")
          let playIcon = document.querySelector(".sfp-box")
          if(offset == 0) {
               caruselBox.style.boxShadow = "0 0 50px 0 rgb(184, 206, 206)"
               document.querySelector(".slideBtn1").click()
               
          }
          else if(offset == 1220) {
               caruselBox.style.boxShadow = "0 0 50px 0 rgb(118, 28, 245)"
               document.querySelector(".slideBtn2").click()
          } 
          else if(offset == 2440) {
               caruselBox.style.boxShadow = "0 0 50px 0 rgb(67, 63, 63)"
               document.querySelector(".slideBtn3").click()
          }
          else if(offset == 3660) {
               caruselBox.style.boxShadow = "0 0 50px 0 rgb(33, 137, 255)"
               document.querySelector(".slideBtn4").click()
          }
          else if(offset == 4880) {
               caruselBox.style.boxShadow = "0 0 40px 0 rgb(9, 131, 25)"
               document.querySelector(".slideBtn5").click()
          }
          // box shadow 
          
     })
     

     setInterval(()=>{
          document.querySelector(".next-slide").click()
     },5000)
     let caruselBox = document.querySelector(".carousel-box")
     document.querySelector(".preview-slide").addEventListener("click", function(e){
          offset = offset - 1220
          img.style.left = -offset + "px"
          console.log(offset);
          if (offset< 0) {
               offset = 4880
               img.style.left = -offset + "px"
          }

          // box shadow 
          
          if(offset == 0) {
               caruselBox.style.boxShadow = "0 0 50px 0 rgb(184, 206, 206)"
               document.querySelector(".slideBtn1").click()
          }
          else if(offset == 1220) {
               caruselBox.style.boxShadow = "0 0 50px 0 rgb(118, 28, 245)"
               document.querySelector(".slideBtn2").click()
          } 
          else if(offset == 2440) {
               caruselBox.style.boxShadow = "0 0 50px 0 rgb(67, 63, 63)"
               document.querySelector(".slideBtn3").click()
          }
          else if(offset == 3660) {
               caruselBox.style.boxShadow = "0 0 50px 0 rgb(33, 137, 255)"
               document.querySelector(".slideBtn4").click()
          }
          else if(offset == 4880) {
               caruselBox.style.boxShadow = "0 0 40px 0 rgb(9, 131, 25)"
               document.querySelector(".slideBtn5").click()
          }
          // box shadow 
          
     })
     

     document.querySelector(".slideBtn1").addEventListener("click", ()=>{
          document.querySelector(".slideBtn1").classList.add("active")

          document.querySelector(".slideBtn2").classList.remove("active")
          document.querySelector(".slideBtn3").classList.remove("active")
          document.querySelector(".slideBtn4").classList.remove("active")
          document.querySelector(".slideBtn5").classList.remove("active")

          caruselBox.style.boxShadow = "0 0 50px 0 rgb(184, 206, 206)"
          img.style.left = "0"
     })

     document.querySelector(".slideBtn2").addEventListener("click", ()=>{
          document.querySelector(".slideBtn2").classList.add("active")
          
          document.querySelector(".slideBtn1").classList.remove("active")
          document.querySelector(".slideBtn3").classList.remove("active")
          document.querySelector(".slideBtn4").classList.remove("active")
          document.querySelector(".slideBtn5").classList.remove("active")

          caruselBox.style.boxShadow = "0 0 50px 0 rgb(118, 28, 245)"
          img.style.left = "-1220px"
     })

     document.querySelector(".slideBtn3").addEventListener("click", ()=>{
          document.querySelector(".slideBtn3").classList.add("active")
          
          document.querySelector(".slideBtn1").classList.remove("active")
          document.querySelector(".slideBtn2").classList.remove("active")
          document.querySelector(".slideBtn4").classList.remove("active")
          document.querySelector(".slideBtn5").classList.remove("active")

          caruselBox.style.boxShadow = "0 0 50px 0 rgb(67, 63, 63)"
          img.style.left = "-2440px"
          
     })

     document.querySelector(".slideBtn4").addEventListener("click", ()=>{
          document.querySelector(".slideBtn4").classList.add("active")
          
          document.querySelector(".slideBtn1").classList.remove("active")
          document.querySelector(".slideBtn2").classList.remove("active")
          document.querySelector(".slideBtn3").classList.remove("active")
          document.querySelector(".slideBtn5").classList.remove("active")
          
          caruselBox.style.boxShadow = "0 0 50px 0 rgb(33, 137, 255)"
          img.style.left = "-3660px"
     })

     document.querySelector(".slideBtn5").addEventListener("click", ()=>{
          document.querySelector(".slideBtn5").classList.add("active")
          
          document.querySelector(".slideBtn1").classList.remove("active")
          document.querySelector(".slideBtn2").classList.remove("active")
          document.querySelector(".slideBtn3").classList.remove("active")
          document.querySelector(".slideBtn4").classList.remove("active")

          caruselBox.style.boxShadow = "0 0 40px 0 rgb(9, 131, 25)"
          img.style.left = "-4880px"
     })

     //carusel

     



     ///////////////////////////////////////////////////////////////////////
     /// Главное меню click

     let mainMenuBtn = document.getElementById("mainMenu")
     mainMenuBtn.addEventListener("click", async function (e) {
          document.getElementById("loading").style.display = "flex"
          document.body.style.overflow = "hidden"
          setTimeout(() => {
               document.getElementById("loading").style.display = "none"
               document.body.style.overflow = "auto"

          }, 300)
          d.querySelector(".carusel-cont").style.display = "flex"
          container.innerHTML = ``
          resp.forEach(mov=> {
               let card = d.createElement("div")
          card.classList.add("card_movie")
          card.innerHTML = `
          <img id="movieCardImg" src="./images/movie.png" alt="">
               <div class="bottom-about-card">
                    <div class="card-top-part">
                         <h1>${mov.title}</h1>
                         <div class="card-top-btns">
                              <button id="comentsContainerFilm"><ion-icon name="play-circle"></ion-icon></button>
                              <button><ion-icon name="trash"></ion-icon></button>
                         </div>
                    </div>
                    <p><span>Release:</span> ${mov.release}</p>
                    <p><span>Duration:</span> ${mov.duration}</p>
                    <p><span>Actors:</span> ${mov.actors.map(ac=>ac.name)}</p>
                    <p><span>Description: <br></span> ${mov.description}</p>
          </div>
          `
          container.append(card)

          let openComentsContainerBtn = document.querySelectorAll("#comentsContainerFilm")
          openComentsContainerBtn.forEach((btnComent)=>{
               btnComent.addEventListener("click", function(e){
                    document.querySelector(".coments-container").style.display = "flex"
                    document.body.style.overflow = "hidden"

                    document.querySelector(".coments-container").innerHTML = ``
                    document.querySelector(".coments-container").innerHTML = `
                         <div class="coments-content">
                              <div class="movie-img-coment-top">
                                   <div class="mict-img">

                                   </div>
                                   <div class="mict-about">
                                        <h1 id="movieNameComent">Titanik</h1>
                                        <p id="movieRelizComent">Yili: 1995</p>
                                        <p id="movieGenreComent">Janr: Романтика Драмма История Мелодрамма</p>
                                        <p id="movieActorsComent">Aktyorlar: Леонардо Ди Каприо Кейт Уинслет</p>
                                        <p id="movieDurationComent">Duration: 03:14:00</p>
                    
                                        <h1>Описание</h1>
                                        <h6 id="movieOpisanionComent" style="padding-right: 50px;">Молодые влюбленные Джек и Роза находят друг друга в первом и последнем плавании «непотопляемого» Титаника. Они не могли знать, что шикарный лайнер столкнется с айсбергом в холодных водах Северной Атлантики, и их страстная любовь превратится в схватку со смертью…</h3>
                                   </div>
                              </div>
                              <div class="coment-container-bottom">
                                   <h1 style="color:#fff;">Izoh yozish uchun <span class="comentsLoginHref">ro'yhatdan o'tish</span>ingiz kerak</h1>
                              </div>
                         </div>
                    `
                    
                    d.querySelector(".comentsLoginHref").addEventListener("click", function(e){
                         d.querySelector(".coments-container").style.display = "none"
                         d.getElementById("login").click()
                    })
                    
               })
               document.body.addEventListener("click", function(e){
                    if(e.target.classList.contains("coments-container")){
                         d.querySelector(".coments-container").style.display = "none"
                    }
               })
          })


          })
     })
     

     ///////////////////////////////////////////////////////////////////////
     /// Войти click
     d.getElementById("login").addEventListener("click", async function (e) {
          
          d.querySelector(".login_click_container").style.display = "flex"
          
          
          
     
          d.querySelector(".login_click_container").addEventListener("click", function (e) {
               if (e.target.classList.contains("login_click_container")) {
                    
                    
                    d.querySelector(".login_click_container").style.display = "none"
                    
                    
               }
          })
     
          ///////animation
          let animation = document.querySelector(".weather-nav")
          setTimeout(() => {
               animation.style.top = "-30px"
          }, 1000)
     
          document.querySelector("#forms_login").addEventListener("submit", async function (e) {
     
     
               //loading animation 
     
               document.getElementById("loading").style.display = "flex"
               document.body.style.overflow = "hidden"
               d.querySelector(".login_click_container").style.display = "none"
               setTimeout(() => {
                    document.getElementById("loading").style.display = "none"
                    document.body.style.overflow = "auto"
     
               }, 200)
     
               //loading animation 
     
               //Add Movie,  Add Actor
     
               e.preventDefault()
     
               let loginUser = document.querySelector("#login_username").value.trim()
               let passwordUser = document.querySelector("#login_password").value.trim()
               if (loginUser && passwordUser) {
                    let formData = new FormData()
                    formData.append("login", loginUser)
                    formData.append("password", passwordUser)
     
                    let requestLogin = await fetch("https://axios.uz/index.php/api/auth",
                         {
                              method: "POST",
                              body: formData,
                         })
                    let responseLogin = await requestLogin.json()
     
                    localStorage.setItem("token", responseLogin.data.token)
                    localStorage.setItem("userId", responseLogin.data.userId)
                    if (responseLogin.ok == true) {
                         localStorage.setItem("accountName", loginUser)
                         // localStorage.setItem("accountPassword", passwordUser)
                         location.href = "loginSucces.html"
                    } else if (responseLogin.ok == false) {
                         localStorage.removeItem("token")
                         localStorage.removeItem("userId")
                         d.querySelector(".error").style.display = "flex"
                         
                         d.getElementById("errorOk").addEventListener("click", () => {
                              d.querySelector(".error").style.display = "none"
                         })
                         setTimeout(() => {
                              d.getElementById("errorOk").click()
                         }, 5000)
                    }
               } 
               else if(passwordUser == ""||loginUser==""){
                    d.querySelector(".error").style.display = "flex"
                    d.getElementById("errorOk").addEventListener("click", () => {
                         d.querySelector(".error").style.display = "none"
                    })
                    setTimeout(() => {
                         d.getElementById("errorOk").click()
                    }, 5000)
                    
               }
     
               d.querySelector("#login_username").value = ""
               d.querySelector("#login_password").value = ""
          })
     })

     ///////////////////////////////////////////////////////////////////////
     /// зарегистрироваться click

     d.getElementById("signUp").addEventListener("click", async function (e) {
          
          
          d.querySelector(".signUp_click_container").style.display = "flex"
          d.querySelector(".signUp_click_container").classList.add("signUp_click_container_anm_open")
          setTimeout(() => {
               d.querySelector(".signUp_click_container").classList.remove("signUp_click_container_anm_open")
          }, 1000);
          d.querySelector(".signUp_click_container").addEventListener("click", function (e) {
               if (e.target.classList.contains("signUp_click_container")) {
                    d.querySelector(".signUp_click_container").classList.add("signUp_click_container_anm_close")
                    setTimeout(()=>{
                         d.querySelector(".signUp_click_container").style.display = "none"
                         d.querySelector(".signUp_click_container").classList.remove("signUp_click_container_anm_close")
                    },1000)
               }
          })
     })
     ///////////////////////////////////////////////////////////////////////
     /// Актёры click

     d.getElementById("actor").addEventListener("click", async function (e) {
          document.getElementById("loading").style.display = "flex"
          document.body.style.overflow = "hidden"
          setTimeout(() => {
               document.getElementById("loading").style.display = "none"
               document.body.style.overflow = "auto"

          }, 300)
          container.innerHTML = ``
          let request = await fetch("https://axios.uz/index.php/api/getActors")
          let responsive = await request.json()

          responsive.forEach(ac => {
               let card = d.createElement("div")
               card.classList.add("card_actor")
               card.innerHTML = `
               <img src="${ac.photo}" alt="">
               <div class="bottom-about-cardactor">
                    <h1>${ac.name}</h1>
                    <div class="card-top-btns">
                         <button><ion-icon name="play-circle"></ion-icon></button>
                         <button><ion-icon name="trash"></ion-icon></button>
                    </div>
                    <p><span>Movies:</span> ${ac.movies.map(t=>t.title)}</p>
                    <p class="actorReleaseText"><span>Release:</span> ${ac.movies.map(r=>r.release)}</p>
                    
               </div>
               `
               container.append(card)
               

               ///////animation
               let animation = document.querySelector(".weather-nav")
               setTimeout(() => {
                    animation.style.top = "-30px"
               }, 1000)
          })
     })

     //search 

     d.getElementById("searchBtn").addEventListener("click", async function (e) {
          document.getElementById("loading").style.display = "flex"
          document.body.style.overflow = "hidden"
          setTimeout(() => {
               document.getElementById("loading").style.display = "none"
               document.body.style.overflow = "auto"

          }, 300)
          container.innerHTML = ``
          container2.innerHTML = ``
          let searchInp = d.getElementById("searchInp").value
          let request = await fetch(`https://axios.uz/index.php/api/searchMovie?search=${searchInp}`, {
               method: "GET"
          })
          let response = await request.json()
          let mov = response.data

          mov.forEach(mov => {
               let card = d.createElement("div")
               card.classList.add("card_movie")
               card.innerHTML = ` 
               <img id="movieCardImg" src="./images/movie.png" alt="">
               <div class="bottom-about-card">
                    <div class="card-top-part">
                         <h1>${mov.title}</h1>
                         <div class="card-top-btns">
                              <button id="playFilm"><ion-icon name="play-circle"></ion-icon></button>
                              <button><ion-icon name="trash"></ion-icon></button>
                         </div>
                    </div>
                    <p><span>Release:</span> ${mov.release}</p>
                    <p><span>Duration:</span> ${mov.duration}</p>
                    <p><span>Actors:</span> ${mov.actors.map(ac=>ac.name)}</p>
                    <p><span>Description: <br></span> ${mov.description}</p>
               </div>
               `

               container.append(card)

          })

          let request_2 = await fetch(`https://axios.uz/index.php/api/searchActor?search=${searchInp}`, {
               method: "GET"
          })
          let response_2 = await request_2.json()
          let actor_data = response_2.data
          actor_data.forEach(ad => {
               let card = d.createElement("div")
               card.classList.add("card_actor")
               card.innerHTML = ` 
               <img src="${ad.photo}" alt="">
               <div class="bottom-about-cardactor">
                    <h1>${ad.name}</h1>
                    <div class="card-top-btns">
                         <button><ion-icon name="play-circle"></ion-icon></button>
                         <button><ion-icon name="trash"></ion-icon></button>
                    </div>
                    <p><span>Movies:</span> ${ad.movies.map(t=>t.title)}</p>
                    <p class="actorReleaseText"><span>Release:</span> ${ad.movies.map(r=>r.release)}</p>
                    
               </div>
               `
               container.append(card)
          })
          d.getElementById("searchInp").value = ""
     })

     //search 

     ///////////////////////////////////////////////////////////////////////
     /// Погода click

     document.getElementById("weatherPage").addEventListener("click", async function (e) {
          document.getElementById("loading").style.display = "flex"
          
          document.body.style.overflow = "hidden"
          setTimeout(() => {
               document.getElementById("loading").style.display = "none"
               document.body.style.overflow = "auto"
               document.querySelector(".weather-click-container").style.display = "flex"
               
               
               document.querySelector(".weather-click-container").addEventListener("click", function (e) {
                    if (e.target.classList.contains("weather-click-container")) {
                         document.querySelector(".content2").classList.add("content2CloseAnm")
                         setTimeout(()=>{
                              document.querySelector(".content2").classList.remove("content2CloseAnm")

                              document.querySelector(".weather-click-container").style.display = "none"





                              ///////animation
                              let animation = document.querySelector(".weather-nav")
                              animation.style.top = "-30px"
                         },300)
                         
                         
     
                    }
               })
          }, 300)

          



          document.getElementById("btn2").addEventListener("click", async function (e) {
               document.getElementById("loading").style.display = "flex"
               document.body.style.overflow = "hidden"
               setTimeout(() => {
                    document.getElementById("loading").style.display = "none"
                    document.body.style.overflow = "auto"

               }, 300)
               let inp = document.getElementById("inp2").value.trim()
               let request = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inp}&units=metric&appid=827e02ac6f41dc6dbe450c07fa86c420`)
               let response = await request.json()
               let weatherText = document.getElementById("weather2")
               // console.log(response.name);
               // console.log(response.main.temp);
               // console.log(response.weather[0].main);

               let img = document.getElementById("img2")
               console.log(response.weather[0].main);
               document.getElementById("text2").innerHTML = `${response.name} ${response.main.temp}°C`
               if (response.weather[0].main == "Sunny") {
                    img.setAttribute("src", `https://cdn1.iconfinder.com/data/icons/weather-color-3/515/weather-06-1024.png`)
                    weatherText.innerHTML = `Quyoshli`
               } else if (response.weather[0].main == "Clouds") {
                    img.setAttribute("src", "./weather/cloud.png")
                    weatherText.innerHTML = `Bulutli`
               } else if (response.weather[0].main == "Clear") {
                    img.setAttribute("src", "./weather/clear-sky.png")
                    weatherText.innerHTML = `Musaffo osmon`
               } else if (response.weather[0].main == "Rain") {
                    img.setAttribute("src", "./weather/rain.png")
                    weatherText.innerHTML = `Yomg'irli`
               }
               let animation = document.getElementById("weatherNav")
               setTimeout(() => {
                    animation.style.top = "-150px"
               }, 1000)
               document.getElementById("inp2").value = ""
          })



     })

     //////////////////////////////////////////////////////////////////////////////////////////
     //Weather Navbar
     let requestWeatherNav = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Navoiy&units=metric&appid=827e02ac6f41dc6dbe450c07fa86c420`)
     let responseWeatherNav = await requestWeatherNav.json()

     let weatherNavImg = document.getElementById("weatherNavImg")
     d.getElementById("weatherNavName").innerHTML = responseWeatherNav.name
     d.getElementById("weatherNavGr").innerHTML = `${responseWeatherNav.main.temp}°C`
     if (responseWeatherNav.weather[0].main == "Sunny") {
          document.getElementById("weatherNavText").innerHTML = `Quyoshli`
          weatherNavImg.setAttribute("src", "https://cdn1.iconfinder.com/data/icons/weather-color-3/515/weather-06-1024.png")
     } else if (responseWeatherNav.weather[0].main == "Clouds") {
          document.getElementById("weatherNavText").innerHTML = `Bulutli`
          weatherNavImg.setAttribute("src", "./weather/cloud.png")
     } else if (responseWeatherNav.weather[0].main == "Clear") {
          document.getElementById("weatherNavText").innerHTML = `Ochiq`
          weatherNavImg.setAttribute("src", "./weather/clear-sky.png")
     } else if (responseWeatherNav.weather[0].main == "Rain") {
          document.getElementById("weatherNavText").innerHTML = `Yomg'irli`
          weatherNavImg.setAttribute("src", "./weather/rain.png")
     }


     // Api Btn Click()

     d.getElementById("apiBtn").addEventListener('click', function(e){
          document.getElementById("loading").style.display = "flex"
          document.body.style.overflow = "hidden"
          setTimeout(() => {
               document.getElementById("loading").style.display = "none"
               document.body.style.overflow = "hidden"
               d.querySelector(".api-container").style.display = "flex"
               d.querySelector(".api-container").classList.add("api-container-anm-open")
               setTimeout(() => {
                    d.querySelector(".api-container").classList.remove("api-container-anm-open")
               }, 1000);
     
     
               d.querySelector(".exit-btn-api-card-container").addEventListener('click', function(e){
                    document.querySelector(".api-container").classList.add("api-container-anm-close")
                    setTimeout(()=>{
                         document.querySelector(".api-container").classList.remove("api-container-anm-close")
                         d.querySelector(".api-container").style.display = "none"
                         document.body.style.overflow = "auto"
                    },1000)
                    
                    
               })
          }, 300)
          

          document.body.addEventListener("dblclick", function(e){
               if(e.target.classList.contains("api-container")){
                    document.querySelector(".api-container").classList.add("api-container-anm-close")
                    setTimeout(()=>{
                         document.querySelector(".api-container").classList.remove("api-container-anm-close")
                         d.querySelector(".api-container").style.display = "none"
                         document.body.style.overflow = "auto"
                    },1000)
               }
          })




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

})