# PomodoroClock
A Pomodoro Clock is a combination of two timers. One may be used for work time and one for break time.

•	jQuery, Bootstrap 4, and HTML.

•	User can adjust work and break times. Work time increments by 5 minutes and break time increments by 1 minute.

•	When the user clicks start, the remaining work time appears and begins counting down by 1 second.

Logic highlights:

•	Counts down by 1 second using setInterval.

•	Finds minutes and seconds remaining by: dividing by 60 (minutes) and finding the remainder (seconds).

•	If the remainder (seconds) is less than 10, a zero appears before the remaining seconds in the display. This allows the clock to show a valid time when there are less than 10 seconds remaining in the minute (e.g., 2:05 is shown, not 2:5).

•	Includes progress bar (for work time) that starts at 0, and reaches 100 when time runs out.  100 is divided by seconds remaining and that amount of progress is added each second.

•	When the session time runs out, break time automaticall begins. User can set new work times when break time runs out.

Areas for improvement:

•	Use .now or currentdate, rather than setInterval, to get more accurate times.
