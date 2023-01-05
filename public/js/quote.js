var banner1 = document.getElementById("banner1");
var banner2 = document.getElementById("banner2");
const quotes =[
    "“A man should not strive to eliminate his complexes, but to get into accord with them; they are legitimately what directs hi conduct in the world.” -Sigmund Freud" 
, "“The mind is like an iceberg, it floats with one-seventh of its bulk above water.”  -Sigmund Freud" ,
 "“Everything that irritates us about others can lead us to an understanding of ourselves.” -Carl Jung",
 "“The most terrifying thing is to accept oneself completely.” -Carl Jung",
  "“sooner or later she had to give up the hope for a better past” -Irvin D. Yalom", 
"  “What I am is good enough if I would only be it openly.” -Carl R. Rogers  " ,
 "“Am I living in a way which is deeply satisfying to me, and which truly expresses me?” - Carl R. Rogers" ,
  "“The person most in control is the person who can give up control.” -Frederick Salomon Perls" , 
  "“I am not in this world to live up to other people's expectations, nor do I feel that the world must live up to mine” -Fritz Perls" , 
  "“I have one aim only: to impart a fraction of the meaning of the word now.” -Fritz Perls",
  "“Don't push the river, it flows by itself.” -Frederick S. Perls"
];

window.onload = addQuotes();


function addQuotes(){
 
banner1.innerHTML = quotes[Math.floor(Math.random()*quotes.length)];
   

banner2.innerHTML = quotes[Math.floor(Math.random()*quotes.length)];


}


