---
path: "/lesson05/03-exercise--tour-of-the-app"
title: "Exercise: Tour of the App"
---

<youtube id="OvJzqaqC7h0"></youtube>

<h3 id="download-the-code-for-this-lesson">Download the Code for this Lesson</h3>
<p>You have two options for the code in this lesson:</p>
<ul>
<li>You can download a zip file of the starter code <a target="_blank" href="andfun-kotlin-guess-it-starter-code.zip">here</a></li>
<li>If you’re familiar with git, you can clone the entire repository. This includes <code>//TODO</code> instructions and solution states for every step. To work with the git repository, refer to the <a target="_blank" href="https://github.com/udacity/andfun-kotlin-guess-it/tree/starter-code#how-to-use-this-repo-while-taking-the-course">code README</a>.</li>
</ul>
<h3 id="starter-code-walkthrough">Starter code Walkthrough</h3>
<ul>
<li><a target="_blank" href="https://github.com/udacity/andfun-kotlin-guess-it/blob/starter-code/app/src/main/java/com/example/android/guesstheword/MainActivity.kt"><code>MainActivity</code></a> - This class does very little. It’s just a container for the <a target="_blank" href="https://developer.android.com/reference/kotlin/androidx/navigation/fragment/NavHostFragment">NavHostFragment</a>. The fragments that go in the NavHostFragment do most of the heavy lifting. This is similar to what we did in <a target="_blank" href="https://classroom.udacity.com/courses/ud9012/lessons/7466f670-3d47-4b60-8f6a-0914ce58f9ad/concepts/cda040dc-4139-4027-b8ee-d8119d451291">lesson 3</a></li>
<li><a target="_blank" href="https://github.com/udacity/andfun-kotlin-guess-it/blob/starter-code/app/src/main/res/navigation/main_navigation.xml"><code>res/navigation/main_navigation.xml</code></a> - This is the navigation graph for this app. The navigation flow goes from the TitleFragment to the GameFragment to the ScoreFragment. From the ScoreFragment, you can play the game again by going back to the GameFragment. Note that the action from the GameFragment to the ScoreFragment has a Pop To attribute that removes the game from the backstack. This makes it so that you can never press the back button from the ScoreFragment to go back to a finished game. Instead you’ll go to the title screen.</li>
<li><a target="_blank" href="https://github.com/udacity/andfun-kotlin-guess-it/blob/starter-code/app/src/main/java/com/example/android/guesstheword/screens/title/TitleFragment.kt"><code>TitleFragment</code></a> - This is a simple fragment showing the title screen. Has a single button that takes you to the GameFragment.</li>
<li><a target="_blank" href="https://github.com/udacity/andfun-kotlin-guess-it/blob/starter-code/app/src/main/java/com/example/android/guesstheword/screens/game/GameFragment.kt"><code>GameFragment</code></a> - This fragment contains all the logic for the GuessIt game itself. It contains:<ul>
<li><code>word</code> - A variable for the current word to guess.</li>
<li><code>score</code> - A variable for the current score.</li>
<li><code>wordList</code> - A variable for a mutable list of all the words you need to guess. This list is created and immediately shuffled using <code>resetList()</code> so that you get a new order of words every time.</li>
<li><code>resetList()</code> - Method that creates and shuffles the list of words. </li>
<li><code>onSkip()</code>/<code>onCorrect()</code> - Methods for when you press the <strong>Skip</strong>/<strong>Got It</strong> buttons.  They modify the score and then go to the next word in your <code>worldList</code>.</li>
<li><code>nextWord()</code> - A method for moving to the next word to guess. If there are still words in your mutable list of words, remove the current word, and then set <code>currentWord</code> to whatever is next in the list. This will finish the game if there are no more words to guess.</li>
<li><code>gameFinished()</code> - A method that is called to finish the game. This passes your current score to the ScoreFragment using SafeArgs.</li>
</ul>
</li>
<li><a target="_blank" href="https://github.com/udacity/andfun-kotlin-guess-it/blob/starter-code/app/src/main/java/com/example/android/guesstheword/screens/score/ScoreFragment.kt"><code>ScoreFragment</code></a> - This fragment gets the score passed in from the argument bundle and displays it. There’s also a button for playing again, that takes you back to the GameFragment.</li>
</ul>
