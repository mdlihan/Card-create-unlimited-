let all = document.querySelector('.all');
let card = document.querySelector('.card');
let gase_number = parseInt(prompt('Enter any card  number :'));
let h3 = document.createElement('h3')
let user_name = prompt('Enter your name :'); 
if (!gase_number){
  h3.innerHTML='Number not a valid';
  all.appendChild(h3)
} else {
  for (var i = 0; i < gase_number; i++) {
  let div=document.createElement('div');
  div.innerHTML=`
    <div class="card">
  <div class="img">
    <img src="/logo.png" alt="/logo.png" width="150px" height="150px">
  </div>
  <div class="des">
    <h3>This is ${i} number card</h3>
    <p>create by ${user_name}</p>
  </div>
  <button type="submit">submit</button>
  </div>`;
 all.appendChild(div)
}

}

