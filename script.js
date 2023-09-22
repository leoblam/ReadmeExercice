function openTab(evt, tabName) {
  let i, Tabcontent, Tablinks;

  Tabcontent = document.getElementsByClassName("Tabcontent");
  for (i = 0; i < Tabcontent.length; i++) {
    Tabcontent[i].style.display = "none";
  }

  Tablinks = document.getElementsByClassName("Tablinks");
  for (i = 0; i < Tablinks.length; i++) {
    Tablinks[i].className = Tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
