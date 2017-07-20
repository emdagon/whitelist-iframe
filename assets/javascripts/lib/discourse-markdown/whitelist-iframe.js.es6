import {whiteListIframe} from 'pretty-text/sanitizer';

whiteListIframe(/^(https?:)?\/\/www\.youtube\.com\/embed\/.+/i);
whiteListIframe(/^(https?:)?\/\/docs\.google\.com\/a\/.+/i);
