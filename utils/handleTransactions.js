import moment from "moment";

const handleTransactions = ({ array, student, cafe }) => {
  // kira total
  const countTotal = ({ sender, recipient }) => {
    let total = 0;
    array.forEach(data => {
      if (sender && data.sender === sender) total += parseInt(data.amount);
      if (recipient && data.recipient === recipient)
        total += parseInt(data.amount);
    });

    return `${total}.00`;
  };

  const uniqueIds = [];

  const unique = array.filter(element => {
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

  const newArr = unique.map(d => {
    const total = student
      ? countTotal({ arr: array, sender: d.sender })
      : countTotal({ arr: array, recipient: d.recipient });
    return student
      ? { student_name: d.student_name, matricNo: d.sender, total: total }
      : { cafe_name: cafe_name, total: total };
  });

  return newArr;
};

export const filteredDate = ({ data }) => {
  const response = data
    .map(({ created_at }, i) => {
      const start = moment(created_at).startOf("week");
      const end = moment(created_at).endOf("week");

      return {
        id: i,
        date: `${start.format("DD MMM")} - ${end.format("DD MMM")}`,
      };
    })
    .filter(({ date }, i, arr) => {
      const dates = arr.map(({ date }) => date);
      return !dates.includes(date, i + 1);
    });

  return response;
};

export const displayTotal = ({ data, date }) => {
  // 1. convert date to e.g 1 Aug done
  // 2. filter date e.g 1 Aug - 7 Aug => return array
  // 3. count total of transaction => return array of total amount

  const dates = date.split(" - ");
  const formatDate = d => moment(d).format("D MMM"); // function no 1

  const countTotal = ({ sender, recipient }) => {
    let total = 0;
    data.map(data => {
      if (sender && data.sender === sender) total += parseInt(data.amount);
      if (recipient && data.recipient === recipient)
        total += parseInt(data.amount);
    });

    return `${total}.00`;
  };

  const response = data // no 2
    .filter(
      ({ created_at }) =>
        moment(created_at) >=
          moment(new Date(`${dates[0]} ${moment().year()}`)) &&
        moment(created_at) <= moment(new Date(`${dates[1]} ${moment().year()}`))
    )
    .map(dt => {
      const total = countTotal({ recipient: dt.recipient });
      return {
        username: dt.username,
        recipient: dt.recipient,
        cafeName: dt.cafe_name,
        total: total,
        created_at: formatDate(dt.created_at),
      };
    })
    .filter(({ recipient }, i, a) => {
      const recipients = a.map(d => d.recipient);
      return !recipients.includes(recipient, i + 1);
    }); // no 3

  return response;
};

export default handleTransactions;
