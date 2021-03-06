import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      //train
      "Egyptian": "Egyptian",
      "National Railways": "National Railways",
      "Authority Services": "Authority Services",
      "Book your train": "Book Your Train",
      "sleep train booking": "Sleep Train Booking",
      "train schedules": "Train Schedules",
      "Book Your Meal": "Book Your Meal",
      "Explanation of booking screens": "Explanation of booking screens",
      "Train Footer": "Egypt Railways, All Rights Reserved, Developed by Yello",
      "Seats Available" : "Seats Available",
      "Available Trips" : "Available Trips",
      "Passenger Information" : "Passenger Information",
      "Passenger Seats" : "Passenger Seats",
      "Ticket Issue" : "Ticket Issue",
      "Trip type" : "Trip type",
      "one-way trip" : "one-way trip" , 
      "Round trip" : "Round trip" ,
      "Start Station" : "Start Station",
      "End Station" : "End Station",
      "choose station" : "choose station",
      "Cairo" : "Cairo",
      "Alex" : "Alex" ,
      "Aswan" : "Aswan",
      "Departure Coach class" : "Departure Coach class" ,
      "Select Coach Class" : "Select Coach Class" ,
      "AC 1" : "AC 1" ,
      "AC 2" : "AC 2" ,
      "GA 2" : "GA 2" ,
      "Departure date" : "Departure date",
      "Offset (+/-Day)" : "Offset (+/-Day)",
      "Departure time from" : "Departure time from",
      "Passenger Profile" : "Passenger Profile",
      "Count" : "Count" ,
      "Ordinary" : "Ordinary",
      "Exit" : "Exit" ,
      "Next" : "Next" ,
      "Back" : "Back",
      "outgoing Trips" : "outgoing Trips" ,
      "Train No." : "Train No." ,
      "Departure Time	" : "Departure Time	",
      "Arrival Time" : "Arrival Time" ,
      "Available / Waiting" : "Available / Waiting" ,
      "Service Type" : "Service Type" ,
      "Coach Class" : "Coach Class" ,
      "Price" : "Price",
      "Available" : "Available",
      "Multiple Stop" : "Multiple Stop",
      "Passenger" : "Passenger",
      "#" : "#",
      " Ordinary" : " Ordinary",
      "first name" : "first name" ,
      "Middle Name" : "Middle Name" ,
      "Last Name" : "Last Name" ,
      "Name" : "Name",
      "Identity Type" : "Identity Type",
      "National Id" : "National Id" ,
      "Passport Number" : "Passport Number",
      "Passport" : "Passport" ,
      "Identity" : "Identity",
      "Nationality" : "Nationality",
      "Egypt" : "Egypt" ,
      "China" : "China" ,
      "Birth Date" : "Birth Date",
      "Reservation Number:" : "Reservation Number:",
      "Number of seats" : "Number of seats",
      "Outgoing Route" : "Outgoing Route",
      "Seat" : "Seat",
      "Coach" : "Coach" ,
      "Payment Information" : "Payment Information",
      "Ticket Fare" : "Ticket Fare",
      "(LE)" : "(LE)",
      "Read terms and conditions" : "Read terms and conditions",
      "Payment" : "Payment",
      "Trip Date" : "Trip Date",
      "Return Coach class" : "Return Coach class",
      "Return date" : "Return date",
      "Return time from" : "Return time from",
      "choose start and end station" : "choose start and end station",
      "choose end station" : "choose end station",
      "choose start station" : "choose start station",
      "choose different station" : "choose different station",
      "choose Your Trip" : "choose Your Trip",
      "Please write your fullname" : "Please write your fullname",
      "Payment in progress" : "Payment in progress",
      "Try Again" : "Try Again",
      //metro
      "Passenger Services": "Passenger Services",
      "Important Stations": "Important Stations",
      "Special Needs": "Special Needs",
      "Buy Ticket": "Buy Ticket",
      "Hot Line": "Hot Line",
      "Violation / Fine": "Violation / Fine",
      "Important Information for Passenger": "Important Information for Passenger",
      "Complaints": "Complaints",
      "Maps": "Maps",
      "Nearby": "Nearby",
      "Plan a Journey": "Plan a Journey",
      "From": "From",
      "To": "To",
      "Contact Us": "Contact Us",
      "Important Links": "Important Links",
      "Subscriptions": "Subscriptions",
      //vodafone
      "O": "O",
      "ur Service": "ur Service",
      "Recharge your balance": "Recharge your balance",
      "International balance transfer": "International balance transfer",
      "Recharge your balance": "Recharge your balance",
      "Balance Transfer": "Balance Transfer",
      "Pay your bill": "Pay your bill",
      "Vodafone Cash (Send Only)": "Vodafone Cash (Send Only)",
      "Promotions": "Promotions",
      "Store Locator": "Store Locator",
      "Chat with us": "Chat with us",
      "Smart Payment Solutions": "Smart Payment Solutions",
      "About Vodafone": "About Vodafone",
      "About us": "About us",
      "Careers": "Careers",
      "News & press releases": "News & press releases",
      "Sustainable business": "Sustainable business",
      "TV Commercials": "TV Commercials",
      "Help": "Help",
      "Services FAQ": "Services FAQ's",
      "Be protected": "Be protected",
      "Call us": "Call us",
      "Ask our community": "Ask our community",
      "Products and services": "Products and services",
      "Phones": "Phones",
      "Broadband": "Broadband",
      "Accessories": "Accessories",
      "Discounts": "Discounts",
      "Switch to business": "Switch to business",
      "Terms & conditions | Privacy Notice": "Terms & conditions | Privacy Notice",
      "?? 2021 Vodafone Egypt": "?? 2021 Vodafone Egypt",
      //We
      "Pay bill / Recharge My Mobile": "Pay bill / Recharge My Mobile",
      "Pay my Fixed Voice bill": "Pay my Fixed Voice bill",
      "Renew my WE Internet subscription": "Renew my WE Internet subscription",
      "Reserve my Indigo Number" : "Reserve my Indigo Number",
      "Store Location": "Store Location",
      "We pay": "We pay",
      "Bill Limit": "Bill Limit",
      "Data Transfer": "Data Transfer",
      "140 Guide": "140 Guide",
      "TELECOMEGYPT" : "TELECOMEGYPT",
      "Mission and Vision" : "Mission and Vision",
      "Board of Directors" : "Board of Directors",
      "Our Contact Channels" : "Our Contact Channels" , 
      "Email Us" : "Email Us",
      "SUPPORT" : "SUPPORT",
      "FAQ" : "FAQ",
      "Live Chat & Support" : "Live Chat & Support",
      "Ma3ak" : "Ma3ak" , 
      "Internal Wiring Service" : "Internal Wiring Service",
      "MY ACCOUNT" : "MY ACCOUNT",
      "Manage My Landline" : "Manage My Landline" , 
      "Manage My Account" : "Manage My Account",
      "ABOUT THIS SITE" : "ABOUT THIS SITE",
      "sitemap(personal)" : "sitemap(personal)" , 
      "sitemap(business)" : "sitemap(business)",
      //etisalat
      "Etisalat Cash (send only)" : "Etisalat Cash (send only)",
      "Shopping" : "Shopping",
      "Update my line information" : "Update my line information",
      "Etisalat" : "Etisalat",
      "Find a store" : "Find a store",
      "Coverage Map" : "Coverage Map" , 
      "Privacy Policy" : "Privacy Policy",
      "Terms and Conditions" : "Terms and Conditions",
      "Etisalat world" : "Etisalat world",
      "Bill and Recharge" : "Bill and Recharge",
      "Request your ADSL" : "Request your ADSL",
      "Corporate Social Responsibility" : "Corporate Social Responsibility",
      "Vendor Management Office" : "Vendor Management Office",
      "Follow us on" : "Follow us on",
      //Orange
      "Services for you" : "Services for you",
      "Pay/Recharge for others (Mobile)" : "Pay/Recharge for others (Mobile)",
      "Orange Cash (send only)" : "Orange Cash (send only)",
      "Offers and promotions" : "Offers and promotions",
      "Recharge Online" : "Recharge Online",
      "Business" : "Business",
      "Business plans" : "Business plans",
      "Business solutions" : "Business solutions",
      "SPECIAL for Business" : "SPECIAL for Business",
      "Services and payments" : "Services and payments" ,
      "Handsets and Devices" : "Handsets and Devices",
      "Shop" : "Shop",
      "Internet" : "Internet",
      "Services" : "Services",
      "Tariff plans" : "Tariff plans",
      "Entertainment" : "Entertainment",
      "Quick Links" : "Quick Links",
      "About Orange Egypt" : "About Orange Egypt",
      "My account" : "My account",
      "Investor relations" : "Investor relations",
      "Legal" : "Legal",
      "Privacy" : "Privacy" , 
      "Sitemap" : "Sitemap",
      //water
      "Drinking water and sanitation is a right for every citizen" : "Drinking water and sanitation is a right for every citizen",
      "Our services" : "Our services",
      "Citizens' complaints" : "Citizens' complaints",
      "p1" : "In the interest of the company to satisfy citizens, and improve the services provided to them, this service enables you to submit commercial and technical complaints to the Holding Company for Drinking Water and Wastewater.",
      "p2" : "The service allows electronic payment of drinking water and sewage bills in the governorates of (Cairo, Giza, Menoufia, Beheira, Sohag, Alexandria, Red Sea, Matrouh), and it is being activated in the rest of the governorates.",
      "p3" : "It allows calculating the value of the monthly bill for the amount of water consumed, according to the pricing approved by the Presidency of the Council of Ministers, in order to achieve the principle of transparency, and the possibility of rationalizing consumption.",
      "for complaints" : "for complaints",
      "Calculate your bill" : "Calculate your bill",
      "Topics that interest you" : "Topics that interest you",
      "About the holding company" : "About the holding company" , 
      "Subsidiaries" : "Subsidiaries",
      "Newspaper" : "Newspaper",
      "Services that interest you"  : "Services that interest you",
      "Real estate registration services" : "Real estate registration services",
      "footer Water" : "All rights reserved to the Holding Company for Drinking Water and Wastewater 2004-2020 Design and implementation of the Programs and Applications Department of the Holding Company for Drinking Water and Wastewater",
      //gas
      "A new start from Petrotrade electronic payment" : "A new start from Petrotrade electronic payment",
      "Pay gas bills through the company's website in cooperation" : "Pay gas bills through the company's website in cooperation",
      "To access payment, click here" : " To access payment, click here",
      "Petrotrade Services" : "Petrotrade Services",
      "gas bill" : "gas bill" ,
      "gas reading input" : "gas reading input",
      "online payment" : "online payment",
      "Enter complaints" : "Enter complaints",
      "footer Gas" : "Copyright ?? 2005 Petrotrade Petroleum Trading Services. All rights reserved.",
      //electric
      "Electricity Company" : "Electricity Company",
      "Invoices & Enquires" : "Invoices & Enquires",
      "Report a power theft" : "Report a power theft",
      "Delivery procedures" : "Delivery procedures",
      "Calculate your consumption" : "Calculate your consumption",
      "Investor Services" : "Investor Services",
      "complaint" : "complaint" , 
      "Real estate registration services" : "Real estate registration services" , 
      "Investors Guide" : "Investors Guide",
      "local manufacturing companies" : "local manufacturing companies"

    } 
  },
  ar: {
    translation: {
      //train
      "Egyptian": "??????",
      "Payment failed" : "?????????????? ???????? ",
      "National Railways": "???????? ?????? ",
      "Authority Services": "?????????? ????????????",
      "Book your train": "???????? ??????????",
      "sleep train booking": "?????? ???????? ??????????",
      "train schedules": "???????????? ????????????????",
      "Book Your Meal": "???????? ??????????",
      "Explanation of booking screens": "?????? ?????????? ??????????",
      "Train Footer": "?????? ???????? ?????? , ???????? ???????????? ???????????? , ???? ???????????? ???????????? Yello",
      "Seats Available" : "?????????????? ??????????????",
      "Available Trips" : "???????????? ??????????????",
      "Passenger Information" : "???????????? ????????????",
      "Passenger Seats" : "?????????? ??????????????",
      "Ticket Issue" : "?????????? ??????????????",
      "Trip type" : "?????? ????????????",
      "one-way trip" : "???????? ??????" , 
      "Round trip" : "???????? ?? ????????" ,
      "Start Station" : "???????? ????????????",
      "End Station" : "???????? ????????????",
      "choose station" : "???????????? ????????????",
      "Cairo" : "??????????????",
      "Alex" : "????????????????????" ,
      "Aswan" : "??????????",
      "Departure Coach class" : "???????? ???????????? ????????" ,
      "Select Coach Class" : "???????? ???????? ????????????" ,
      "AC 1" : "???????? ??????????" ,
      "AC 2" : "?????????? ??????????" ,
      "GA 2" : "?????????? ??????????" ,
      "Departure date" : "?????????? ????????????",
      "Offset (+/-Day)" : "???????????????? (+/- ??????)",
      "Departure time from" : "?????? ???????????? ???????? ????",
      "Passenger Profile" : "?????? ?????????????? ????????????????",
      "Count" : "??????????" ,
      "Ordinary" : "?????????? ??????????	",
      "Exit" : "????????" ,
      "Next" : "????????????" ,
      "Back" : "????????????",
      "outgoing Trips" : "?????????? ????????????" ,
      "Train No." : "?????? ????????????" ,
      "Departure Time" : "?????? ????????????",
      "Arrival Time" : "?????? ????????????" ,
      "Available / Waiting" : "???????? / ????????????" ,
      "Service Type" : "?????? ????????????" ,
      "Coach Class" : "????????????" ,
      "Price" : "??????????",
      "Available" : "????????",
      "Multiple Stop" : "?????????? ??????????????",
      "Passenger" : "????????????",
      "#" : "#",
      " Ordinary" : " ?????????? ??????????",
      "first name" : "?????????? ?????????? " ,
      "Middle Name" : "?????? ???????? " ,
      "Last Name" : "?????? ???????? ???? ?????????? " ,
      "Name" : "??????????",
      "Identity Type" : "?????? ????????????",
      "National Id" : "?????? ????????" ,
      "Passport Number" : "?????? ????????????",
      "Passport" : "???????? ??????????" ,
      "Identity" : "?????????????? ????????????",
      "Nationality" : "??????????????",
      "Egypt" : "??????" ,
      "China" : "??????????" ,
      "Birth Date" : "?????????? ??????????????",
      "Reservation Number:" : "?????? ?????????? :",
      "Number of seats" : "?????? ?????????????? ????????????????	",
      "Outgoing Route" : "????????????",
      "Seat" : "????????????",
      "Coach" : "????????????" ,
      "Payment Information" : "?????????????? ????????????",
      "Ticket Fare" : "???????????? ??????????",
      "(LE)" : "(????????)",
      "Read terms and conditions" : "?????????? ???????????? ?? ??????????????",
      "Payment" : "??????????",
      "Trip Date" : "?????????? ????????????",
      "Return Coach class": "???????? ?????? ????????????",
      "Return date" : "?????????? ????????????" ,
      "Return time from" : "?????? ???????????? ????",
      "choose start and end station" : "?????????? ???????? ?????????????? ?? ???????? ????????????",
      "choose end station" : "?????????? ???????? ????????????",
      "choose start station" : "?????????? ???????? ??????????????",
      "choose different station" : "?????????? ???????? ?????????? ?? ???????? ????????????",
      "choose Your Trip" : "?????????? ??????????",
      "Please write your fullname" : "???? ???????? ???????? ?????????? ????????",
      "Payment in progress" : "???????? ??????????",
      "Try Again" : "???????? ?????? ????????",
      "Processing Payment" : "?????????? ??????????",
      "Please Wait" : "???? ???????? ??????????" ,
      //metro
      "Passenger Services": "?????????? ????????????",
      "Important Stations": "?????????? ????????",
      "Special Needs": "?????? ???????????????????? ????????????",
      "Buy Ticket": "???????? ??????????",
      "Hot Line": "???????? ????????????",
      "Violation / Fine": "???????????????? /??????????????",
      "Important Information for Passenger": "?????????????? ?????? ????????????",
      "Complaints": "????????????",
      "Maps": "?????????? ????????????",
      "Nearby": "???????? ????????",
      "Plan a Journey": "?????? ????????????",
      "From": "????",
      "To": "??????",
      "Contact Us": "?????????? ????????",
      "Important Links": "?????????? ????????",
      "Subscriptions": "????????????????????",
      //vodafone
      "O": "??",
      "ur Service": "????????????",
      "Recharge your balance": "???????? ??????????",
      "International balance transfer": "?????????? ???????????? ????????????",
      "Balance Transfer": "?????????? ????????",
      "Pay your bill": "???????? ??????????????",
      "Vodafone Cash (Send Only)": "?????????????? ?????? (???????? ??????)",
      "Promotions": "????????",
      "Store Locator": "???????? ????????????",
      "Chat with us": "?????????? ????????",
      "Smart Payment Solutions": "?????????? ?????????? ????????????",
      "About Vodafone": "???? ??????????????",
      "About us": "???? ??????????????",
      "Careers": "??????????????",
      "News & press releases": "?????????????? ??????????????",
      "Sustainable business": "?????????????? ??????????????????",
      "TV Commercials": "??????????????????",
      "Help": "????????????????",
      "Services FAQ": "?????????????? ??????????????",
      "Be protected": "Be protected",
      "Call us": "??????????",
      "Ask our community": "????????????",
      "Products and services": "?????????????? ???????????? ??????????",
      "Phones": "????????????????????",
      "Broadband": "Broadband",
      "Accessories": "??????????????????????",
      "Discounts": "????????????",
      "Switch to business": "???????????????? ???????????? ??????????????",
      "Terms & conditions | Privacy Notice": "?????????? ???????????? | ???????????? ?? ?????????????? |???????? ????????????????",
      "?? 2021 Vodafone Egypt": "?? 2020 ?????????????? ?????? ",
      //We
      "Pay bill / Recharge My Mobile": "?????? ???????????????? / ?????????? ?????? ?????????? ??????????????",
      "Pay my Fixed Voice bill": "?????? ?????????????? ?????????????????? ??????????????",
      "Renew my WE Internet subscription": "?????????? ?????????????? WE Internet",
      "Store Location": "???????? ????????????",
      "Reserve my Indigo Number" : "???????? ?????? ???????????? ?????????? ????",
      "We pay": "We pay",
      "Bill Limit": "???????????? ???? ????????????????",
      "Data Transfer": "?????????? ????",
      "140 Guide": "140 ????????",
      "TELECOMEGYPT" : "?????????????? ??????????????????",
      "Mission and Vision" : "?????????? ?? ????????????",
      "Board of Directors" : "?????????? ???????? ??????????????",
      "Our Contact Channels" : "???????? ??????" , 
      "Email Us" : "?????????? ???????? ????????????????",
      "SUPPORT" : "?????????? ?? ????????????????",
      "FAQ" : "?????????? ????????????",
      "Live Chat & Support" : "???????????? ???????? ??????????????",
      "Ma3ak" : "????????" , 
      "Internal Wiring Service" : "???????? ?????????? ?????????????? ????????????????",
      "MY ACCOUNT" : "??????????",
      "Manage My Landline" : "?????????? ???????????? ??????????????" , 
      "Manage My Account" : "?????????? ????????????",
      "ABOUT THIS SITE" : "???? ????????????",
      "sitemap(personal)" : "?????????? ???????????? (????????)" , 
      "sitemap(business)" : "?????????? ???????????? (??????????)",
      //etisalat
      "Etisalat Cash (send only)" : "?????????????? ?????? (?????????? ??????)",
      "Shopping" : "????????????",
      "Update my line information" : "?????????? ?????????????? ??????",
      "Etisalat" : "??????????????",
      "Find a store" : "?????????? ????????????????",
      "Coverage Map" : "??????????????" , 
      "Privacy Policy" : "?????????? ???????????? ?????? ????????????????",
      "Terms and Conditions" : "???????????? ?? ??????????????",
      "Etisalat world" : "???????? ??????????????",
      "Bill and Recharge" : "???????????????? ????????????",
      "Request your ADSL" : "?????? ???????? ADSL",
      "Corporate Social Responsibility" : "?????????????????? ??????????????????",
      "Vendor Management Office" : "???????? ?????????? ????????????????",
      "Follow us on" : "???????????? ??????",
      //Orange
      "Services for you" : "?????????? ????",
      "Pay/Recharge for others (Mobile)" : "?????????? / ?????????? ?????????? (????????)",
      "Orange Cash (send only)" : "?????????? ??????(?????????? ??????)",
      "Offers and promotions" : "???????????? ?? ??????????????????",
      "Recharge Online" : "???????? ??????????????",
      "Business" : "??????????",
      "Business plans" : "?????????? ??????????",
      "Business solutions" : "???????? ??????????",
      "SPECIAL for Business" : "Special ???????????? ??????????",
      "Services and payments" : "???????? ???????????????? ????????????????" ,
      "Handsets and Devices" : "?????????????? ?? ??????????????",
      "Shop" : "????????",
      "Internet" : "????????????????",
      "Services" : "??????????",
      "Tariff plans" : "?????????? ????????????",
      "Entertainment" : "??????????????",
      "Quick Links" : "?????????? ??????????",
      "About Orange Egypt" : "???? ?????????? ??????",
      "My account" : "??????????",
      "Investor relations" : "???????????? ????????????????????",
      "Legal" : "???????????? ????????????????",
      "Privacy" : "???????? ????????????" , 
      "Sitemap" : "?????????? ????????????",
      //water
      "Drinking water and sanitation is a right for every citizen" : "???????? ???????? ?????????? ???????????? ?????????? ???? ?????? ??????????" ,
      "Our services" : "??????????????",
      "p3" : "???????? ???????? ???????? ???????????????? ?????????????? ???????? ???????? ???????????? ???????????????????????????? ???????????????? ???????????????? ???? ?????????? ???????? ???????????????? ???????????? ???????????????????????????? ???????????????? ?????????? ??????????????????.",
      "Calculate your bill" : "???????? ??????????????",
      "p2" : "???????? ???????????? ???????? ???????????? ???????? ?????????? ???????????? ?????????? ?????????????????????????????????? (???????????????? ?????????????? ?????????????????? ?????????????? ?????????????????????????????????? ?????????? ?????????????? ??????????)?? ?????????? ?????????????? ????????????????????????????.",
      "p1" : "?????????? ???? ???????????? ?????? ???????? ???????????????????? ???????????? ?????????????? ?????????????? ???????????? ?????????? ?????? ???????????? ???? ?????????? ?????????????? ???????????????? ?????????????? ???????????? ?????????????? ?????????? ?????????? ???????????? ??????????.",
      "Citizens' complaints" : "?????????? ??????????????????",
      "for complaints" : "??????????????",
      "Topics that interest you" : "???????????? ????????",
      "About the holding company" : "???????? ???? ???????????? ??????????????",
      "Subsidiaries" : "?????????????? ??????????????",
      "Newspaper" : "?????????? ??????????",
      "Services that interest you" : "?????????? ????????",
      "Real estate registration services" : "?????????? ?????????? ??????????????",
      "footer Water" : "???????? ???????????? ???????????? ???????????? ?????????????? ?????????? ?????????? ???????????? ?????????? 2004-2020 ?????????? ???????????? ?????????? ?????????????? ?? ?????????????????? ?????????????? ?????????????? ?????????? ?????????? ?? ?????????? ??????????",
      //gas
      "A new start from Petrotrade electronic payment" : "?????????????? ?????????? ???? ???????????????? ???????????? ????????????????????",
      "Pay gas bills through the company's website in cooperation" : "?????? ???????????? ?????????? ???? ???????? ???????????? ???????????????????? ???????????? ????????????????",
      "To access payment, click here" : "  ?????????? ?????? ???????? ???????? ??????",
      "Petrotrade Services" : "????????????  ????????????????",
      "gas bill" : "???????????? ??????????" ,
      "gas reading input" : "?????????? ?????????? ??????????",
      "online payment" : "???????????? ????????????????????",
      "Enter complaints" : "?????????? ??????????",
      "footer Gas" : "???????? ?????????? ???????????? ?????????? ?????????????? ???????????????? ??????????????????  ' ????????????????'  2005 " ,
      //electric
      "Electricity Company" : "???????? ????????????????",
      "Invoices & Enquires" : "???????????????? ????????????????????????",
      "Report a power theft" : "?????????????? ???? ???????? ????????????????",
      "Delivery procedures" : "?????????????? ??????????????",
      "Calculate your consumption" : "???????? ????????????????",
      "Investor Services" : "?????????? ????????????????????",
      "complaint" : "????????" , 
      "Real estate registration services" : "?????????? ?????????????? ??????????????" , 
      "Investors Guide" : "???????? ????????????????????",
      "local manufacturing companies" : "?????????? ?????????????? ??????????????",
      "Do you want any service?": "???? ???????? ???????? ??????????",
      "Yes": "??????",
      "No": "????",
      "Cancel Payment" : "?????????? ??????????",
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;