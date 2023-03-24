
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/



/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

*/


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/



/*
  STEP 4: Pass the data received from Github into your function, and append the returned markup to the DOM as a child of .cards
*/


/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers, manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each user, and adding that card to the DOM.
*/
/* <div class="card">
<img src={image url of user} />
<div class="card-info">
  <h3 class="name">{users name}</h3>
  <p class="username">{users user name}</p>
  <p>Location: {users location}</p>
  <p>Profile:
    <a href={address to users github page}>{address to users github page}</a>
  </p>
  <p>Followers: {users followers count}</p>
  <p>Following: {users following count}</p>
  <p>Bio: {users bio}</p>
</div>
</div> */

function  githubCard(img,name,userName,location,Profile,followers,following,bio){

  const card = document.createElement('div')
  const image = document.createElement('img')
  const cardInfo = document.createElement('div')
  const h3 = document.createElement('h3')
  const par1 = document.createElement('p')
  const par2 = document.createElement('p')
  const par3 = document.createElement('p')
  const a = document.createElement('a')
  const par4 = document.createElement('p')
  const par5 = document.createElement('p')
  const par6 = document.createElement('p')

  card.appendChild(image)
  card.appendChild(cardInfo)

  cardInfo.appendChild(h3)
  cardInfo.appendChild(par1)
  cardInfo.appendChild(par2)
  cardInfo.appendChild(par3)
  par3.appendChild(a)
  cardInfo.appendChild(par4)
  cardInfo.appendChild(par5)
  cardInfo.appendChild(par6)

  image.src = img;
  h3.textContent = name;
  par1.textContent = userName;
  par2.textContent ="location: "+ location;
  a.innerHTML = "profile: "+ Profile;
  par4.textContent = "Followers: "+ followers;
  par5.textContent = "following: "+ following;
  par6.textContent = bio;

  card.classList.add("card")
  cardInfo.classList.add("card-info")
  h3.classList.add('name')
  par1.classList.add('username')


  return card
}
const cards = document.querySelector('.cards')

axios.get('https://api.github.com/users/BakarMokhtarAli')
.then(response =>{
  //!console.log(response.data.url)
  const sawir = response.data.avatar_url
  const magac = response.data.login
  const userName = response.data.name
  const location = response.data.location
  const profile = response.data.url
  const followers = response.data.followers
  const following = response.data.following
  const bio = response.data.bio
  cards.appendChild(githubCard(sawir,magac,userName,location,profile,followers,following,bio))
})
.catch(error =>{
  console.log(error)
})

axios.get('https://api.github.com/users/DuraanAli')
.then(response =>{
  //!console.log(response.data.url)
  const sawir = response.data.avatar_url
  const magac = response.data.login
  const userName = response.data.name
  const location = response.data.location
  const profile = response.data.url
  const followers = response.data.followers
  const following = response.data.following
  const bio = response.data.bio
  cards.appendChild(githubCard(sawir,magac,userName,location,profile,followers,following,bio))
})
.catch(error =>{
  console.log(error)
})

axios.get('https://api.github.com/users/mchamoudadev')
.then(response =>{
  //!console.log(response.data.url)
  const sawir = response.data.avatar_url
  const magac = response.data.login
  const userName = response.data.name
  const location = response.data.location
  const profile = response.data.url
  const followers = response.data.followers
  const following = response.data.following
  const bio = response.data.bio
  cards.appendChild(githubCard(sawir,magac,userName,location,profile,followers,following,bio))
})
.catch(error =>{
  console.log(error)
})

axios.get('https://api.github.com/users/abdirahmanahmed1')
.then(response =>{
  //!console.log(response.data.url)
  const sawir = response.data.avatar_url
  const magac = response.data.login
  const userName = response.data.name
  const location = response.data.location
  const profile = response.data.url
  const followers = response.data.followers
  const following = response.data.following
  const bio = response.data.bio
  cards.appendChild(githubCard(sawir,magac,userName,location,profile,followers,following,bio))
})
.catch(error =>{
  console.log(error)
})

axios.get('https://api.github.com/users/gabischool')
.then(response =>{
  //!console.log(response.data.url)
  const sawir = response.data.avatar_url
  const magac = response.data.login
  const userName = response.data.name
  const location = response.data.location
  const profile = response.data.url
  const followers = response.data.followers
  const following = response.data.following
  const bio = response.data.bio
  cards.appendChild(githubCard(sawir,magac,userName,location,profile,followers,following,bio))
})
.catch(error =>{
  console.log(error)
})
const followersArray = [];

