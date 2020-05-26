function ready(){

const total = 3;
var score=0;
const result = ['b', 'a', 't'];

const s = document.querySelector('.score');

var q1 = document.forms["quiz"]["q1"].value;
const q2 = document.forms['quiz']['q2'].value;
const q3 = document.forms['quiz']['q3'].value;
for(var i=1; i<=total; ++i){
    if(eval('q'+i)==null || eval('q'+i)==''){
        alert('Missed Question');
        return false;
    }
}

for(var i=1; i<=total; ++i){
    if(eval('q'+i)==result[i-1]){
        score++;
    }
}

s.innerHTML = score;
return false;
}