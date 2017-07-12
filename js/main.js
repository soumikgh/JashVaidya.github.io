function myFunction() {
    var x = document.getElementById('about');
    var y = document.getElementById('contact');

    if (x.style.display === 'none') {
        x.style.display = 'block';
        y.style.display = 'none';
    } else {
        x.style.display = 'none';
    }
}

function mySecondFunction() {
    var x = document.getElementById('contact');
    var y = document.getElementById('about');

    if (x.style.display === 'none') {
        x.style.display = 'block';
        y.style.display = 'none';
    } else {
        x.style.display = 'none';
    }
}
