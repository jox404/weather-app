const timerOfUpdate = async (oldTime) => {
  var updateble = undefined;
  const oldDate = new Date(oldTime);
  const oldYear = oldDate.getFullYear();
  const oldmMonth = oldDate.getMonth();
  const oldDay = oldDate.getDay();
  const oldHours = oldDate.getHours();
  const newDate = new Date();
  const newYear = newDate.getFullYear();
  const newMonth = newDate.getMonth();
  const newDay = newDate.getDay();
  const newHours = newDate.getHours();

  if (oldYear != newYear || oldmMonth != newMonth || oldDay != newDay) {
    updateble = true;
  } else {
    if (newHours % oldHours >= 3) {
      updateble = true;
    } else {
      updateble = false;
    }
  }

  return updateble;
};

export { timerOfUpdate };
