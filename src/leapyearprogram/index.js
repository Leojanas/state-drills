function leapYear(year){
    if (year < 1582){
        throw new Error('This year is before 1582 and cannot be a leap year.')
    }
    const div400 = year%400 === 0;
    const div100 = year%100 === 0;
    const div4 = year%4 === 0;

    return div400 || (div4 && !div100)
}


export default leapYear

