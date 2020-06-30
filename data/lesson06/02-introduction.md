---
path: "/lesson06/02-introduction"
title: "Introduction"
---

<youtube id="dEGMEYPN_nc"></youtube>

<p><strong>Download the starter code</strong></p>
<ol>
<li><p>To get started, download the <strong>Track My Sleep Quality Starter App</strong> from <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker/archive/starter-code.zip">GitHub</a>.</p>
</li>
<li><p>Familiarize yourself with the app: Everything provided has been covered in previous lessons. In particular, take a look at the parts of the app that are listed below.</p>
</li>
<li><p>Build and run the app. The app will show the UI for the <code>SleepTrackerFragment</code>, but no data, and the buttons do not respond to clicks. </p>
</li>
</ol>
<p><strong>Project gradle file</strong></p>
<ol>
<li><p>In the project gradle file, notice the variables that specify the versions of the libraries we will be using. The versions used here work well together and with this app. </p>
<p>By the time you take this course, you may be prompted to update gradle or library version.  It’s going to be up to you whether you want to do that, or stay with what’s in the app. If you run into "strange" compilation errors, revert to using the same combination of libraries as the solution app. </p>
</li>
</ol>
<p><strong>Module gradle file</strong></p>
<ol>
<li>Notice the provided dependencies for all the <strong>Android Jetpack</strong> libraries, including <strong>Room</strong>, and the dependencies for coroutines. </li>
</ol>
<p><strong>Packages and UI</strong></p>
<ol>
<li><p>The app is structured by functionality. There is one package for all database code. In the starter app, it contains a placeholder file for defining sleep data. </p>
</li>
<li><p>The <code>sleepquality</code> and <code>sleeptracker</code> packages contain the provided fragments, and you will add most of your code in those two packages.</p>
</li>
</ol>
<p><strong>Util.kt file</strong></p>
<ol>
<li>The <code>Util.kt</code> file contains functions to help display sleep quality data.  Some code is commented out because it references a <code>ViewModel</code>, which you will create later. </li>
</ol>
<p><strong>androidTest folder/SleepDatabaseTest.kt</strong></p>
<ol>
<li>You will be using this provided test to verify that the database is working as intended. </li>
</ol>
<p>You can download this starter code from <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker/archive/starter-code.zip">GitHub</a>.</p>


<text-box variant='learningObjectives' name='Familiarize yourself with the code and assets you will be working with in this lesson.'>

- Download Track My Sleep Quality starter code and open it in Android Studio.
- Inspect all the provided files.
- Run the starter code successfully.

</text-box>

<p>Now you are ready to go!</p>
<button>Continue</button>

<p>Reference documentation</p>
<ul>
<li><a target="_blank" href="https://en.wikipedia.org/wiki/Database">History of Databases</a></li>
</ul>
