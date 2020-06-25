---
path: "/lesson04/18-configuration-changes"
title: "Configuration Changes"
---

<youtube id="pjGEgWExlyg"></youtube>

<h3>Question 1 of 3</h3>
<p>Rotate your phone and record the callbacks triggered:</p>
<h3>Submit to check your answer choices!</h3>
<h3>State</h3>  <h3>Method</h3>
<p>Rotate phone state 1:</p>    <p>onPause</p>
<p>Rotate phone state 2:</p>    <p>onStop</p>
<p>Rotate phone state 3:</p>    <p>onDestroy</p>
<p>Rotate phone state 4:</p>    <p>onCreate</p>
<p>Rotate phone state 5:</p>    <p>onStart</p>
<p>Rotate phone state 6:</p>    <p>onResume</p>
<button>Submit</button>

<p>Try exiting your app, starting it again, and rotating it as directed.</p>
<p>What was the order of the callbacks this time?</p>
<p>Try changing your answers and resubmitting.</p>
<button>Try Again</button>

<p>Great job! This is the last piece of the puzzle.</p>
<button>Continue</button>

<h2>What's happening?</h2>
<p>Given what you just saw in the last exercise and what you've learned in this lesson, why do you think the data disappears?</p>
<textarea placeholder="Enter your response here, there's no right or wrong answer"></textarea>
<button>Submit</button>

<youtube id="CXXWsolZ1EM"></youtube>

<h3>Question 3 of 3</h3>
<p>What happens to an activity if you override onSaveInstanceState and save some of your data, but don't call the super method?</p>
<p>-The app would crash when a configuration change happens.</p>
<p>+When the activity restarts after a configuration change, it could be missing some data, such as the edit text data.</p>
<p>-If the activity restarts after a process kill, it will not be able to finish rendering, and will call finish() on the screen.</p>
<p>-You'll get a TransactionTooLargeException whenever the app restarts.</p>
<button>Submit</button>

<p>Think about what calling super.onSaveInstanceState(outState) does. If you don't override onSaveInstanceState is any data saved for you, such as the backstack? Or do you need to save it all yourself?</p>
<button>Try Again</button>

<p>That's right! onSaveInstanceState automatically saves some data for you, such as EditTexts (as long as they have an id). But if you remove the call to the super method, the superclass won't be able to automatically do this for you. Always remember to call <code>super.onSaveInstanceState(outState)</code> when overriding onSaveInstanceState!</p>
<button>Continue</button>
