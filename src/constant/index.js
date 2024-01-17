//Color Theme
export const colorTheme = 'blue';
export const colorTheme50 = colorTheme+".50";
export const colorTheme100 = colorTheme+".100";
export const colorTheme200 = colorTheme+".200";
export const colorTheme300 = colorTheme+".300";
export const colorTheme400 = colorTheme+".400";
export const colorTheme500 = colorTheme+".500";
export const colorTheme600 = colorTheme+".600";
export const colorTheme700 = colorTheme+".700";
export const colorTheme800 = colorTheme+".800";
export const colorTheme900 = colorTheme+".900";


export const constantMenu = [
    {text:'จัดการ เมนูอาหาร',directPath:'foods'},
    {text:'จัดการ รายการอาหารประจำเดือน',directPath:'monthlyFoods'},
    {text:'รายงาน รายการอาหารประจำเดือน',directPath:''},
];

export const appName = 'Wannida Application'
export const foodsPageName = constantMenu.find(menu => menu.directPath === 'foods').text;
export const monthlyFoodsPageName = constantMenu.find(menu => menu.directPath === 'monthlyFoods').text;

export const monthsInThai = [
    { value: "01", label: "มกราคม" },
    { value: "02", label: "กุมภาพันธ์" },
    { value: "03", label: "มีนาคม" },
    { value: "04", label: "เมษายน" },
    { value: "05", label: "พฤษภาคม" },
    { value: "06", label: "มิถุนายน" },
    { value: "07", label: "กรกฎาคม" },
    { value: "08", label: "สิงหาคม" },
    { value: "09", label: "กันยายน" },
    { value: "10", label: "ตุลาคม" },
    { value: "11", label: "พฤศจิกายน" },
    { value: "12", label: "ธันวาคม" },
];

export const thisYear = new Date().getFullYear() + 543;
export const yearsArr = Array.from({ length: 5 }, (_, index) => String(thisYear - 2 + index));