document.addEventListener("DOMContentLoaded", async function(e){
     let d = document
     let container = d.querySelector(".container")
     
     let req = await fetch("https://axios.uz/index.php/api/getMovies",{
          method: "GET"
     })
     let resp = await req.json()
     
     resp.forEach(function(e){
          let card = d.createElement("div")
          card.classList.add("card", "bg-dark")
          card.setAttribute("style", "width:18rem;")
          card.innerHTML = `
          <img src="./images/movie.png" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title" style="color: #fff;">${e.title}</h5>
            <ul class="list-group list-group-flush">
               <li id="li1" class="list-group-item bg-dark" style="padding-top:1px solid #fff";><span style="color:white;">${e.release}</span></li>
               <li class="list-group-item bg-dark" style="color: white;">ID: ${e.id}</li>
               <li id="li2" class="list-group-item bg-dark" style="padding-bottom:1px solid #fff"><span style="color:white;">${e.duration}</span></li>
            </ul>
             <span style="display:flex;gap:7px;">
             <a href="#" class="btn btn-primary" id="playFilm">Смотреть</a>
             <a href="#" class="btn btn-danger" id="del">Удалить</a>
             </span>
          </div>
          `
          

          container.append(card)

          
     })

     d.getElementById("playFilm").addEventListener("click", async function(e){
               
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
     mainMenuBtn.addEventListener("click", async function(e){
          container.innerHTML = ``
          resp.forEach(function(e){
               let card = d.createElement("div")
               card.classList.add("card", "bg-dark")
               card.setAttribute("style", "width:18rem;")
               card.innerHTML = `
               <img src="./images/movie.png" class="card-img-top" alt="...">
               <div class="card-body">
                 <h5 class="card-title" style="color: #fff;">${e.title}</h5>
                 <ul class="list-group list-group-flush">
                    <li id="li1" class="list-group-item bg-dark" style="padding-top:1px solid #fff";><span style="color:white;">${e.release}</span></li>
                    <li class="list-group-item bg-dark" style="color: white;">ID: ${e.id}</li>
                    <li id="li2" class="list-group-item bg-dark" style="padding-bottom:1px solid #fff"><span style="color:white;">${e.duration}</span></li>
                 </ul>
                  <span style="display:flex;gap:7px;">
                  <a href="#" class="btn btn-primary" id="playFilm">Смотреть</a>
                  <a href="#" class="btn btn-danger" id="del">Удалить</a>
                  </span>
               </div>
               `
               container.append(card)

               d.body.style.backgroundImage = "none"
               document.querySelector(".navbar").classList.add("bg-dark")
               document.getElementById("signUp").classList.remove("btn-primary")
               document.getElementById("signUp").classList.add("btn-warning")
               d.body.style.backgroundColor = "#131313"
               d.querySelector(".search-box").style.display = "flex"
               ///////animation
               let animation = document.querySelector(".weather-nav")
               setTimeout(()=>{
                    animation.style.top = "-30px"
               }, 1000)
          })
     })

     ///////////////////////////////////////////////////////////////////////
     /// Войти click

     d.getElementById("login").addEventListener("click", async function(e){
          document.getElementById("loading").style.display = "block"
          document.body.style.overflow = "hidden"
          setTimeout(()=>{
               document.getElementById("loading").style.display = "none"
               document.body.style.overflow = "auto"
               
          },200)
          d.querySelector(".login_click_container").style.display = "flex"
          d.getElementById("signUp").classList.remove("btn-warning")
          d.getElementById("signUp").classList.add("btn-primary")

          d.querySelector(".login_click_container").addEventListener("click", function(e){
               if(e.target.classList.contains("login_click_container")){
                    d.querySelector(".login_click_container").style.display = "none"
               }
          })
          
          ///////animation
          let animation = document.querySelector(".weather-nav")
          setTimeout(()=>{
               animation.style.top = "-30px"
          }, 1000)

          document.querySelector("#forms_login").addEventListener("submit", async function(e){
               document.getElementById("loading").style.display = "block"
               document.body.style.overflow = "hidden"
               d.querySelector(".login_click_container").style.display = "none"
               setTimeout(()=>{
                    document.getElementById("loading").style.display = "none"
                    document.body.style.overflow = "auto"
                    
               },200)
               e.preventDefault()
       
               let loginUser = document.querySelector("#login_username").value.trim()
               let passwordUser = document.querySelector("#login_password").value.trim()
               if(loginUser && passwordUser){
                   let formData = new FormData()
                   formData.append("login", loginUser)
                   formData.append("password", passwordUser)
       
                   let requestLogin = await fetch("https://axios.uz/index.php/api/auth", 
                   {
                       method:"POST",
                       body: formData,
                   })
                   let responseLogin = await requestLogin.json()
       
                   console.log(responseLogin);
       
                   localStorage.setItem("token", responseLogin.data.token)
                   localStorage.setItem("userId", responseLogin.data.userId)
                   if(responseLogin.data.token != undefined){
                        d.getElementById("mainMenu").click()
                       
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
                       setTimeout(()=>{
                         d.getElementById("login_successful_container").style.display = "flex"
                       },1000)
                       d.getElementById("exitAcc").addEventListener("click", ()=>{
                         location.reload()
                         
                       })
                       d.getElementById("addMovieBtn").addEventListener("click", ()=>{
                         //    container.innerHTML = ``  
                         d.querySelector(".addMovieWindow").style.display = "flex"
                         d.getElementById("movieAddExit").addEventListener("click", ()=>{
                              d.querySelector(".addMovieWindow").style.display = "none"
                         })

                         d.querySelector(".addMovieWindow").addEventListener("click", function(e){
                              if(e.target.classList.contains("addMovieWindow")) {
                                   d.querySelector(".addMovieWindow").style.display = "none"
                              }
                         })

                         //form Submit

                         let tokenAddMovie = localStorage.getItem("token")
                         let userIdAddMovie = localStorage.getItem("userId")
                         d.querySelector(".addMovie").addEventListener("submit", async function(e){
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

                              let requestAddMovie = await fetch("http://axios.uz/index.php/api/addMovie",{
                                   method: "POST",
                                   body: formDataMovie,
                                   headers:{
                                      "User-Id": userIdAddMovie,
                                      "Token": tokenAddMovie,
                                   }
                              })
                              let respAddMovie = await requestAddMovie.json()
                              
                              d.getElementById("movieAddExit").click()


                         })
                            
                    })

                       d.getElementById("addActorBtn").addEventListener("click", ()=>{
                         d.querySelector(".addActorWindow").style.display = "flex"
                         d.getElementById("actorAddExit").addEventListener("click", ()=>{
                              d.querySelector(".addActorWindow").style.display = "none"
                         })

                         d.querySelector(".addActorWindow").addEventListener("click", function(e){
                              if(e.target.classList.contains("addActorWindow")) {
                                   d.querySelector(".addActorWindow").style.display = "none"
                              }
                         })
                         
                            //form Submit

                            let tokenAddActor = localStorage.getItem("token")
                            let userIdAddActor = localStorage.getItem("userId")
                            d.querySelector(".addActor").addEventListener("submit", async function(e){
                              e.preventDefault()
                              let actorName = d.querySelector("#addMovieTitle").value.trim();
                              let films = d.querySelector("#addActorDescription").value.trim();

                              let formDataActor = new FormData()
                              formDataMovie.append("actorName", actorName)
                              formDataMovie.append("films", films)

                              let requestAddActor = await fetch("https://axios.uz/index.php/api/addActor",{
                                   method: "POST",
                                   body: formDataActor,
                                   headers:{
                                      "User-Id": userIdAddActor,
                                      "Token": tokenAddActor,
                                   }
                              })
                              let respAddActor = await requestAddActor.json()
                              
                              d.getElementById("actorAddExit").click()


                            })
                    })
                   } else if(responseLogin.data.token == undefined) {
                         d.querySelector(".error").style.display = "flex"
                         d.getElementById("errorOk").addEventListener("click", ()=>{
                              d.querySelector(".error").style.display = "none"
                         })
                         setTimeout(()=>{
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
     
     d.getElementById("signUp").addEventListener("click", async function(e){
          document.getElementById("loading").style.display = "block"
          setTimeout(()=>{
               document.getElementById("loading").style.display = "none"
               document.body.style.overflow = "auto"
               
          },200)

          d.querySelector(".signUp_click_container").style.display = "flex"

          d.querySelector(".signUp_click_container").addEventListener("click", function(e){
               if(e.target.classList.contains("signUp_click_container")){
                    d.querySelector(".signUp_click_container").style.display = "none"
               }
          })

          d.getElementById("signUp").classList.remove("btn-warning")
          d.getElementById("signUp").classList.add("btn-primary")
          
          ///////animation
          let animation = document.querySelector(".weather-nav")
          setTimeout(()=>{
               animation.style.top = "-30px"
          }, 1000)
     })
     ///////////////////////////////////////////////////////////////////////
     /// Актёры click

     d.getElementById("actor").addEventListener("click", async function(e){
          container.innerHTML = ``
          let request = await fetch("https://axios.uz/index.php/api/getActors")
          let responsive = await request.json()

          responsive.forEach(e=>{
               let card = d.createElement("div")
               card.classList.add("col3")
               card.innerHTML = ` 
               <div class="card bg-dark" style="width: 18rem;">
               <img src="${e.photo}" class="card-img-top" alt="...">
               <div class="card-body">
                 <h5 class="card-title" style="color:#fff;">${e.name}</h5>
                 <p class="card-text" style="color:#fff;">${e.movies.map(t=>t.title)}</p>
                 <a href="#" class="btn btn-primary"  id="playActor">Смотреть</a>
                 <a href="#" class="btn btn-danger">Удалить</a>
               </div>
               </div>
               `
               container.append(card)
               d.body.style.backgroundImage = "none"
               document.querySelector(".navbar").classList.add("bg-dark")
               document.getElementById("signUp").classList.remove("btn-primary")
               document.getElementById("signUp").classList.add("btn-warning")
               // d.body.style.backgroundImage = "none"
               d.body.style.backgroundColor = "#131313"
               d.querySelector(".search-box").style.display = "flex"

               ///////animation
               let animation = document.querySelector(".weather-nav")
               setTimeout(()=>{
                    animation.style.top = "-30px"
               }, 1000)
          })
     })
     d.getElementById("searchBtn").addEventListener("click", async function(e){
          container.innerHTML = ``
          let searchInp = d.getElementById("searchInp").value
          let request = await fetch(`https://axios.uz/index.php/api/searchMovie?search=${searchInp}`, {
               method:"GET"
          })
          let response = await request.json()
          let mov = response.data

          mov.forEach(m=>{
               let card = d.createElement("div")
               card.classList.add("col3")
               card.innerHTML = ` 
               <div class="card bg-dark" style="width: 18rem;">
               <img style="height:360px;" src="./images/movie.png" class="card-img-top" alt="...">
               <div class="card-body">
                 <h5 class="card-title" style="color:#fff;">${m.title}</h5>
                 <p class="card-text" style="color:#fff;">${m.duration}</p>
                 <a href="#" class="btn btn-primary" id="playFilm">Смотреть</a>
                 <a href="#" class="btn btn-danger">Удалить</a>
               </div>
               </div>
               `

               container.append(card)
               
          })

          let request_2 = await fetch(`https://axios.uz/index.php/api/searchActor?search=${searchInp}`, {
               method:"GET"
          })
          let response_2 = await request_2.json()
          let actor_data = response_2.data
          actor_data.forEach(ad=>{
               let card = d.createElement("div")
               card.classList.add("col3")
               card.innerHTML = ` 
               <div class="card bg-dark" style="width: 18rem;">
               <img src="${ad.photo}" class="card-img-top" alt="...">
               <div class="card-body">
                 <h5 class="card-title" style="color:#fff;">${ad.name}</h5>
                 <p class="card-text" style="color:#fff;">${ad.movies.map(r=>r.release)}</p>
                 <a href="#" class="btn btn-primary" id="playActor">Смотреть</a>
                 <a href="#" class="btn btn-danger">Удалить</a>
               </div>
               </div>
               `
               container.append(card)
          })
          d.getElementById("searchInp").value = ""
     })

     ///////////////////////////////////////////////////////////////////////
     /// Погода click

     document.getElementById("weatherPage").addEventListener("click", async function(e){
          document.getElementById("loading").style.display = "block"
          document.body.style.overflow = "hidden"
          setTimeout(()=>{
               document.getElementById("loading").style.display = "none"
               document.body.style.overflow = "auto"
               
          },300)
          container.innerHTML = ``
          
          d.querySelector(".navbar").classList.remove("bg-dark")
          d.body.style.background = `url(./weather-bg.jpg)`
          d.body.style.backgroundSize = `cover`
          d.body.classList.add("body-weather")    
          d.getElementById("signUp").classList.remove("btn-warning")
          d.getElementById("signUp").classList.add("btn-primary")
          d.querySelector(".search-box").style.display = "none"
          d.querySelector(".stick").style.background = "rgba(255, 255, 255, .1)"
          container.innerHTML = `
          <div class="content2">
          <div class="search-box2">
               <input id="inp2" type="text" placeholder="Search weather">
               <button id="btn2">
                    <ion-icon name="search-outline"></ion-icon>
               </button>
          </div>
          <h1 id="text2" style="text-align: center;">Weather Search</h1>
          <div class="img-box2">
               <img src="../weather.png" alt="" id="img2">
          </div>
          <h1 id="weather2" style="text-align: center;"></h1>
          </div>
          `

          


          document.getElementById("btn2").addEventListener("click", async function(e){
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
               if(response.weather[0].main == "Sunny"){
                    img.setAttribute("src", `https://cdn1.iconfinder.com/data/icons/weather-color-3/515/weather-06-1024.png`)
                    weatherText.innerHTML = `Quyoshli`
               } else if(response.weather[0].main == "Clouds"){
                    img.setAttribute("src","./weather/cloud.png")
                    weatherText.innerHTML = `Bulutli`
               } else if(response.weather[0].main == "Clear"){
                    img.setAttribute("src","./weather/clear-sky.png")
                    weatherText.innerHTML = `Musaffo osmon`
               } else if(response.weather[0].main == "Rain"){
                    img.setAttribute("src","./weather/rain.png")
                    weatherText.innerHTML = `Yomg'irli`
               } 
               let animation = document.getElementById("weatherNav")
               setTimeout(()=>{
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
     if(responseWeatherNav.weather[0].main == "Sunny"){
          document.getElementById("weatherNavText").innerHTML = `Quyoshli`
          weatherNavImg.setAttribute("src", "https://cdn1.iconfinder.com/data/icons/weather-color-3/515/weather-06-1024.png")
     } else if(responseWeatherNav.weather[0].main == "Clouds"){
          document.getElementById("weatherNavText").innerHTML = `Bulutli`
          weatherNavImg.setAttribute("src", "./weather/cloud.png")
     } else if(responseWeatherNav.weather[0].main == "Clear"){
          document.getElementById("weatherNavText").innerHTML = `Ochiq`
          weatherNavImg.setAttribute("src", "./weather/clear-sky.png")
     } else if(responseWeatherNav.weather[0].main == "Rain"){
          document.getElementById("weatherNavText").innerHTML = `Yomg'irli`
          weatherNavImg.setAttribute("src", "./weather/rain.png")
     }
     
     
})