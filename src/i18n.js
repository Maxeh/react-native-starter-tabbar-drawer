import I18n from 'react-native-i18n';

I18n.fallbacks = true;
I18n.locale = "en";

I18n.translations = {
  en: {
    tab_home: 'Home',
    tab_home_title: 'Home',
    tab_notification: 'Requests',
    tab_notification_title: 'Requests',
    tab_profile: 'Profile',
    tab_profile_title: 'Profile',
    tab_chat: 'Chat',
    tab_chat_title: 'Chat',
    tab_search: 'Search',
    tab_search_title: 'Search',
    drawer_settings: 'Settings',
    drawer_friends: 'Friends',
    drawer_support: 'Support',
    drawer_licences: 'Licences',
    drawer_site_notice: 'Site notice',
    drawer_business_terms: 'Business terms / Privacy',
    drawer_logout: 'Logout',
  },
  de: {
    tab_home: 'Home',
    tab_home_title: 'Home',
    tab_notification: 'Anfragen',
    tab_notification_title: 'Anfragen',
    tab_profile: 'Profil',
    tab_profile_title: 'Profil',
    tab_chat: 'Chat',
    tab_chat_title: 'Chat',
    tab_search: 'Suche',
    tab_search_title: 'Suche',
    drawer_settings: 'Einstellungen',
    drawer_friends: 'Freunde',
    drawer_support: 'Support',
    drawer_licences: 'Lizenzen',
    drawer_site_notice: 'Impressum',
    drawer_business_terms: 'AGB / Datenschutz',
    drawer_logout: 'Logout',
  }
};

export default I18n;
