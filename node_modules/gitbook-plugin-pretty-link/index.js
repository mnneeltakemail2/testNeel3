/**
 * @const {string} TMPL_ICO
 * @const {string} TMPL_LINK
 */
const
    TMPL_LINK = '<a class="wd-pretty-link" href="{{ link }}" title="{{ link }}">' +
                    '<span class="wd-pretty-link__icon">{{ icon }}</span>' +
                    '<span class="wd-pretty-link__text"><span class="wd-crop">{{ text }}</span></span>' +
                    '<span class="wd-pretty-link__path"><span class="wd-crop">{{ path }}</span></span>' +
                '</a>',
    TMPL_ICO = '<svg ' + 
                   'class="wd-ico" ' +
                   'preserveAspectRatio="xMidYMid meet" ' + 
                   'height="1em" ' +
                   'width="1em" ' +
                   'fill="none" ' +
                   'xmlns="http://www.w3.org/2000/svg" ' +
                   'viewBox="0 0 24 24" ' +
                   'stroke-width="2" ' +
                   'stroke-linecap="round" ' +
                   'stroke-linejoin="round" ' +
                   'stroke="currentColor" ' +
               '><g>' +
                   '<line x1="5" y1="12" x2="19" y2="12"></line>' +
                   '<polyline points="12 5 19 12 12 19"></polyline>' +
               '</g></svg>';

/**
 * @function {prettylink}
 *
 * @param {object} block
 */
function prettylink(block) {
    var
        out = TMPL_LINK,
        link = block.kwargs.link ? block.kwargs.link + '' : '',
        path = link.replace(/(^[^:]+:\/\/)?([^?\/]+)/, '');

    // Make replacements
    out = out.replace(/\{\{\s*icon\s*\}\}/g, TMPL_ICO);
    out = out.replace(/\{\{\s*text\s*\}\}/g, block.body);
    out = out.replace(/\{\{\s*link\s*\}\}/g, link);
    out = out.replace(/\{\{\s*path\s*\}\}/g, path);

    return out;
}



module.exports = {
    book: {
        assets: './assets',
        js: [],
        css: ['pretty-link.css?cacheBreaker=3']
    },
    blocks: {prettylink}
};
