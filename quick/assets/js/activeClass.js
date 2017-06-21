
$(document).ready(function () {
    $('.formulaire__likeIcon').click(function(e) {

        $('.formulaire__likeIcon').removeClass('active');

        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
        // e.preventDefault();
    });
});