/// <reference types="../@types-20230827T191423Z-001/@types/jquery" />

function homeBtn() {
  $(".open").on("click", function () {
    $(".nav-left").css("display", "block").animate({ width: "200px" }, 1000);

    $(".home-content").animate({ marginLeft: "250px" }, 0, function () {
      $(this).removeClass("col-md-12").addClass("col-md-9");
    });
  });
}

function closeBtn() {
  $(".x").on("click", () => {
    $(".nav-left").animate({ width: "0" }, 1000, function () {
      $(this).css("display", "none");
    });

    $(".home-content").animate({ marginLeft: "0" }, 0, function () {
      $(this).removeClass("col-md-9").addClass("col-md-12");
    });
  });
}

function accordian() {
  $(".toggle h3").on("click", function () {
    $(this).next().slideToggle();
  });
}

function textArea() {
  let maxlength = 100;
  let count = 0;
  $(".countChar span").html(maxlength);
  $("textarea").attr("maxLength", maxlength);
  $("textarea").on("input", () => {
    count = maxlength - $("textarea").val().length;
    console.log(count);
    $(".countChar span").html(count);
  });
}

function countDown() {
  let holder = setInterval(() => {
    let today = new Date().getTime();
    let future = new Date("2023-10-06").getTime();

    let dateDiff = future - today;

    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minuts = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds =
      Math.floor((dateDiff % (1000 * 60)) / 1000) < 10
        ? `0${Math.floor((dateDiff % (1000 * 60)) / 1000)}`
        : Math.floor((dateDiff % (1000 * 60)) / 1000);

    $(".days").html(days);
    $(".hours").html(hours);
    $(".minuts").html(minuts);
    $(".seconds").html(seconds);
  }, 1000);
}
homeBtn();
closeBtn();
accordian();
textArea();

countDown();
