---
path: "/lesson05/25-exercise--livedata-map-transformation"
title: "Exercise: LiveData Map Transformation"
---

<youtube id="pe-NUKrb7Xk"></youtube>

<p>Now it’s your turn to complete this exercise yourself.</p>
<p>In this step you'll use a <a target="_blank" href="https://developer.android.com/reference/kotlin/androidx/lifecycle/Transformations#map(androidx.lifecycle.LiveData,%20androidx.arch.core.util.Function)">Tranformations.map</a> to convert the current time into a formatted String.</p>
<p><strong>1. In GameViewModel create a new LiveData called <code>currentTimeString</code>:</strong> </p>
<p>This will store the String version of currentTime.</p>
<p><strong>2. Use Transformation.map to take currentTime to a String output from <code>currentTimeString</code>.</strong></p>
<p>What you want is to use DateUtils to convert the currentTime number output into a String. Then we want to emit that from the currentTimeString LiveData. To do that:</p>

```ts
val currentTimeString = Transformations.map(currentTime) { time ->
    DateUtils.formatElapsedTime(time)
}
```

<p><strong>3. Set <code>timer_text</code> to the value of <code>currentTimeString</code>:</strong></p>
<p>In the game_fragment.xml, find the <code>timer_text</code> view and set the text attribute to the value of <code>currentTimeString</code> (not currentTime!) in a binding expression.</p>
<p><strong>4. Delete the observer for <code>currentTime</code> from GameFragment:</strong></p>
<p>We don't need it anymore! As always, run your code!</p>
<p>If you want to start at this step, you can download this exercise code from: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-guess-it/archive/Step.10-Exercise-Map-Transformation.zip">Step.10-Exercise-Map-Transformation</a>.</p>
<p>You will find plenty of <code>//TODO</code> comments to help you complete this exercise, and if you get stuck go back and watch the video again.</p>
<p>Once you’re done, you can check your solution against the solution we’ve provided here <a target="_blank" href="https://github.com/udacity/andfun-kotlin-guess-it/tree/Step.10-Solution-Map-Transformation">Step.10-Solution-Map-Transformation</a> or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-guess-it/compare/Step.10-Exercise-Map-Transformation...Step.10-Solution-Map-Transformation">git diff</a></p>


<text-box variant='learningObjectives' name='Check the steps below as you implement them to complete this exercise.'>

- Create a new LiveData called currentTimeString.
- Use Transformation.map to take currentTime to a String output from currentTimeString.
- Set timer_text to the value of currentTimeString.
- Delete the observer for currentTime.

</text-box>

<p>You've implemented a Map Transformation! You can check your solution against the solution we’ve provided here <a target="_blank" href="https://github.com/udacity/andfun-kotlin-guess-it/tree/Step.10-Solution-Map-Transformation">Step.10-Solution-Map-Transformation</a> or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-guess-it/compare/Step.10-Exercise-Map-Transformation...Step.10-Solution-Map-Transformation">git diff</a></p>
<button>Continue</button>

<p>Reference documentation</p>
<ul>
<li><a target="_blank" href="https://developer.android.com/reference/kotlin/androidx/lifecycle/Transformations#map(androidx.lifecycle.LiveData,%20androidx.arch.core.util.Function)">Documentation - Map Reference</a></li>
<li><a target="_blank" href="https://developer.android.com/reference/kotlin/androidx/lifecycle/Transformations#switchMap(androidx.lifecycle.LiveData,%20androidx.arch.core.util.Function)">Documentation - SwitchMap Reference</a></li>
<li><a target="_blank" href="https://developer.android.com/reference/kotlin/androidx/lifecycle/MediatorLiveData">Documentation - MediatorLiveData Reference</a></li>
</ul>
