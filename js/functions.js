
//Функция для проверки длины строки

const checkStringLength = (string, maxStringLength) => string.length <= maxStringLength;

// строка короче 20 символов
checkStringLength('Одри умная кисонька', 20);
// строка длиннее 20 символов
checkStringLength('Одри умная кисонька и она любит собак', 20);


// Функция для проверки, является ли строка палиндромом

const isPalindrom = (string) => {
  const normalizedString = string.replaceAll(' ', '').toLowerCase();
  let stringReversed = '';
  for (let i = normalizedString.length - 1; i >= 0; i--) {
    stringReversed += normalizedString[i];
  }
  return normalizedString === stringReversed;
};
//строка является палиндромом
isPalindrom('И у облаков вокал Боуи');
// и это палиндром
isPalindrom('топот');
//а это нет
isPalindrom('палиндром');


// Функция принимает строку и возвращает число

const returnsDigits = (string) => {
  const normalizedString = string.replaceAll(' ', '');
  let result = '';
  for (let i = 0; i < normalizedString.length; i++) {
    if (!Number.isNaN(parseInt(normalizedString[i], 10))) {
      result += normalizedString[i];
    }
  }
  return result ? +result : NaN;
};
returnsDigits('2023 год 12 месяц');
returnsDigits('100 способов завести кошку и 2 мышей');
returnsDigits('агент кошька 007');
returnsDigits('1 кошка и 0.5 собаки');
returnsDigits('две кошки');


// Делу — время
function ChecksOvertime(dayStart, dayEnd, meetingStart, meetingDuration) {
  const arrFromData = [[...dayStart.split(':')], [...dayEnd.split(':')], [...meetingStart.split(':')]];
  const timeInMinutes = arrFromData.map((item) => Number(item[0]) * 60 + Number(item[1]));
  const [dayStartInMinutes, dayEndInMinutes, meetingStartInMinutes] = timeInMinutes;
  return (dayStartInMinutes <= meetingStartInMinutes) && (meetingStartInMinutes + meetingDuration <= dayEndInMinutes);
}
ChecksOvertime('8:0', '10:0', '8:00', 90);
