const getDaysDifference = () => {
  const date1 = new Date(document.getElementById("firstDate").value);
  const date2 = new Date(document.getElementById("secondDate").value);

  if (date2 < date1) {
    alert("End date must be later than start date");
    return;
  }

  const difference = date2 - date1;

  const differenceInDays = difference / (1000 * 3600 * 24);

  document.getElementById("result").innerHTML = `${date1.toLocaleDateString(
    "en-AU"
  )}, ${date2.toLocaleDateString("en-AU")}, difference ${differenceInDays}`;
};
