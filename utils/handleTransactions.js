import moment from "moment";

const handleTransactions = ({ array, student, cafe }) => {
  // kira total
  const countTotal = ({ sender, recipient }) => {
    let total = 0;
    array.map((data) => {
      if (sender && data.sender === sender) total += parseInt(data.amount);
      if (recipient && data.recipient === recipient)
        total += parseInt(data.amount);
    });

    return `${total}.00`;
  };

  const uniqueIds = [];

  const unique = array.filter((element) => {
    const isDuplicate = student
      ? uniqueIds.includes(element.sender)
      : uniqueIds.includes(element.recipient);

    if (!isDuplicate) {
      student
        ? uniqueIds.push(element.sender)
        : uniqueIds.push(element.recipient);

      return true;
    }

    return false;
  });

  const newArr = unique.map((d) => {
    const total = student
      ? countTotal({ arr: array, sender: d.sender })
      : countTotal({ arr: array, recipient: d.recipient });
    return student
      ? { student_name: d.student_name, matricNo: d.sender, total: total }
      : { cafe_name: cafe_name, total: total };
  });

  return newArr;
};

export default handleTransactions;
