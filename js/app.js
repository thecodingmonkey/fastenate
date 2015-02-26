

$( document ).ready (function() {

  function processData(data) {
    
    $(".item_list").empty();

    $.each(data.data.children, function(idx, val) {

//      console.log(val);

      var element = $("<div>");
      element.addClass("item column small-12 medium-6");

      var e_image = $("<div>");
      e_image.addClass("image");
      e_image.css("background-image", "url(" + val.data.url+ ")");

        var e_enclosed_image = $("<img>");
        e_enclosed_image.attr("src", val.data.url);
        e_enclosed_image.css("width", "100%");
        e_enclosed_image.css("height", "100%");
        e_enclosed_image.hide();
        e_image.append(e_enclosed_image);


      element.append(e_image);

      var e_title = $("<h2>");
      e_title.addClass("title clamp-2");
      e_title.html(val.data.title);
      element.append(e_title);

      var e_subtitle = $("<h3>");

      var e_author = $("<span>");
      e_author.addClass("author");
      e_author.html(val.data.author);
      e_subtitle.append(e_author);

      var e_age = $("<span>");
      e_age.addClass("age bullet-before");
//      e_age.html(val.data.created);
      e_age.html( 
        moment.unix(parseInt(val.data.created) ).fromNow()
      );

      e_subtitle.append(e_age);

      var e_views = $("<span>");
      e_views.addClass("views bullet-before");
      e_views.html(val.data.score);
      e_subtitle.append(e_views);

      element.append(e_subtitle);

      var e_desc = $("<div>");
      e_desc.addClass("description clamp-3");
      var count = Math.floor(Math.random() * 100 + 1);
      e_desc.lorem({type: 'words', amount: count.toString(), ptags: false});
//      e_desc.html("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum et, iste quae quibusdam.");
      element.append(e_desc);

      $(".item_list").append(element);
    });
  }

  $(".menu_boards").click(
      function() {
        $.getJSON(
          "./api/my_boards.json",
          "",
          processData
          );
      }
    );

  $(".menu_boards").click();

  $(".menu_random").click(
      function() {
        $.getJSON(
          "./api/random.json",
          "",
          processData
          );
      }
    );

  $(".menu_app").click(
      function() {
        $.getJSON(
          "./api/get_the_app.json",
          "",
          processData
          );
      }
    );


});
