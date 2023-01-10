jQuery(document).ready(function($) {
    $('.c-head').on('click', function(e) {
        var item = $(this);
        var parent_item = item.parents('.c-expand');
        parent_item.toggleClass('expanded');
        if (parent_item.hasClass('expanded')) {
            parent_item.find('.c-content').slideDown(800);
        } else {
            parent_item.find('.c-content').slideUp(500);
        }
            //parent_item.find('.c-group-content').slideToggle(800);
        });
});