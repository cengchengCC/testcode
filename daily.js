function getTargetDate (startDate,days) {
    var startTime = new Date(startDate).getTime();
    var diff = days*86400*1000;
    var endTime = startTime + diff;
    return new Date(endTime)
}
console.log(getTargetDate('2015-10-02',10))