---
path: "/lesson04/12-exercise--setup-and-teardown"
title: "Exercise: Setup and Teardown"
---

<youtube id="LlbysRkrex0"></youtube>

<h3>Quiz Question</h3>
<p>If I want the timer running only when the activity is visible, during what lifecycle method should I call <code>start()</code> and <code>stop()</code>?</p>
<p>-onResume</p>
<p>-onPause</p>
<p>-onRestart</p>
<p>-onCreate</p>
<p>-onDestroy</p>
<h3>Timer</h3>  <h3>Activity</h3>
<p>I should start the timer in:</p> <p>onStart</p>
<p>I should stop the timer in:</p>  <p>onStop</p>
<button>Submit</button>

<p>You only want to start and stop the timer when the activity becomes and stops being <strong>visible</strong>. What lifecycle callback methods mark when the visible lifecycle begins and ends?</p>
<button>Try Again</button>

<p>Congrats! You're doing great.</p>
<button>Continue</button>

<youtube id="BHh08XncVAk"></youtube>

<p>Now it’s your turn to complete this exercise yourself. </p>
<p>For this exercise, you will create a timer class that counts every second when the app is on screen.</p>
<p><strong>1. Uncomment the DessertTimer class. </strong></p>
<p><strong>2. Initialize DessertTimer in onCreate callback of Main Activity: </strong></p>

```ts
dessertTimer = DessertTimer()
```

<p><strong>3. Start DessertTimer in onStart and stop it in onStop callback: </strong></p>

```ts
dessertTimer.startTimer()
dessertTimer.stopTimer()
```

<p>If you want to start at this step, you can download this exercise code from: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-L4/archive/Step.03-Exercise-Setup-and-tear-down.zip">Step.03-Exercise-Setup-and-tear-down</a>.</p>
<p>You will find plenty of <code>//TODO</code> comments to help you complete this exercise, and if you get stuck, go back and watch the video again.</p>
<p>Once you’re done, you can check your solution against the solution we’ve provided here <a target="_blank" href="https://github.com/udacity/andfun-kotlin-dessert-pusher/tree/Step.03-Solution-Setup-and-tear-down">Step.03-Solution-Setup-and-tear-down</a> or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-dessert-pusher/compare/Step.03-Exercise-Setup-and-tear-down...Step.03-Solution-Setup-and-tear-down">git diff</a>.</p>



<text-box variant='learningObjectives' name='Check the steps below as you implement them to complete this exercise.'>

- Uncomment the DessertTimer class.
- Initialize DessertTimer object.
- Start the DessertTimer in onStart and stop it in onStop.

</text-box>

<p>Great job!</p>
<p><em>Solution:</em>  <a target="_blank" href="https://github.com/udacity/andfun-kotlin-dessert-pusher/tree/Step.03-Solution-Setup-and-tear-down">Step.03-Solution-Setup-and-tear-down</a> or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-dessert-pusher/compare/Step.03-Exercise-Setup-and-tear-down...Step.03-Solution-Setup-and-tear-down">git diff</a></p>
<button>Continue</button>
