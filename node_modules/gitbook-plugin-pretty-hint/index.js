/**
 * @const {string} TMPL_ICO
 * @const {string} TMPL_LINK
 */
const
    TMPL_LINK = '<div class="wd-pretty-hint wd-pretty-hint_type_{{ type }}" style="border-left-color: {{ color }}">' +
                    '<span class="wd-pretty-hint__icon">{{ icon }}</span>' +
                    '<span class="wd-pretty-hint__text">{{ text }}</span>' +
                '</div>';

const
    TYPES = {
        'INFO': {
            COLOR: 'rgb(56, 132, 255)',
            ICON: '<svg ' +
                      'class="wd-ico" ' +
                      'preserveAspectRatio="xMidYMid meet" ' +
                      'height="1em" width="1em" ' +
                      'fill="currentColor" ' +
                      'viewBox="0 0 24 24" ' +
                      'xmlns="http://www.w3.org/2000/svg" ' +
                      'xmlns:xlink="http://www.w3.org/1999/xlink" ' +
                      'stroke="none" ' +
                      'style="color:{{ color }}" ' +
                  '><g>' +
                      '<path d="M12.2 8.98c.06-.01.12-.03.18-.06.06-.02.12-.05.18-.09l.15-.12c.18-.19.29-.45.29-.71 0-.06-.01-.13-.02-.19a.603.603 0 0 0-.06-.19.757.757 0 0 0-.09-.18c-.03-.05-.08-.1-.12-.15-.28-.27-.72-.37-1.09-.21-.13.05-.23.12-.33.21-.04.05-.09.1-.12.15-.04.06-.07.12-.09.18-.03.06-.05.12-.06.19-.01.06-.02.13-.02.19 0 .26.11.52.29.71.1.09.2.16.33.21.12.05.25.08.38.08.06 0 .13-.01.2-.02M13 16v-4a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0M12 3c-4.962 0-9 4.038-9 9 0 4.963 4.038 9 9 9 4.963 0 9-4.037 9-9 0-4.962-4.037-9-9-9m0 20C5.935 23 1 18.065 1 12S5.935 1 12 1c6.066 0 11 4.935 11 11s-4.934 11-11 11" fill-rule="evenodd"></path>' +
                  '</g></svg>'
        },
        'WARN': {
            COLOR: 'rgb(247, 125, 5)',
            ICON: '<svg ' +
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
                      'style="color:{{ color }}" ' +
                  '><g>' +
                      '<circle cx="12" cy="12" r="10"></circle>' +
                      '<line x1="12" y1="8" x2="12" y2="12"></line>' +
                      '<line x1="12" y1="16" x2="12" y2="16"></line>' +
                  '</g></svg>'
        },
        'DEFAULT': {
            COLOR: 'rgb(230, 236, 241)',
            ICON: ''
        },
        'FAILURE': {
            COLOR: 'rgb(255, 70, 66)',
            ICON: '<svg ' +
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
                      'style="color:{{ color }}"' +
                  '><g>' +
                      '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>' +
                      '<line x1="12" y1="9" x2="12" y2="13"></line>' +
                      '<line x1="12" y1="17" x2="12" y2="17"></line>' +
                  '</g></svg>'
        },
        'SUCCESS': {
            COLOR: 'rgb(38, 203, 124)',
            ICON: '<svg ' +
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
                      'style="color:{{ color }}"' +
                  '><g>' +
                      '<path d="M22 11.07V12a10 10 0 1 1-5.93-9.14"></path>' +
                      '<polyline points="23 3 12 14 9 11"></polyline>' +
                  '</g></svg>'
        }
    }

/**
 * @function {prettylink}
 *
 * @param {object} block
 */
function prettyhint(block) {
    var
        icon = '',
        type = (block.kwargs.type + '').toUpperCase(),
        color = (block.kwargs.color + '').toUpperCase(),
        out = TMPL_LINK;

    type = TYPES[type] ? type : 'DEFAULT';
    icon = TYPES[type].ICON ? TYPES[type].ICON : '';
    color = color ? color : TYPES[type].COLOR;
    color = color ? color : TYPES.DEFAULT.COLOR;
    out = out.
          replace(/\{\{\s*icon\s*\}\}/g, icon).
          replace(/\{\{\s*type\s*\}\}/g, type.toLowerCase().replace(/[^\w\d]/g, '-')).
          replace(/\{\{\s*color\s*\}\}/g, color).
          replace(/\{\{\s*text\s*\}\}/g, block.body.replace(/\n/g, '<br>'));

    return out;
}



module.exports = {
    book: {
        assets: './assets',
        js: [],
        css: ['pretty-hint.css?cacheBreaker=1']
    },
    blocks: {prettyhint}
};
