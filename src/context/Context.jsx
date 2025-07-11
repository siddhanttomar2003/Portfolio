import React, {useState} from 'react';
import English from './../language/en.json';

import {IntlProvider} from 'react-intl';

const langContext = React.createContext();


const LangProvider = ({children}) => {
    let defaultLocal;
	let defaultMessage;
	const lang = localStorage.getItem('lang');

	if(lang){
		defaultLocal = lang

		if(lang === 'es-US'){
			defaultLocal = 'en-US'
			defaultMessage = English;
		} 
	}

    const [message, setMessage] = useState(defaultMessage);
    const [locale, setLocale] = useState(defaultLocal);

    const selectLanguage = (language) =>{
        switch (language) {
            case 'en-US':
                setMessage(English);
                setLocale('en-US');
                localStorage.setItem('lang', 'en-US');
                break;
        }
    }
    return (
        <langContext.Provider value={{selectLanguage: selectLanguage}}>
            <IntlProvider locale={locale} messages={message}>
                {children}
            </IntlProvider>
        </langContext.Provider>
    );
};

export {LangProvider, langContext};