//Color Theme
const colorTheme = 'blue';
export const colorTheme50 = colorTheme+".50";
export const colorTheme100 = colorTheme+"100";
export const colorTheme200 = colorTheme+"200";
export const colorTheme300 = colorTheme+"300";
export const colorTheme400 = colorTheme+"400";
export const colorTheme500 = colorTheme+"500";
export const colorTheme600 = colorTheme+"600";
export const colorTheme700 = colorTheme+"700";
export const colorTheme800 = colorTheme+"800";
export const colorTheme900 = colorTheme+"900";


export const constantMenu = [
    {text:'จัดการ เมนูอาหาร',directPath:'foods'},
    {text:'จัดการ รายการอาหารประจำเดือน',directPath:''},
    {text:'รายงาน รายการอาหารประจำเดือน',directPath:''},
];

export const appName = 'Wannida Application'
export const foodsPageName = constantMenu.find(menu => menu.directPath === 'foods').text;