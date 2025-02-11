import dayjs from "dayjs";

function dateFormatValue(date) {
  return dayjs(date).format("YYYY-MM-DD");
}
function dateFormatValue2(date) {
  return dayjs(date).format("DD/MM/YYYY");
}
function dateFormatValue3(date) {
  return dayjs(date).format("DD-MM-YYYY");
}
function FormatTime(date) {
  return dayjs(date).format("HH:mm:ss");
}
function timeFormat(date) {
  return dayjs(date).format("HH");
}
function timeminuteFormat(date) {
  return dayjs(date).format("mm");
}
function timeformatValue(date) {
  return dayjs(date).format("HH:mm");
}
function dateFormatYear(date) {
  return dayjs(date).format("YYYY");
}
function dateFormatMonth(date) {
  return dayjs(date).format("MM");
}
function dateFormatDay(date) {
  return dayjs(date).format("DD");
}
function dateFormatMonthToAPI(date) {
  let day = null;
  switch (dayjs(date).format("MM")) {
    case "01":
      day = "0";
      break;
    case "02":
      day = "1";
      break;
    case "03":
      day = "2";
      break;
    case "04":
      day = "3";
      break;
    case "05":
      day = "4";
      break;
    case "06":
      day = "5";
      break;
    case "07":
      day = "6";
      break;
    case "08":
      day = "7";
      break;
    case "09":
      day = "8";
      break;
    case "10":
      day = "9";
      break;
    case "11":
      day = "10";
      break;
    case "12":
      day = "11";
      break;
  }
  return day;
}
function toThaiDateString(date) {
  let day = ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."];
  let days = day[date.getDay()];
  return `${days}`;
}
function FormatDayFullName(date) {
  let day = ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสฯ", "ศุกร์", "เสาร์"];
  let days = day[date.getDay()];
  return `${days}`;
}

function toThaiDateStringDay(date) {
  let numOfDay = date.getDate();
  return `${numOfDay}`;
}

function dateFormatDefaultToThOnly(date) {
  let monthNames = [
    "มกราคม",
    "กุมภาพันธ์",
    "มีนาคม",
    "เมษายน",
    "พฤษภาคม",
    "มิถุนายน",
    "กรกฎาคม",
    "สิงหาคม",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม",
  ];

  let month = monthNames[date.getMonth()];

  return `${month}`;
}

function dateFormatDefaultToTh(date) {
  let monthNames = [
    "มกราคม",
    "กุมภาพันธ์",
    "มีนาคม",
    "เมษายน",
    "พฤษภาคม",
    "มิถุนายน",
    "กรกฎาคม",
    "สิงหาคม",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม",
  ];

  let year = date.getFullYear() + 543;
  let month = monthNames[date.getMonth()];

  return `${month} ${year}`;
}

function dateFormatFulltToTh(date) {
  let monthNames = [
    "มกราคม",
    "กุมภาพันธ์",
    "	มีนาคม",
    "เมษายน",
    "พฤษภาคม",
    "มิถุนายน",
    "กรกฎาคม",
    "สิงหาคม",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม",
  ];
  let numOfDay = date.getDate();
  let year = date.getFullYear() + 543;
  let month = monthNames[date.getMonth()];

  return `${numOfDay} ${month} ${year}`;
}

function toThDateString(date) {
  let monthNames = [
    "มกราคม",
    "กุมภาพันธ์",
    "	มีนาคม",
    "เมษายน",
    "พฤษภาคม",
    "มิถุนายน",
    "กรกฎาคม",
    "สิงหาคม",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม",
  ];

  let day = ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสฯ", "ศุกร์", "เสาร์"];

  let days = day[date.getDay()];
  let year = date.getFullYear() + 543;
  let month = monthNames[date.getMonth()];
  let numOfDay = date.getDate();

  return `วัน${days} ที่ ${numOfDay} ${month} ${year}`;
}

export {
  dateFormatDefaultToThOnly,
  dateFormatDay,
  FormatTime,
  dateFormatMonthToAPI,
  dateFormatFulltToTh,
  dateFormatValue2,
  dateFormatValue,
  dateFormatValue3,
  timeFormat,
  timeminuteFormat,
  dateFormatYear,
  dateFormatMonth,
  toThaiDateString,
  toThaiDateStringDay,
  dateFormatDefaultToTh,
  FormatDayFullName,
  timeformatValue,
  toThDateString,
};
