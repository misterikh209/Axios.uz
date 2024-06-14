document.addEventListener("DOMContentLoaded", async function (e) {
     let d = document
     d.querySelector("input").setAttribute("autocomplete", "off")
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
          <img id="movieCardImg" src="https://w0.peakpx.com/wallpaper/363/426/HD-wallpaper-avengers-endgame-avengers-assemble-marvel-entertainment.jpg" alt="">
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

     d.getElementById("playFilm").addEventListener("click", async function (e) {

          container.innerHTML = `
          <div class="container">
          <div class="movie-about-box">
              <div class="movie-about">
                  <div class="img-content"><img src="./titanik.jpg" alt=""></div>
                  <div class="right-content">
                      <h1 class="movie-title">Титаник</h1>
                      <p class="reliz">Релиз: <a href="#">1995</a></p>
                      <p class="genre">Жанр: <a href="#">Романтика Драмма История Мелодрамма</a></p>
                      <p class="actors">Актёры: <a href="#">Леонардо Ди Каприо Кейт Уинслет</a></p>
                      <p class="duration">Длительность: 03:14:00</p>
                      <h2>Описание</h2>
                      <p class="description" style="position: relative;left: 10px;margin-top: 10px;">
                          Молодые влюбленные Джек и Роза находят друг друга в первом и последнем плавании «непотопляемого» Титаника. Они не могли знать, что шикарный лайнер столкнется с айсбергом в холодных водах Северной Атлантики, и их страстная любовь превратится в схватку со смертью…
                      </p>
                      <p class="views" style="text-align: right;margin-right: 20px;">
                          Просмотры: 400
                      </p>
                  </div>
              </div>
              <div class="comment">
                  <p>Чтобы отсавлять коментарии пожалуйста, <a href="#">авторизуйтесь!</a></p>
              </div>
              <div class="comments">
                  <p>Комментарии...</p>
              </div>
          </div>
          
          </div>
          `
     })



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
               <img src="https://w0.peakpx.com/wallpaper/363/426/HD-wallpaper-avengers-endgame-avengers-assemble-marvel-entertainment.jpg" alt="">
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
     })

     ///////////////////////////////////////////////////////////////////////
     /// Войти click
     d.querySelector(".carusel-cont").style.display = "flex"
     d.getElementById("login").addEventListener("click", async function (e) {

          d.querySelector(".login_click_container").style.display = "flex"
          d.getElementById("signUp").classList.remove("btn-warning")
          d.getElementById("signUp").classList.add("btn-primary")

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


               //container 2
               container.innerHTML = ``
               container2.innerHTML = ``

               let mainMenu2 = d.getElementById("mainMenu2")
               let actor2 = d.getElementById("actor2")
               d.getElementById("mainMenu").style.display = "none"
               d.getElementById("actor").style.display = "none"
               mainMenu2.style.display = "flex"
               actor2.style.display = "flex"

               //actor2   click()

               actor2.addEventListener("click", async function (e) {
                    document.getElementById("loading").style.display = "flex"
                    document.body.style.overflow = "hidden"
                    setTimeout(() => {
                         document.getElementById("loading").style.display = "none"
                         document.body.style.overflow = "auto"

                    }, 300)
                    container.innerHTML = ``
                    container2.innerHTML = ``

                    let reqActor2 = await fetch("https://axios.uz/index.php/api/getActors")
                    let respActor2 = await reqActor2.json()

                    respActor2.forEach(ac => {
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
                         container2.append(card)
                    })
               })
               //actor2   click()



               // maniMenu2 click()

               mainMenu2.addEventListener("click", async function (e) {
                    //animation
                    document.getElementById("loading").style.display = "flex"
                    document.body.style.overflow = "hidden"
                    setTimeout(() => {
                         document.getElementById("loading").style.display = "none"
                         document.body.style.overflow = "auto"

                    }, 300)
                    //animation
                    container.innerHTML = ``
                    container2.innerHTML = ``

                    let reqMovies2 = await fetch("https://axios.uz/index.php/api/getMovies")
                    let respMovies2 = await reqMovies2.json()

                    resp.forEach(mov => {
                         let card = d.createElement("div")
                         card.classList.add("card_movie")
                         card.innerHTML = `
                         <img src="https://w0.peakpx.com/wallpaper/363/426/HD-wallpaper-avengers-endgame-avengers-assemble-marvel-entertainment.jpg" alt="">
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
                         container2.append(card)


                    })
               })
               // maniMenu2 click()
               mainMenu2.click()
               //container 2





               





               //Add Movie,  Add Actor

               e.preventDefault()

               let loginUser = document.querySelector("#login_username").value.trim()
               let passwordUser = document.querySelector("#login_password").value.trim()
               d.getElementById("personLogin").innerText = loginUser
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
                    if (responseLogin.data.token != undefined) {

                         d.getElementById("login").style.display = "none"
                         d.getElementById("signUp").style.display = "none"
                         d.querySelector(".addMovieBox").style.display = "flex"
                         d.querySelector(".btns").innerHTML = `
                              <div style="display: flex;align-items: center;justify-content: center;flex-direction: column;position: absolute;left: -50px;top: -10px;" class="acc-box">
                              <ion-icon name="person-circle-outline" style="color: #fff; font-size: 35px;"></ion-icon>
                              <p style="color: #fff;">${loginUser}</p>
                              </div>
                              <button id="exitAcc" style="background: transparent;border: none;color: #fff;font-size: 25px;position: relative;left: 20px ;"><ion-icon name="exit-outline"></ion-icon></button>
                         `
                         
                         d.getElementById("login_successful_container").style.display = "flex"
                         d.getElementById("login_successful_container").addEventListener("click", function(e){
                              if(e.target.getAttribute("id")== "login_successful_container") {
                                   d.getElementById("login_successful_container").style.display = "none"
                              }
                         })
                    
                         d.getElementById("exitAcc").addEventListener("click", () => {
                              location.reload()
                         })

                         //addMovie
                         d.getElementById("addMovieBtn").addEventListener("click", () => {
                              //    container.innerHTML = ``  
                              d.querySelector(".addMovieWindow").style.display = "flex"
                              d.getElementById("movieAddExit").addEventListener("click", () => {
                                   d.querySelector(".addMovieWindow").style.display = "none"
                              })

                              d.querySelector(".addMovieWindow").addEventListener("click", function (e) {
                                   if (e.target.classList.contains("addMovieWindow")) {
                                        d.querySelector(".addMovieWindow").style.display = "none"
                                   }
                              })

                              //form Submit

                              let tokenAddMovie = localStorage.getItem("token")
                              let userIdAddMovie = localStorage.getItem("userId")
                              d.querySelector(".addMovie").addEventListener("submit", async function(e) {
                                   e.preventDefault()
                                   let title = d.querySelector("#addMovieTitle").value.trim();
                                   let release = d.querySelector("#addMovieRelease").value.trim();
                                   let duration = d.querySelector("#addMovieDuration").value.trim();
                                   let description = d.querySelector("#addMovieDescription").value.trim();

                                   let formDataMovie = new FormData()
                                   formDataMovie.append("title", title)
                                   formDataMovie.append("release", release)
                                   formDataMovie.append("duration", duration)
                                   formDataMovie.append("description", description)

                                   let requestAddMovie = await fetch("http://axios.uz/index.php/api/addMovie", {
                                        method: "POST",
                                        body: formDataMovie,
                                        headers: {
                                             "User-Id": userIdAddMovie,
                                             "Token": tokenAddMovie,
                                        }
                                   })
                                   let respAddMovie = await requestAddMovie.json()

                                   d.getElementById("movieAddExit").click()


                              })

                         })
                         
                         //addActor
                         d.getElementById("addActorBtn").addEventListener("click", () => {
                              d.querySelector(".addActorWindow").style.display = "flex"
                              d.getElementById("actorAddExit").addEventListener("click", () => {
                                   d.querySelector(".addActorWindow").style.display = "none"
                              })

                              d.querySelector(".addActorWindow").addEventListener("click", function (e) {
                                   if (e.target.classList.contains("addActorWindow")) {
                                        d.querySelector(".addActorWindow").style.display = "none"
                                   }
                              })

                              //form Submit

                              let tokenAddActor = localStorage.getItem("token")
                              let userIdAddActor = localStorage.getItem("userId")
                              d.querySelector(".addActorForm").addEventListener("submit", async function(e) {
                                   e.preventDefault()
                                   let actorName = d.querySelector("#addActorTitle").value.trim()

                                   let formDataActor = new FormData()
                                   formDataActor.append("actorName", actorName)

                                   let requestAddActor = await fetch("https://axios.uz/index.php/api/addActor", {
                                        method: "POST",
                                        body: formDataActor,
                                        headers: {
                                             "User-Id": userIdAddActor,
                                             "Token": tokenAddActor,
                                        }
                                   })
                                   let respAddActor = await requestAddActor.json()

                                   console.log(respAddActor.ok);

                                   d.getElementById("actorAddExit").click()

                                   // actorName = d.querySelector("#addActorTitle").value = ``

                              })
                              // document.getElementById("actorAddBtn").addEventListener("click", ()=>{
                              //      d.querySelector(".addActor").submit();

                              // })
                         })
                    } else if (responseLogin.data.token == undefined) {
                         d.querySelector(".error").style.display = "flex"
                         d.getElementById("errorOk").addEventListener("click", () => {
                              d.querySelector(".error").style.display = "none"
                         })
                         setTimeout(() => {
                              d.getElementById("errorOk").click()
                         }, 3000)
                    }
               }


               d.querySelector("#login_username").value = ""
               d.querySelector("#login_password").value = ""
          })
     })

     ///////////////////////////////////////////////////////////////////////
     /// зарегистрироваться click

     d.getElementById("signUp").addEventListener("click", async function (e) {
          d.querySelector(".carusel-cont").style.display = "flex"

          d.querySelector(".signUp_click_container").style.display = "flex"

          d.querySelector(".signUp_click_container").addEventListener("click", function (e) {
               if (e.target.classList.contains("signUp_click_container")) {
                    d.querySelector(".signUp_click_container").style.display = "none"
               }
          })

          d.getElementById("signUp").classList.remove("btn-warning")
          d.getElementById("signUp").classList.add("btn-primary")

          ///////animation
          let animation = document.querySelector(".weather-nav")
          setTimeout(() => {
               animation.style.top = "-30px"
          }, 1000)
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
               <img id="movieCardImg" src="https://w0.peakpx.com/wallpaper/363/426/HD-wallpaper-avengers-endgame-avengers-assemble-marvel-entertainment.jpg" alt="">
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

          }, 300)

          document.querySelector(".weather-click-container").style.display = "flex"

          document.querySelector(".weather-click-container").addEventListener("click", function (e) {
               if (e.target.classList.contains("weather-click-container")) {
                    document.querySelector(".weather-click-container").style.display = "none"
                    ///////animation
                    let animation = document.querySelector(".weather-nav")
                    animation.style.top = "-30px"
               }
          })



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


})