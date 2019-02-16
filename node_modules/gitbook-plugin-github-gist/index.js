/**
 * @function {githubgist}
 *
 * @param {object} block
 */
function githubgist(block) {
    // No need to go further
    if (!block.kwargs.link) {
        return '';
    }

    return '<div class="wd-github-gist">' +
               '<script src="' + block.kwargs.link + '"></script>' +
           '</div>';
}



module.exports = {
    book: {
        assets: './assets',
        js: [],
        css: ['github-gist.css?cacheBreaker=1']
    },
    blocks: {githubgist}
};
