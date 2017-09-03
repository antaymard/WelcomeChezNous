$(window).on("scroll touchmove", function () {
    $('#fixedHeader').toggleClass('hidden', $(document).scrollTop() < 400);
});
