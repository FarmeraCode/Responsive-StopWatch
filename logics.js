var hr = document.getElementById('hr');
var min = document.getElementById('min');
var sec = document.getElementById('sec');
var millisec = document.getElementById('millisec');
var counter = false;
var lap_times = [];
var laps = document.querySelector('.lap_list');




function start(){
    counter = true;
    count();
}

function stop(){
    counter = false;

}
function reset(){
    counter = false;

    millisec.innerHTML ='00';
    sec.innerHTML = '00';
    min.innerHTML = '00';
    hr.innerHTML = '00';
}
function count(){
    if (counter == true){
        millisec.innerHTML = parseInt(millisec.innerHTML) + 1;
        setTimeout(count, 10);
    }

    if (millisec.innerHTML == 100){
        millisec.innerHTML = 0;
        sec.innerHTML = parseInt(sec.innerHTML) + 1;
    }

    if (sec.innerHTML == 60){
        sec.innerHTML = 0;
        min.innerHTML = parseInt(min.innerHTML) + 1;
    }

    if (min.innerHTML == 100){
        min.innerHTML = 0;
        hr.innerHTML = parseInt(min.innerHTML) + 1;
    }

    lap_times.push(hr.innerHTML + ":" + min.innerHTML + ":" + sec.innerHTML + ":" + millisec.innerHTML);
}

function lap() {
    var li = document.createElement("li");
    li.innerHTML = lap_times[lap_times.length - 1];
    laps.appendChild(li);
}

function lap_reset() {
    lap_times = [];
    laps.innerHTML = '';
}

