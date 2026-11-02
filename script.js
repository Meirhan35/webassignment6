$(document).ready(function() {
  console.log("jQuery is ready!");

  $("#changeHeadline").click(function() {
    $("#headline").text("Aspiring Full-Stack Developer");
    $(".intro").html("I am a student of group <b>IT-2503</b> at Astana IT University.");
  });

  $("#resetHeadline").click(function() {
    $("#headline").text("Front-End Developer in Training");
    $(".intro").text("I am a student of group IT-2503 at Astana IT University. I am learning web technologies and building my first interactive pages with jQuery.");
  });

  $("h2").css("color", "#3b82f6");
  $("#name").css("text-transform", "uppercase");
  $(".intro").css("font-style", "italic");

  $("#darkTheme").click(function() {
    $("body").css({"background-color": "#1e1e1e", "color": "#f0f0f0"});
    $("header, section").css("border-color", "#555555");
    $(".panel-title").css({"background-color": "#333333", "color": "#f0f0f0"});
    $(".panel-body").css("border-color", "#555555");
    $(".bar-bg").css("background-color", "#444444");
  });

  $("#lightTheme").click(function() {
    $("body").css({"background-color": "#ffffff", "color": "#222222"});
    $("header, section").css("border-color", "#cccccc");
    $(".panel-title").css({"background-color": "#eeeeee", "color": "#222222"});
    $(".panel-body").css("border-color", "#cccccc");
    $(".bar-bg").css("background-color", "#dddddd");
  });

  $("#hideBtn").click(function() {
    $("#status, #facts").hide();
  });

  $("#showBtn").click(function() {
    $("#status, #facts").show();
  });

  $("#toggleBtn").click(function() {
    $("#status, #facts").toggle();
  });

  $("#fadeInBtn").click(function() {
    $("#img1, #img2").fadeIn();
  });

  $("#fadeOutBtn").click(function() {
    $("#img1, #img2").fadeOut();
  });

  $("#fadeToggleBtn").click(function() {
    $("#img1, #img2").fadeToggle();
  });

  $(".panel-title").click(function() {
    $(this).next(".panel-body").slideToggle();
  });

  $("#addSkill").click(function() {
    var skill = $("#skillInput").val().trim();
    if (skill === "") {
      $("#skillError").text("Skill cannot be empty.");
      return;
    }
    $("#skillError").text("");
    $("#skills").append("<li>" + skill + "</li>");
    $("#skillInput").val("");
  });

  $("#prependSkill").click(function() {
    var skill = $("#skillInput").val().trim();
    if (skill === "") {
      $("#skillError").text("Skill cannot be empty.");
      return;
    }
    $("#skillError").text("");
    $("#skills").prepend("<li>" + skill + "</li>");
    $("#skillInput").val("");
  });

  $("#removeSkill").click(function() {
    $("#skills li:last").remove();
  });

  $("#changeLink").click(function() {
    $("#socialLink").attr("href", "https://linkedin.com").text("LinkedIn");
  });

  $("#nameInput").on("input", function() {
    $("#nameOutput").text($(this).val());
  });

  $("#emailInput").on("input", function() {
    $("#emailOutput").text($(this).val());
  });

  var skillsShown = false;

  $("#animateSkills").click(function() {
    if (!skillsShown) {
      $(".bar").each(function() {
        $(this).animate({width: $(this).data("level") + "%"}, 1500);
      });
      skillsShown = true;
    } else {
      $(".bar").animate({width: 0}, 1500);
      skillsShown = false;
    }
  });
});
