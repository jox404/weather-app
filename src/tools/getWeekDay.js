export default function getWeekDay(data, abbreviated) {
  var dayCode = data;
  dayCode = new Date(dayCode);
  dayCode = dayCode.getDay();

  var dayName = undefined;
  switch (dayCode) {
    case 0:
      return (dayName = abbreviated != true ? "Dom" : "Domingo");
      break;
    case 1:
      return (dayName = abbreviated != true ? "Seg" : "Segunda");
      break;
    case 2:
      return (dayName = abbreviated != true ? "Ter" : "Terça");
      break;
    case 3:
      return (dayName = abbreviated != true ? "Qua" : "Quarta");
      break;
    case 4:
      return (dayName = abbreviated != true ? "Qui" : "Quinta");
      break;
    case 5:
      return (dayName = abbreviated != true ? "Sex" : "Sexta");
      break;
    case 6:
      return (dayName = abbreviated != true ? "Sáb" : "Sábado");
      break;
  }
}
