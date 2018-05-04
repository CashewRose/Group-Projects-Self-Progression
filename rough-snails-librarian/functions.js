const getDueDate = () => {
    let monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let date = new Date();
    let month = date.getMonth();
    let dueday = date.getDate() + 7;

    if (dueday > 31 && month in [0, 2, 4, 6, 7, 9, 11]) {
        month += 1;
        dueday -= 31;
    } else if(dueday > 30 && month in [3, 5, 8, 10]) {
        month += 1;
        dueday -= 30;
    } else if(dueday > 28 && month === 2) {
        month += 1;
        dueday -= 28;
    }



    let reviewMonth = monthNames[month];
    let dueDate = monthNames[month] + dueday;
    return dueDate;
}

