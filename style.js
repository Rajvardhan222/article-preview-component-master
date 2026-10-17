let profile = document.getElementsByClassName('profile')

let share = document.getElementsByClassName('share')

let sharebtn = document.getElementById('share__container')
let avatar = document.getElementById('avatar')
let profileInfo = document.getElementById('profile__info')

sharebtn.addEventListener('click',()=> {
    share[0].classList.toggle('hidden')
    profileInfo.classList.toggle('hidden')
    avatar.classList.toggle('hidden')
})

sharebtn.addEventListener("click", () => {
  profile[0].classList.toggle("is-open");
});