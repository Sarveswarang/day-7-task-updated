// //Solving problems using array functions on the rest countries' data.
// //a.Get all the countries from the Asia continent /region using the Filter function
var request= new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all",true);
request.send()
request.onload=function(){
    var data = request.response
    var result = JSON.parse(data)
    var res=result.filter((ele)=>(ele.region==="Asia"))
   var res1=res.map((ele)=>ele.name)
    console.log(res1)
   
}
//OUTPUT
//(50) ['Afghanistan', 'Armenia', 'Azerbaijan', 'Bahrain', 'Bangladesh', 'Bhutan', 'Brunei Darussalam', 'Cambodia', 'China', 'Georgia', 'Hong Kong', 'India', 'Indonesia', 'Iran (Islamic Republic of)', 'Iraq', 'Israel', 'Japan', 'Jordan', 'Kazakhstan', 'Kuwait', 'Kyrgyzstan', "Lao People's Democratic Republic", 'Lebanon', 'Macao', 'Malaysia', 'Maldives', 'Mongolia', 'Myanmar', 'Nepal', "Korea (Democratic People's Republic of)", 'Oman', 'Pakistan', 'Palestine, State of', 'Philippines', 'Qatar', 'Saudi Arabia', 'Singapore', 'Korea (Republic of)', 'Sri Lanka', 'Syrian Arab Republic', 'Taiwan', 'Tajikistan', 'Thailand', 'Timor-Leste', 'Turkey', 'Turkmenistan', 'United Arab Emirates', 'Uzbekistan', 'Vietnam', 'Yemen']
// // //b.Get all the countries with a population of less than 2 lakhs using Filter function
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send()
 request.onload=function(){
    var data = request.response
    var result = JSON.parse(data)
     var res = result.filter((ele)=>ele.population<200000)
     //to display the filtered result countries
     var res1 = res.map((ele)=>`${ele.name.common}`)
     console.log(res1)
    }
//     //output
//    // (62) ['Aruba', 'Wallis and Futuna', 'Åland Islands', 'Pitcairn Islands', 'Seychelles', 'French Southern and Antarctic Lands', 'Christmas Island', 'Saint Martin', 'Heard Island and McDonald Islands', 'Antarctica', 'Greenland', 'British Indian Ocean Territory', 'Saint Lucia', 'Niue', 'Saint Barthélemy', 'Grenada', 'Isle of Man', 'Curaçao', 'Dominica', 'Faroe Islands', 'Montserrat', 'Cook Islands', 'Bermuda', 'San Marino', 'Cayman Islands', 'Cocos (Keeling) Islands', 'United States Virgin Islands', 'Norfolk Island', 'Nauru', 'Bouvet Island', 'Micronesia', 'American Samoa', 'Anguilla', 'Marshall Islands', 'Kiribati', 'Northern Mariana Islands', 'Guam', 'Gibraltar', 'Vatican City', 'Jersey', 'Tuvalu', 'Saint Helena, Ascension and Tristan da Cunha', 'Samoa', 'Guernsey', 'Tonga', 'Saint Kitts and Nevis', 'Falkland Islands', 'Palau', 'Turks and Caicos Islands', 'British Virgin Islands', 'Liechtenstein', 'Andorra', 'Tokelau', 'Sint Maarten', 'United States Minor Outlying Islands', 'Antigua and Barbuda', 'Saint Pierre and Miquelon', 'Saint Vincent and the Grenadines', 'South Georgia', 'Caribbean Netherlands', 'Monaco', 'Svalbard and Jan Mayen']
// //c.Print the following details name, capital, flag using forEach function
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send()
 request.onload=function(){
    var data = request.response
    var result = JSON.parse(data)
    var res = result.forEach((ele)=>{console.log(`${ele.name.common} : ${ele.capital} :${ele.flag}`)})
    }
//     //output
// //     script.js:46 Mauritania : Nouakchott :🇲🇷
// // script.js:46 Aruba : Oranjestad :🇦🇼
// // script.js:46 Argentina : Buenos Aires :🇦🇷
// // script.js:46 Sweden : Stockholm :🇸🇪
// // script.js:46 Maldives : Malé :🇲🇻
// // script.js:46 Mexico : Mexico City :🇲🇽
// // script.js:46 New Zealand : Wellington :🇳🇿
// // script.js:46 Ecuador : Quito :🇪🇨
// // script.js:46 Wallis and Futuna : Mata-Utu :🇼🇫
// // script.js:46 Åland Islands : Mariehamn :🇦🇽
// // script.js:46 Montenegro : Podgorica :🇲🇪
// // script.js:46 Pakistan : Islamabad :🇵🇰
// // script.js:46 Pitcairn Islands : Adamstown :🇵🇳
// // script.js:46 Zambia : Lusaka :🇿🇲
// // script.js:46 Seychelles : Victoria :🇸🇨
// // script.js:46 Malaysia : Kuala Lumpur :🇲🇾
// // script.js:46 Norway : Oslo :🇳🇴
// // script.js:46 Uzbekistan : Tashkent :🇺🇿
// // script.js:46 Vanuatu : Port Vila :🇻🇺
// // script.js:46 French Southern and Antarctic Lands : Port-aux-Français :🇹🇫
// // script.js:46 Christmas Island : Flying Fish Cove :🇨🇽
// // script.js:46 Singapore : Singapore :🇸🇬
// // script.js:46 Suriname : Paramaribo :🇸🇷
// // script.js:46 Western Sahara : El Aaiún :🇪🇭
// // script.js:46 Saint Martin : Marigot :🇲🇫
// // script.js:46 Costa Rica : San José :🇨🇷
// // script.js:46 Heard Island and McDonald Islands : undefined :🇭🇲
// // script.js:46 Ireland : Dublin :🇮🇪
// // script.js:46 Antarctica : undefined :🇦🇶
// // script.js:46 Australia : Canberra :🇦🇺
// // script.js:46 Libya : Tripoli :🇱🇾
// // script.js:46 Qatar : Doha :🇶🇦
// // script.js:46 Greenland : Nuuk :🇬🇱
// // script.js:46 Mauritius : Port Louis :🇲🇺
// // script.js:46 Kazakhstan : Nur-Sultan :🇰🇿
// // script.js:46 British Indian Ocean Territory : Diego Garcia :🇮🇴
// // script.js:46 Albania : Tirana :🇦🇱
// // script.js:46 Bahrain : Manama :🇧🇭
// // script.js:46 Papua New Guinea : Port Moresby :🇵🇬
// // script.js:46 Burundi : Gitega :🇧🇮
// // script.js:46 India : New Delhi :🇮🇳
// // script.js:46 Uruguay : Montevideo :🇺🇾
// // script.js:46 Saint Lucia : Castries :🇱🇨
// // script.js:46 Barbados : Bridgetown :🇧🇧
// // script.js:46 New Caledonia : Nouméa :🇳🇨
// // script.js:46 Latvia : Riga :🇱🇻
// // script.js:46 Estonia : Tallinn :🇪🇪
// // script.js:46 Niue : Alofi :🇳🇺
// // script.js:46 Saint Barthélemy : Gustavia :🇧🇱
// // script.js:46 Puerto Rico : San Juan :🇵🇷
// // script.js:46 Grenada : St. George's :🇬🇩
// // script.js:46 Macau : undefined :🇲🇴
// // script.js:46 Cyprus : Nicosia :🇨🇾
// // script.js:46 Isle of Man : Douglas :🇮🇲
// // script.js:46 Greece : Athens :🇬🇷
// // script.js:46 Syria : Damascus :🇸🇾
// // script.js:46 Lithuania : Vilnius :🇱🇹
// // script.js:46 Curaçao : Willemstad :🇨🇼
// // script.js:46 Dominica : Roseau :🇩🇲
// // script.js:46 Niger : Niamey :🇳🇪
// // script.js:46 Kyrgyzstan : Bishkek :🇰🇬
// // script.js:46 Trinidad and Tobago : Port of Spain :🇹🇹
// // script.js:46 Togo : Lomé :🇹🇬
// // script.js:46 Palestine : Ramallah,Jerusalem :🇵🇸
// // script.js:46 Madagascar : Antananarivo :🇲🇬
// // script.js:46 Croatia : Zagreb :🇭🇷
// // script.js:46 Faroe Islands : Tórshavn :🇫🇴
// // script.js:46 Haiti : Port-au-Prince :🇭🇹
// // script.js:46 Montserrat : Plymouth :🇲🇸
// // script.js:46 Cook Islands : Avarua :🇨🇰
// // script.js:46 Timor-Leste : Dili :🇹🇱
// // script.js:46 Martinique : Fort-de-France :🇲🇶
// // script.js:46 Cuba : Havana :🇨🇺
// // script.js:46 Taiwan : Taipei :🇹🇼
// // script.js:46 Eswatini : Mbabane :🇸🇿
// // script.js:46 Ukraine : Kyiv :🇺🇦
// // script.js:46 Bermuda : Hamilton :🇧🇲
// // script.js:46 South Korea : Seoul :🇰🇷
// // script.js:46 Peru : Lima :🇵🇪
// // script.js:46 Iraq : Baghdad :🇮🇶
// // script.js:46 Moldova : Chișinău :🇲🇩
// // script.js:46 San Marino : City of San Marino :🇸🇲
// // script.js:46 Venezuela : Caracas :🇻🇪
// // script.js:46 Guyana : Georgetown :🇬🇾
// // script.js:46 Cayman Islands : George Town :🇰🇾
// // script.js:46 Cambodia : Phnom Penh :🇰🇭
// // script.js:46 Cocos (Keeling) Islands : West Island :🇨🇨
// // script.js:46 Malta : Valletta :🇲🇹
// // script.js:46 Sri Lanka : Sri Jayawardenepura Kotte :🇱🇰
// // script.js:46 Israel : Jerusalem :🇮🇱
// // script.js:46 Sudan : Khartoum :🇸🇩
// // script.js:46 United States Virgin Islands : Charlotte Amalie :🇻🇮
// // script.js:46 Eritrea : Asmara :🇪🇷
// // script.js:46 Mali : Bamako :🇲🇱
// // script.js:46 Somalia : Mogadishu :🇸🇴
// // script.js:46 Norfolk Island : Kingston :🇳🇫
// // script.js:46 Comoros : Moroni :🇰🇲
// // script.js:46 Nicaragua : Managua :🇳🇮
// // script.js:46 Russia : Moscow :🇷🇺
// // script.js:46 Uganda : Kampala :🇺🇬
// // script.js:46 Nauru : Yaren :🇳🇷
// // script.js:46 Switzerland : Bern :🇨🇭
// // script.js:46 Portugal : Lisbon :🇵🇹
// // script.js:46 Tajikistan : Dushanbe :🇹🇯
// // script.js:46 South Sudan : Juba :🇸🇸
// // script.js:46 Bouvet Island : undefined :🇧🇻
// // script.js:46 Micronesia : Palikir :🇫🇲
// // script.js:46 American Samoa : Pago Pago :🇦🇸
// // script.js:46 Czechia : Prague :🇨🇿
// // script.js:46 Botswana : Gaborone :🇧🇼
// // script.js:46 Tunisia : Tunis :🇹🇳
// // script.js:46 Anguilla : The Valley :🇦🇮
// // script.js:46 Guinea-Bissau : Bissau :🇬🇼
// // script.js:46 Slovakia : Bratislava :🇸🇰
// // script.js:46 Marshall Islands : Majuro :🇲🇭
// // script.js:46 Algeria : Algiers :🇩🇿
// // script.js:46 Jamaica : Kingston :🇯🇲
// // script.js:46 Mozambique : Maputo :🇲🇿
// // script.js:46 Spain : Madrid :🇪🇸
// // script.js:46 Honduras : Tegucigalpa :🇭🇳
// // script.js:46 Netherlands : Amsterdam :🇳🇱
// // script.js:46 South Africa : Pretoria,Bloemfontein,Cape Town :🇿🇦
// // script.js:46 Azerbaijan : Baku :🇦🇿
// // script.js:46 North Macedonia : Skopje :🇲🇰
// // script.js:46 Gambia : Banjul :🇬🇲
// // script.js:46 Liberia : Monrovia :🇱🇷
// // script.js:46 Luxembourg : Luxembourg :🇱🇺
// // script.js:46 Cape Verde : Praia :🇨🇻
// // script.js:46 Bahamas : Nassau :🇧🇸
// // script.js:46 Georgia : Tbilisi :🇬🇪
// // script.js:46 Kiribati : South Tarawa :🇰🇮
// // script.js:46 Tanzania : Dodoma :🇹🇿
// // script.js:46 China : Beijing :🇨🇳
// // script.js:46 Guatemala : Guatemala City :🇬🇹
// // script.js:46 São Tomé and Príncipe : São Tomé :🇸🇹
// // script.js:46 Germany : Berlin :🇩🇪
// // script.js:46 Sierra Leone : Freetown :🇸🇱
// // script.js:46 Chad : N'Djamena :🇹🇩
// // script.js:46 United Kingdom : London :🇬🇧
// // script.js:46 Slovenia : Ljubljana :🇸🇮
// // script.js:46 Thailand : Bangkok :🇹🇭
// // script.js:46 Indonesia : Jakarta :🇮🇩
// // script.js:46 Northern Mariana Islands : Saipan :🇲🇵
// // script.js:46 Guam : Hagåtña :🇬🇺
// // script.js:46 Finland : Helsinki :🇫🇮
// // script.js:46 Mayotte : Mamoudzou :🇾🇹
// // script.js:46 Gibraltar : Gibraltar :🇬🇮
// // script.js:46 Turkmenistan : Ashgabat :🇹🇲
// // script.js:46 Kosovo : Pristina :🇽🇰
// // script.js:46 Ivory Coast : Yamoussoukro :🇨🇮
// // script.js:46 Morocco : Rabat :🇲🇦
// // script.js:46 Dominican Republic : Santo Domingo :🇩🇴
// // script.js:46 Ghana : Accra :🇬🇭
// // script.js:46 Vatican City : Vatican City :🇻🇦
// // script.js:46 Jersey : Saint Helier :🇯🇪
// // script.js:46 Turkey : Ankara :🇹🇷
// // script.js:46 Tuvalu : Funafuti :🇹🇻
// // script.js:46 Iran : Tehran :🇮🇷
// // script.js:46 Egypt : Cairo :🇪🇬
// // script.js:46 Denmark : Copenhagen :🇩🇰
// // script.js:46 Kenya : Nairobi :🇰🇪
// // script.js:46 Bulgaria : Sofia :🇧🇬
// // script.js:46 Zimbabwe : Harare :🇿🇼
// // script.js:46 Angola : Luanda :🇦🇴
// // script.js:46 Nigeria : Abuja :🇳🇬
// // script.js:46 Poland : Warsaw :🇵🇱
// // script.js:46 Senegal : Dakar :🇸🇳
// // script.js:46 Saint Helena, Ascension and Tristan da Cunha : Jamestown :🇸🇭
// // script.js:46 Lebanon : Beirut :🇱🇧
// // script.js:46 Samoa : Apia :🇼🇸
// // script.js:46 Philippines : Manila :🇵🇭
// // script.js:46 Guernsey : St. Peter Port :🇬🇬
// // script.js:46 El Salvador : San Salvador :🇸🇻
// // script.js:46 Kuwait : Kuwait City :🇰🇼
// // script.js:46 Tonga : Nuku'alofa :🇹🇴
// // script.js:46 Oman : Muscat :🇴🇲
// // script.js:46 Afghanistan : Kabul :🇦🇫
// // script.js:46 Saint Kitts and Nevis : Basseterre :🇰🇳
// // script.js:46 Central African Republic : Bangui :🇨🇫
// // script.js:46 Serbia : Belgrade :🇷🇸
// // script.js:46 Armenia : Yerevan :🇦🇲
// // script.js:46 Bangladesh : Dhaka :🇧🇩
// // script.js:46 Laos : Vientiane :🇱🇦
// // script.js:46 Chile : Santiago :🇨🇱
// // script.js:46 French Polynesia : Papeetē :🇵🇫
// // script.js:46 Panama : Panama City :🇵🇦
// // script.js:46 United States : Washington, D.C. :🇺🇸
// // script.js:46 Nepal : Kathmandu :🇳🇵
// // script.js:46 Myanmar : Naypyidaw :🇲🇲
// // script.js:46 Falkland Islands : Stanley :🇫🇰
// // script.js:46 Hungary : Budapest :🇭🇺
// // script.js:46 Palau : Ngerulmud :🇵🇼
// // script.js:46 Equatorial Guinea : Malabo :🇬🇶
// // script.js:46 Guinea : Conakry :🇬🇳
// // script.js:46 United Arab Emirates : Abu Dhabi :🇦🇪
// // script.js:46 Turks and Caicos Islands : Cockburn Town :🇹🇨
// // script.js:46 British Virgin Islands : Road Town :🇻🇬
// // script.js:46 Liechtenstein : Vaduz :🇱🇮
// // script.js:46 Bosnia and Herzegovina : Sarajevo :🇧🇦
// // script.js:46 Malawi : Lilongwe :🇲🇼
// // script.js:46 Bhutan : Thimphu :🇧🇹
// // script.js:46 Cameroon : Yaoundé :🇨🇲
// // script.js:46 Andorra : Andorra la Vella :🇦🇩
// // script.js:46 Guadeloupe : Basse-Terre :🇬🇵
// // script.js:46 Republic of the Congo : Brazzaville :🇨🇬
// // script.js:46 Réunion : Saint-Denis :🇷🇪
// // script.js:46 Burkina Faso : Ouagadougou :🇧🇫
// // script.js:46 Jordan : Amman :🇯🇴
// // script.js:46 DR Congo : Kinshasa :🇨🇩
// // script.js:46 Tokelau : Fakaofo :🇹🇰
// // script.js:46 Vietnam : Hanoi :🇻🇳
// // script.js:46 Sint Maarten : Philipsburg :🇸🇽
// // script.js:46 Belgium : Brussels :🇧🇪
// // script.js:46 United States Minor Outlying Islands : Washington DC :🇺🇲
// // script.js:46 Brazil : Brasília :🇧🇷
// // script.js:46 Belize : Belmopan :🇧🇿
// // script.js:46 Antigua and Barbuda : Saint John's :🇦🇬
// // script.js:46 Paraguay : Asunción :🇵🇾
// // script.js:46 Benin : Porto-Novo :🇧🇯
// // script.js:46 Brunei : Bandar Seri Begawan :🇧🇳
// // script.js:46 Bolivia : Sucre :🇧🇴
// // script.js:46 Djibouti : Djibouti :🇩🇯
// // script.js:46 French Guiana : Cayenne :🇬🇫
// // script.js:46 Canada : Ottawa :🇨🇦
// // script.js:46 Saint Pierre and Miquelon : Saint-Pierre :🇵🇲
// // script.js:46 Japan : Tokyo :🇯🇵
// // script.js:46 Rwanda : Kigali :🇷🇼
// // script.js:46 Saint Vincent and the Grenadines : Kingstown :🇻🇨
// // script.js:46 Iceland : Reykjavik :🇮🇸
// // script.js:46 Belarus : Minsk :🇧🇾
// // script.js:46 Hong Kong : City of Victoria :🇭🇰
// // script.js:46 Lesotho : Maseru :🇱🇸
// // script.js:46 Fiji : Suva :🇫🇯
// // script.js:46 Austria : Vienna :🇦🇹
// // script.js:46 Colombia : Bogotá :🇨🇴
// // script.js:46 Gabon : Libreville :🇬🇦
// // script.js:46 Saudi Arabia : Riyadh :🇸🇦
// // script.js:46 South Georgia : King Edward Point :🇬🇸
// // script.js:46 Ethiopia : Addis Ababa :🇪🇹
// // script.js:46 Caribbean Netherlands : Kralendijk :🇧🇶
// // script.js:46 Monaco : Monaco :🇲🇨
// // script.js:46 North Korea : Pyongyang :🇰🇵
// // script.js:46 Italy : Rome :🇮🇹
// // script.js:46 Namibia : Windhoek :🇳🇦
// // script.js:46 Mongolia : Ulan Bator :🇲🇳
// // script.js:46 Solomon Islands : Honiara :🇸🇧
// // script.js:46 Yemen : Sana'a :🇾🇪
// // script.js:46 Romania : Bucharest :🇷🇴
// // script.js:46 Svalbard and Jan Mayen : Longyearbyen :🇸🇯
// // script.js:46 France : Paris :🇫🇷
// //d.Print the total population of countries using reduce function
var request= new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send()
request.onload=function(){
    var data = request.response
    var result = JSON.parse(data)
    var res=result.reduce((acc,cv)=>acc+ cv.population,0)
console.log(res)
}
// //output

// //7777721563
// //e Print the country which uses US Dollars as currency.

var request= new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all",true);
request.send()
request.onload=function(){
    var data = request.response
    var result = JSON.parse(data)
    var res=result.filter((ele)=>{
      for(let key in ele.currencies)
      {
         if(ele.currencies[key].code=="USD")
         {
            console.log(ele.name)
         }
      }
    }
    
    )
   }
   //output
   // American Samoa
   // script.js:316 Bonaire, Sint Eustatius and Saba
   // script.js:316 British Indian Ocean Territory
   // script.js:316 Virgin Islands (British)
   // script.js:316 Virgin Islands (U.S.)
   // script.js:316 Cambodia
   // script.js:316 Ecuador
   // script.js:316 El Salvador
   // script.js:316 Guam
   // script.js:316 Marshall Islands
   // script.js:316 Micronesia (Federated States of)
   // script.js:316 Northern Mariana Islands
   // script.js:316 Palau
   // script.js:316 Panama
   // script.js:316 Puerto Rico
   // script.js:316 Timor-Leste
   // script.js:316 Turks and Caicos Islands
   // script.js:316 United States of America