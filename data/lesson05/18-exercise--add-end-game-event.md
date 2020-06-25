---
path: "/lesson05/18-exercise--add-end-game-event"
title: "Exercise: Add End Game Event"
---

<youtube id="8duvefu_HLg"></youtube>

<p>Now it’s your turn to complete this exercise yourself.</p>
<p>Let's add the end game event. </p>
<p><strong>1. Make a properly encapsulated LiveData called <code>eventGameFinish</code> that holds a boolean:</strong> </p>
<p>You'll create this LiveData in the GameViewModel. Check out <code>word</code> and <code>score</code> to see how to do this.</p>
<p><strong>2. Make the function <code>onGameFinishComplete</code> which makes the value of <code>eventGameFinish</code> false:</strong></p>
<p>This function simply sets the value of <code>_eventGameFinish</code> to false. This is to signal that you've handled the game finish event and that you don't need to handle it again.  In this specific example, it's a way to say you've done the navigation.</p>
<p><strong>3. Set <code>eventGameFinish</code> to true, to signify that the game is over:</strong></p>
<p>In the GameViewModel, find the condition where the <code>wordList</code> is empty.  If it's empty, the game is over, so signal that by setting the value of <code>eventGameFinish</code> to true.</p>
<p><strong>4. Add an observer of <code>eventGameFinish</code>:</strong></p>
<p>Back in GameFragment, add an observer of <code>eventGameFinish</code>.  </p>
<p>In the observer lambda you should:</p>
<ol>
<li>Make sure that the boolean holding the current value of <code>eventGameFinished</code> is true. This means the game has finished.</li>
<li>If the game has finished, call <code>gameFinished</code>.</li>
<li>Tell the view model that you've handled the game finished event by calling <code>onGameFinishComplete</code>.</li>
</ol>
<p>Run your code and make sure that when you go through all of the words that the game does in fact finish. When it finishes, it should navigate you to the score screen.</p>
<p>If you want to start at this step, you can download this exercise code from: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-guess-it/archive/Step.05-Exercise-Add-End-Game-Event.zip">Step.05-Exercise-Add-End-Game-Event</a>.</p>
<p>You will find plenty of <code>//TODO</code> comments to help you complete this exercise, and if you get stuck, go back and watch the video again.</p>
<p>Once you’re done, you can check your solution against the solution we’ve provided here <a target="_blank" href="https://github.com/udacity/andfun-kotlin-guess-it/tree/Step.05-Solution-Add-End-Game-Event">Step.05-Solution-Add-End-Game-Event</a> or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-guess-it/compare/Step.05-Exercise-Add-End-Game-Event...Step.05-Solution-Add-End-Game-Event">git diff</a>.</p>


<text-box variant='learningObjectives' name='Check the steps below as you implement them to complete this exercise.'>

- Make a properly encapsulated LiveData called eventGameFinish that holds a boolean.
- Make the function onGameFinishComplete which makes the value of eventGameFinish false.
- Set eventGameFinish to true, to signify that the game is over.
- Add an observer of eventGameFinish.

</text-box>

<p>Great work! You can check your solution against the solution we’ve provided here <a target="_blank" href="https://github.com/udacity/andfun-kotlin-guess-it/tree/Step.05-Solution-Add-End-Game-Event">Step.05-Solution-Add-End-Game-Event</a> or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-guess-it/compare/Step.05-Exercise-Add-End-Game-Event...Step.05-Solution-Add-End-Game-Event">git diff</a>.</p>
<button>Continue</button>

<p>Reference documentation</p>
<ul>
<li><a target="_blank" href="https://developer.android.com/topic/libraries/architecture/livedata#observe_livedata_objects">Documentation - Observe LiveData objects</a></li>
</ul>
