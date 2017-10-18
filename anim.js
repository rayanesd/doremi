$(document).ready(function(){

  $(".menu1").mouseenter(function(){
    $(this).fadeTo("fast", 0.30);
  });
  $(".menu1").mouseleave(function(){
    $(this).fadeTo("fast", 100);
  });

  $(".menu1").click(function(){
    $("h1").toggle(2000);
  });

  $.getJSON("https://api.airtable.com/v0/appoY3uHN2YnQ3ejC/musics?api_key=keyfJkwTBluhMABPw",
  					function(data) {
  console.log(data);
  $.each(data.records, function(key,val) {
    console.log(val.fields.title);

  $('<li id="numero">'+val.fields.id+'</li>').appendTo('#listemusique');
  $('<li id="titre">'+val.fields.title+'</li>').appendTo('#listemusique');
  $('<li id="artiste">'+val.fields.artist+'</li>').appendTo('#listemusique');
  $('<li id="album">'+val.fields.album+'</li>').appendTo('#listemusique');
  $("<img id='covers' src='"+val.fields['cover']+"'>").appendTo('#listemusique');
  $("<iframe class='player' src='https://open.spotify.com/embed?uri="+val.fields['spotify-link']+"&view=coverart frameborder='0' allowtransparency='true'></iframe>").appendTo('#listemusique');

});

  					}
  );

});
