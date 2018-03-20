console.log(DaysOfTheWeek)

var DaysOfTheWeek, text, fLen, i;

var DaysOfTheWeek =('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday')
dLen = DaysOfTheWeek;
text = "<ul>";
for (i = 0; i < dLen; i++) {
    text += "<li>" + DaysOfTheWeek [i] + "</li>";
}
