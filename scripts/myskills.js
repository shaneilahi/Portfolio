const element = document.querySelector('.js-do-ur-thing');


const animation = (substring, skillsCounter) => {
  element.innerHTML += substring;

  if (element.innerHTML == mySkills[skillsCounter]) {
    doneLooping = true;
  }
}

const mySkills = ['Developer', 'Content Creator', 'Freelancer', 'Gamer'];
console.log(mySkills);

let doneLooping = false;

const loopSubstring = (skillsCounter) => {
  element.innerHTML = '';
  for (let index = 0; index < mySkills[skillsCounter].length; ++index) {
    task(index);
  }
   
  function task(i) {
   setTimeout(function() {
    animation(mySkills[skillsCounter][i], skillsCounter);
    console.log(doneLooping)
    if (doneLooping) {
      setTimeout(() => {
        let x = mySkills[skillsCounter].length;
        for (let index = (mySkills[skillsCounter].length); index >= 0; index--) {
          task(index);
        }
         
        function task(i) {
         setTimeout(function() {
          element.innerHTML = element.innerHTML.slice(0,x--);
          console.log(element.innerHTML);
          if (element.innerHTML == '') {
            doneLooping = false;
            skillsCounter += 1;
            console.log(skillsCounter);
            if (skillsCounter <= (mySkills.length - 1)) {
              loopSubstring(skillsCounter);
            } else {
              skillsCounter = 0;
              loopSubstring(skillsCounter);
            }
          }
         }, 65 * i);
        }
      }, 1000);
    }

   }, 150 * i);
  }


}

loopSubstring(0)

// let counter = 0;

// let intervalID = setInterval(() => {

//   if (counter >= 4) {
//     counter = 0;
//   }

//   console.log(mySkills[counter]);

//   element.innerHTML = mySkills[counter++];
// }, 1500);
