jQuery(document).ready(function() {

    /**
     * @const {string} COPY_ICO
     */
    const
        COPY_ICO = '<svg ' +
                       'class="wd-ico" ' +
                       'xmlns="http://www.w3.org/2000/svg" ' +
                       'xmlns:xlink="http://www.w3.org/1999/xlink" ' +
                       'width="14" ' +
                       'height="14" ' +
                       'viewBox="0 0 14 14"' +
                   '>' +
                       '<defs>' +
                           '<path id="durba" d="M1059 536v-2h9v2z"/>' +
                           '<path id="durbb" d="M1058 535a1 1 0 0 1 1-1h1v11h-2z"/>' +
                           '<path id="durbc" d="M1062 537h7a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1zm1 2v7h5v-7z"/>' +
                       '</defs>' +
                       '<g><g transform="translate(-1058 -534)">' +
                           '<g><use fill="#4183C4" xlink:href="#durba"/></g>' +
                           '<g><use fill="#4183C4" xlink:href="#durbb"/></g>' +
                           '<g><use fill="#4183C4" xlink:href="#durbc"/></g>' +
                       '</g></g>' +
                   '</svg>';

    /**
     * @function {copyCodeOnClick}
     *
     * @param {Event} event
     */
    function
        copyCodeOnClick(event) {
            var
                copy = '',
                icon = event.target,
                code = icon.parentNode.querySelector('code'),
                textarea = document.createElement('textarea');

            textarea.value = code.textContent;
            textarea.style.position = 'absolute';
            textarea.style.top = '-9000px';
            textarea.style.left = '-9000px';
            document.body.appendChild(textarea);
            textarea.focus();
            textarea.select();
            copy = document.execCommand('copy');
            document.body.removeChild(textarea);
        }

    /**
     * @function {initiateCodeSection}
     *
     * @param {HTMLElement} node
     */
    function
        initiateCodeSection(node) {
            var
                pre = node.parentNode.tagName.toLowerCase() == 'pre' ? true : false,
                wrap = pre ? node.parentNode : document.createElement('span'),
                icon = document.createElement('span'),
                scroll = null;

            node.className = 'wd-code__source';

            icon.title = 'Copy';
            icon.className = 'wd-code__icon';
            icon.innerHTML = COPY_ICO;
            icon.addEventListener('click', copyCodeOnClick);

            wrap.className = 'wd-code';
            wrap.appendChild(icon);

            if (pre) {
                scroll = document.createElement('span');
                scroll.className = 'wd-code__scroll';
                wrap.insertBefore(scroll, node);
                scroll.appendChild(node);
                wrap.insertBefore(scroll, icon);
            } else {
                node.parentNode.insertBefore(wrap, node);
                wrap.insertBefore(node, icon);
            }
        }


    Array.prototype.forEach.call(
        document.querySelectorAll('.markdown-section code'),
        initiateCodeSection
    );

});
