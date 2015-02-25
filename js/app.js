

$( document ).ready (function() {

  $(".menu_boards").click(
      function() {
//        alert('boo');
        $.getJSON(
          "/api/my_boards.json",
          "",
          function(data) {
            
            $(".item_list").empty();

            $.each(data.data.children, function(idx, val) {

              console.log(val);

              var element = $("<div>");
              element.addClass("item column small-12 medium-6");

              var e_image = $("<div>");
              e_image.addClass("image");
//              e_image.html(val.data.url);
              e_image.css("background-image", "url(" + val.data.url+ ")");
              element.append(e_image);

              var e_title = $("<h2>");
              e_title.addClass("title");
              e_title.html(val.data.title);
              element.append(e_title);

              var e_subtitle = $("<h3>");

              var e_author = $("<span>");
              e_author.addClass("author");
              e_author.html(val.data.author);
              e_subtitle.append(e_author);

              var e_star = $("<span>");
              e_star.html("*");
              e_star.addClass("star");
              e_subtitle.append(e_star);

              var e_age = $("<span>");
              e_age.addClass("age");
              e_age.html(val.data.created);
              e_subtitle.append(e_age);

              e_star = $("<span>");
              e_star.html("*");
              e_star.addClass("star");
              e_subtitle.append(e_star);

              var e_views = $("<span>");
              e_views.addClass("views");
              e_views.html(val.data.score + " views");
              e_subtitle.append(e_views);

              element.append(e_subtitle);

              var e_desc = $("<div>");
              e_desc.addClass("description");
              e_desc.html("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum et, iste quae quibusdam.");
              element.append(e_desc);

              $(".item_list").append(element);
            });
          }

          );
      }
    );


});