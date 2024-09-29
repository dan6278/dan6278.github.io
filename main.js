x = 0, y = 0, radius = 0, side = 0, minr = 0, maxr = 0, count = 0;

function start() {
    x = Number(document.getElementById("x").value);
    y = Number(document.getElementById("y").value);
    radius = Number(document.getElementById("radius").value / 2);
    _radius = Number(document.getElementById("radius").value / 2);
    count = Number(document.getElementById("count").value);
    minr = Number(document.getElementById("minr").value);
    maxr = Number(document.getElementById("maxr").value); 
    side = radius * 2;

    if(count == 0 || minr == 0 || maxr == 0) {
        result = center() || giper() || romb() || circle() || square() || 0;
        alert(result)
    } else {
        h = [0,0,0,0,0,0];
        console.log(count, minr, maxr)
        for(i = 0; i < count; i++){
            radius = getRandomNumber(minr, maxr).toFixed(2);
            side = radius * 2;
            result = center() || giper() || romb() || circle() || square() || 0;
            h[result] ++;
            console.log(result, radius, side, h)
            radius = _radius;
        }
        alert(`вы попали в центр: ${h[5]} раз, 
            гиперболу: ${h[4]} раз, 
            ромб: ${h[3]} раз, 
            круг: ${h[2]} раз, 
            квадрат: ${h[1]} раз, 
            не попал: ${h[0]} раз`)
    }
}

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min
}


function square(){
    return ((Math.abs(x) <= side) && (Math.abs(y)) <= side) ? 1 : 0;
}

function center(){
    return (Math.abs(x) == 0 && Math.abs(y) == 0) ? 5 : 0;
}

function circle(){
    return ((Math.abs(x)**2 + Math.abs(y)**2) <= radius**2) ? 2 : 0;
}

function giper(){
    return ((1/Math.abs(x)) >= Math.abs(y)) ? 4 : 0;
}

function romb(){
    return ((Math.abs(x)+Math.abs(y))/2<=radius) ? 3 : 0;
}
