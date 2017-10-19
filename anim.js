$(document).ready(function(){

  $(".menu1").mouseenter(function(){
    $(this).fadeTo("fast", 0.30);
  }); //Mise en surbrillance des éléments du menu quand la souris les traverse

  $(".menu1").mouseleave(function(){
    $(this).fadeTo("fast", 100);
  }); //Retour à la normale des éléments du menu quand la souris ne les touche plus

  $.getJSON("https://api.airtable.com/v0/app4Ra4aWUQB0rfm0/musics?api_key=keyfJkwTBluhMABPw",
  	function(data) { //Ajout de la base de données
      console.log(data);
      $.each(data.records, function(key,val) {

          code = "<ul id='infos'><li id='numero'>"+val.fields.id+"</li>\
          <li><img id='covers' src='"+val.fields['cover']+"'></li>\
            <ul id='infozik'><li id='titre'>"+val.fields.title+"</li>\
            <li id='artiste'>"+val.fields.artist+"</li>\
            <li id='album'>"+val.fields.album+"</li>\
            </ul>\
          <li><iframe class='player' src='https://open.spotify.com/embed?uri="+val.fields['spotify-link']+"&view=coverart' frameborder='0' allowtransparency='true'></iframe></li>\
            <ul id='vote'><li><img id='like' src='like.png'></li>\
            <li><img id='dislike' src='unlike.png'></li>\
            </ul>\
          </ul>\
          ";

          $("#listemusique").append(code);
      });

      $("#like").mouseenter(function(){
        $(this).fadeTo("fast", 0.30);
      });

      $("#like").mouseleave(function(){
        $(this).fadeTo("fast", 100);
      });

      $("#dislike").mouseenter(function(){
        $(this).fadeTo("fast", 0.30);
      });

      $("#dislike").mouseleave(function(){
        $(this).fadeTo("fast", 100);
      });

  	});


});
