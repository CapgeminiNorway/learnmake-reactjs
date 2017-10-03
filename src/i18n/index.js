import { englishMessages } from 'admin-on-rest';
import norwegianMessages from 'aor-language-norwegian';

import customEnglishMessages from './en';
import customNorwegianMessages from './nb';

export default {
    en: { ...englishMessages, ...customEnglishMessages },
    nb: { ...norwegianMessages, ...customNorwegianMessages },
};
