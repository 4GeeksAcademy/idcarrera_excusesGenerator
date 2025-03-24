window.onload = function() {
    //write your code here
    
      let who = "Yo";
      let action = ["enseñe","tengo","escondi","invente"];
      let what = ["a tirar a","la candenita de","sus hijos a"," el ye ye ye ye de"];
      let when = ["Jordan","Carmen","La Llorona","Bad Bunny"];

      let showme1 = Math.floor(Math.random() * action.length);
      let showme2 = Math.floor(Math.random() * what.length);
      let showme3 = Math.floor(Math.random() * when.length);

    document.querySelector("#excuse").innerHTML = who + " " + action[showme1] + " " + what[showme2] + " " +  when[showme3];

    //console.log(who + " " + action[showme1] + " " + what[showme2] + " " +  when[showme3]);
  
}
