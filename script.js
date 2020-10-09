var modal = document.getElementById("myModal");
var btn = document.getElementById("sub");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    var ip = document.getElementById('input').value
    try{
      var val = ip.match(/[aeiou]/gi).length;
    }
    catch(err){
      var val = 0;
    }
    console.log(val)
    document.getElementById('vow').innerHTML = val
    modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}