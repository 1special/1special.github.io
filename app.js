function menuClick() {
    var x = document.getElementById('1');
    var y = document.getElementById('2');
    if (x.style.display === 'block') {
        x.style.display = 'none';
        y.innerHTML = '☰';
      } else {
        x.style.display = 'block';
        y.innerHTML = '━';
      }
}