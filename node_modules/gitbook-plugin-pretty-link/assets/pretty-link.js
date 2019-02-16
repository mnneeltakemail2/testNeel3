jQuery(document).ready(function () {
    Array.prototype.forEach.call(document.querySelectorAll('.wd-pretty-link'), (item) => {
        var
            link = item.getAttribute('data-href');

        item.href = link;
        item.title = link;
    });
});
