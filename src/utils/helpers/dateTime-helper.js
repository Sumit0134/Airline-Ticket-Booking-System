// This is the file to compare the time
function CompareTime(timeString1, timeString2) {
    const d1=new Date(timeString1);
    const d2=new Date(timeString2);
    console.log(d1, d2);
    console.log(d1.getTime(), d2.getTime());

    return d1.getTime()>d2.getTime();
}

// exporting the function
module.exports={
    CompareTime
}