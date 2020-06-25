---
path: "/lesson05/21-exercise--add-countdowntimer"
title: "Exercise: Add CountDownTimer"
---

<youtube id="dxEIrKfq91M"></youtube>

<p>Now it’s your turn to complete this exercise yourself.</p>
<p>Let's add the <a target="_blank" href="https://developer.android.com/reference/kotlin/android/os/CountDownTimer"><code>CountDownTimer</code></a>.</p>
<p><strong>1. Copy the provided companion object with the timer constants:</strong> </p>
<p>In GameViewModel, copy the following <a target="_blank" href="https://kotlinlang.org/docs/reference/java-to-kotlin-interop.html#static-fields">companion object</a> code. This companion object has constants for our timer:</p>

```ts
companion object {
    // These represent different important times
    // This is when the game is over
    const val DONE = 0L
    // This is the number of milliseconds in a second
    const val ONE_SECOND = 1000L
    // This is the total time of the game
    const val COUNTDOWN_TIME = 60000L
}
```

<p>Feel free to change the <code>COUNTDOWN_TIME</code> constant so that the game doesn't last a whole minute. This can be helpful for running the app to check whether it's working.</p>
<p><strong>2. Create a <code>timer</code> field of type CountDownTimer in the GameViewModel:</strong>
You don’t need to worry about initializing it yet. Just declare it and ignore the error for now.</p>
<p><strong>3. Create a properly encapsulated LiveData for the current time called <code>currentTime</code>:</strong></p>
<p>Use the same method as you did earlier to encapsulate LiveData for <code>score</code> and <code>word</code>. The type of <code>currentTime</code> should be of type Long.</p>
<p><strong>4. Copy over the CountDownTimer code and then update <code>currentTime</code> and <code>eventGameFinish</code> appropriately as the timer ticks and finishes:</strong></p>
<p>In the <code>init</code> of GameViewModel, copy the CountDownTimer code below:</p>

```ts
timer = object : CountDownTimer(COUNTDOWN_TIME, ONE_SECOND) {

    override fun onTick(millisUntilFinished: Long) {
        // TODO implement what should happen each tick of the timer
    }

    override fun onFinish() {
        // TODO implement what should happen when the timer finishes
    }
}

timer.start()
```

<p>What should happen on each tick?  What about when the timer finishes?  Fill these in yourself.</p>
<p><strong>5. Update the logic in the <code>nextWord</code> function so that it doesn't end the game:</strong></p>
<p>The game should finish when the timer runs out <strong>not</strong> when there are no words left in the list. If there are no words in the list, you should add the words back to the list and re-shuffle the list. </p>
<p>You can do this using <code>resetList</code>.  Update the code so that it doesn't end the game, but instead calls <code>resetList</code>.</p>
<p><strong>6. Cancel the timer in <code>onCleared</code>:</strong></p>
<p>To avoid memory leaks, you should always cancel a CountDownTimer if you no longer need it. To do that, you can call:</p>

```ts
override fun onCleared() {
    super.onCleared()
    timer.cancel()
}
```

<p><strong>7. Update the UI:</strong></p>
<p>You want the <code>timerText</code> on screen to show the appropriate time. Figure out how to use LiveData from the GameViewModel to do this - remember, you've done something similar for <code>score</code> and <code>word</code>.  You'll need to convert the Long for the timer into a String. You can use the DateUtils tool to do that:</p>

```ts
DateUtils.formatElapsedTime(newTime)
```

<p>Run the code to see your new timer working.</p>
<p>If you want to start at this step, you can download this exercise code from: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-guess-it/archive/Step.06-Exercise-Add-the-Timer.zip">Step.06-Exercise-Add-the-Timer</a>.</p>
<p>You will find plenty of <code>//TODO</code> comments to help you complete this exercise, and if you get stuck, go back and watch the video again.</p>
<p>Once you’re done, you can check your solution against the solution we’ve provided here <a target="_blank" href="https://github.com/udacity/andfun-kotlin-guess-it/tree/Step.06-Solution-Add-the-Timer">Step.06-Solution-Add-the-Timer</a> or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-guess-it/compare/Step.06-Exercise-Add-the-Timer...Step.06-Solution-Add-the-Timer">git diff.</a></p>

<text-box variant='learningObjectives' name='Check the steps below as you implement them to complete this exercise.'>

- Copy the provided companion object with the timer constants.
- Create a timer field of type CountDownTimer in the GameViewModel.
- Create a properly encapsulated LiveData for the current time called currentTime.
- Copy over the CountDownTimer code and then update currentTime and eventGameFinish appropriately as the timer ticks and finishes.
- Update the logic in the nextWord function so that it doesn't end the game.
- Cancel the timer in onCleared.
- Update the UI.

</text-box>

<p>Delightful! You have a timer! You can check your solution against the solution we’ve provided here <a target="_blank" href="https://github.com/udacity/andfun-kotlin-guess-it/tree/Step.06-Solution-Add-the-Timer">Step.06-Solution-Add-the-Timer</a> or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-guess-it/compare/Step.06-Exercise-Add-the-Timer...Step.06-Solution-Add-the-Timer">git diff</a>.</p>
<button>Continue</button>

<p>Reference documentation</p>
<ul>
<li><a target="_blank" href="https://developer.android.com/reference/kotlin/android/os/CountDownTimer"> Documentation - CountDownTimer</a></li>
</ul>
