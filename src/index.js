import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'whatwg-fetch';
import searchTriggered from './search-triggered';
import { handleSearch, resultClicked } from './search-results';
import { showLightbox, listenForLightboxClosed } from './lightbox';

listenForLightboxClosed();
searchTriggered(handleSearch);
resultClicked(showLightbox);

