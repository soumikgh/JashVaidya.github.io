function Function() {
    var x = document.getElementById('about');
    var y = document.getElementById('contact');
    var z = document.getElementById('projects');

    if (x.style.display === 'none') {
        x.style.display = 'block';
        y.style.display = 'none';
        z.style.display = 'none';
    } else {
        x.style.display = 'none';
    }
}

function SecondFunction() {
    var x = document.getElementById('contact');
    var y = document.getElementById('about');
    var z = document.getElementById('projects');

    if (x.style.display === 'none') {
        x.style.display = 'block';
        y.style.display = 'none';
        z.style.display = 'none';
    } else {
        x.style.display = 'none';
    }
}

function ThirdFunction() {
    var x = document.getElementById('projects');
    var y = document.getElementById('about');
    var z = document.getElementById('contact');

    if (x.style.display === 'none') {
        x.style.display = 'flex';
        y.style.display = 'none';
        z.style.display = 'none';
    } else {
        x.style.display = 'none';
    }
}
