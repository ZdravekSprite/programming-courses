---
path: "/lesson05/09-what-belongs-in-the-gameviewmodel-"
title: "What Belongs in the GameViewModel?"
---

<youtube id="pt2hpG6xKY0"></youtube>

<h3>Quiz Question</h3>
<p>What should be moved to the ViewModel? Keep in mind:</p>
<ul>
<li>The ViewModel is a stable place to store the data to display in the associated UI controller.</li>
<li>The Fragment draws the data on screen and captures input events.  It should not decide what to display on screen or process what happens during an input event.</li>
<li>The ViewModel never contains references to activities, fragments, or views.</li>
</ul>

<ul>
<li>+The score and word field.</li>
<li>+The wordList field.</li>
<li>-The binding field.</li>
<li>+The resetList and nextWord methods.</li>
<li>-The updateWordText and updateScoreText methods.</li>
</ul>
<button>Submit</button>

<p>Keep in mind that the binding field has references to views.</p>
<button>Try Again</button>

<p>Well done!</p>
<button>Continue</button>
