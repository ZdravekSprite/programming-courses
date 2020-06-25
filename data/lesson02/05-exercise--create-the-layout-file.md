---
path: "/lesson02/05-exercise--create-the-layout-file"
title: "Exercise: Create the Layout File"
---
<youtube id="qbAliaX6nQc"></youtube>

<h3 id="android-developer-documentation-">Android Developer Documentation:</h3>
<ul>
<li><a target="_blank" href="http://developer.android.com/tools/studio/index.html">Android Studio documentation</a></li>
</ul>

<p>Now it’s your turn to complete this code.</p>
<p>Every Activity that is visible on the screen needs a layout, defined in a layout file. Because you did not create the MainActivity with a layout from a template during project creation, you are next going to need to add a layout file.</p>
<p>Like other resources, <strong>layout</strong> files are stored in the <strong>res</strong> resources folder.</p>
<ol>
<li>In the Project &gt; Android window, open the <strong>res folder</strong>, so you can see what is happening.</li>
<li>Right-click <strong>res</strong>.</li>
<li>In the pop-up menu, select  <strong>New &gt; Android resource file</strong>.</li>
</ol>
<p>In the <strong>New Resource File</strong> window: </p>
<ol start="4">
<li>Name the file <strong>activity_main.xml.</strong></li>
<li>For the Resource type, choose <strong>Layout.</strong></li>
<li>If it is not already selected, for the <strong>Root element</strong>, choose <strong>LinearLayout.</strong> </li>
<li>Verify that the <strong>source set</strong> is <strong>main.</strong></li>
<li>Verify that the directory name is <strong>layout.</strong></li>
<li>If everything looks correct, click <strong>OK.</strong></li>
</ol>
<p>This creates the activity_main.xml file in the <strong>res/layouts</strong> folder.</p>
<p>Notice that if the <strong>layout</strong> directory, didn’t already exist, Android Studio created it for you.</p>
<p>If you want to start at this step, you can download this exercise code from: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-about-me/archive/Step.01-Exercise-Create-layout-file.zip">Step.01-Exercise-Create-layout-file</a>.</p>
<p>You will find plenty of <code>//TODO</code> comments to help you complete this exercise, and if you get stuck, go back and watch the video again.</p>
<p>Once you’re done, you can check your solution against the solution we’ve provided here: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-about-me/tree/Step.01-Exercise-Create-layout-file">Step.01-Solution-Create-layout-file</a>, or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-about-me/compare/Step.01-Exercise-Create-layout-file...Step.01-Solution-Create-layout-file">git diff</a>.</p>

<text-box variant='learningObjectives' name='It’s your turn to create a layout file for the AboutMe app. Check the steps below as you implement them to complete this exercise.'>
</text-box>

- In the project file listing, right-click res folder and New &gt; Android resource file.

- Familiarize yourself with the New Resource File pane to make the following changes.

- Name: activity_main.xml

- Resource type: Layout

- Root element: LinearLayout

- Source set: main

- Directory name: layout

- Click OK and verify activity_main.xml has been created in res/layouts folder.

</text-box>

<p>Great!! You have created a layout file and next we'll add some views.</p>
<p>Solution: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-about-me/tree/Step.01-Solution-Create-layout-file">Step.01-Solution-Create-layout-file</a> or <a target="_blank" href="https://github.com/udacity/andfun-kotlin-about-me/compare/Step.01-Exercise-Create-layout-file...Step.01-Solution-Create-layout-file">diff</a></p>
