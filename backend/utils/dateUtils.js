const isOverdue = (dueDate, dueTime) => {
  if (!dueDate) return false;

  const now = new Date();
  let taskDeadline = new Date(dueDate);

  // Nếu có dueTime, thêm vào dueDate
  if (dueTime) {
    const [hours, minutes] = dueTime.split(':').map(Number);
    taskDeadline.setHours(hours, minutes);
  } else {
    // Mặc định là 24:00 (cuối ngày)
    taskDeadline.setHours(23, 59, 59);
  }

  return now > taskDeadline;
};

module.exports = { isOverdue };