---
path: "/lesson04/09-activity-lifecycle-states-and-callbacks-summary"
title: "Activity Lifecycle States and Callbacks Summary"
---

<youtube id="efYCAKJBq5k"></youtube>

<h1 id="summary-of-lifecycle-state-and-activity-lifecycle">Summary of Lifecycle State and Activity Lifecycle</h1>
<p>You've learned a lot of new terms and received advice on how to use Activity Lifecycle states. This is summarized below:</p>

<img src="l4-1803sc-a-share-dialog-and-onpause-onresume-border.png" alt="" width="1920px">

<h1 id="general-definitions">General Definitions</h1>
<p><strong>Visible Lifecycle:</strong> The part of the Lifecycle between onStart and onStop when the Activity is visible.</p>
<p><strong>Focus:</strong> An Activity is said to have focus when it's the activity the user can interact with.</p>
<p><strong>Foreground:</strong> When the activity is on screen.</p>
<p><strong>Background:</strong> When the activity is fully off screen, it is considered in the background.</p>
<h1 id="lifecycle-states">Lifecycle States</h1>
<p>These are the same for both the Fragment Lifecycle and the Activity Lifecycle.</p>
<p><strong>Initialized:</strong> This is the starting state whenever you make a new activity. This is a transient state -- it immediately goes to Created.</p>
<p><strong>Created:</strong> Activity has just been created, but it’s not visible and it doesn’t have focus (you’re not able to interact with it).</p>
<p><strong>Started:</strong> Activity is visible but doesn’t have focus.</p>
<p><strong>Resumed:</strong> The state of the activity when it is running. It’s visible and has focus.</p>
<p><strong>Destroyed:</strong> Activity is destroyed. It can be ejected from memory at any point and should not be referenced or interacted with.</p>
<h1 id="activity-lifecycle-callbacks">Activity Lifecycle Callbacks</h1>
<p><strong>onCreate:</strong> This is called the first time the activity starts and is therefore only called once during the lifecycle of the activity. It represents when the activity is created and initialized. The activity is not yet visible and you can't interact with it. You must implement onCreate. In onCreate you should:</p>
<ul>
<li>Inflate the activity's UI, whether that's using findViewById or databinding.</li>
<li>Initialize variables.</li>
<li>Do any other initialization that only happens once during the activity lifetime.</li>
</ul>
<p><strong>onStart:</strong> This is triggered when the activity is about to become visible. It can be called multiple times as the user navigates away from the activity and then back. Examples of the user "navigating away" are when they go to the home screen, or to a new activity in the app. At this point, the activity is not interactive. In onStart you should:</p>
<ul>
<li>Start any sensors, animations or other procedures that need to start when the activity is visible.</li>
</ul>
<p><strong>onResume:</strong> This is triggered when the activity has focus and the user can interact with it.
Here you should:</p>
<ul>
<li>Start any sensors, animations or other procedures that need to start when the activity has focus (the activity the user is currently interacting with).</li>
</ul>
<p><strong>onPause:</strong> The mirror method to onResume. This method is called as soon as the activity loses focus and the user can't interact with it. An activity can lose focus without fully disappearing from the screen (for example, when a dialog appears that partially obscures the activity). Here you should:</p>
<ul>
<li>Stop any sensors, animations or other procedures that should not run when the activity doesn't have focus and is partially obscured.</li>
<li>Keep execution fast. The next activity is not shown until this completes.</li>
</ul>
<p><strong>onStop:</strong> This is the mirror method to onStart. It is called when you can no longer see the activity. Here you should:</p>
<ul>
<li>Stop any sensor, animations or other procedures that should not run when the activity is not on screen.</li>
<li>You can use this to persist (permanently save) data, which you’ll be learning more about in Lesson 6</li>
<li>Stop logic that updates the UI. This should not be running when the activity is off-screen; it's a waste of resources.</li>
<li>There are also restrictions as soon as the app goes into the background, which is when all activities in your app are in the background. We'll talk more about this in Lesson 9.</li>
</ul>
<p><strong>onDestroy:</strong> This is the mirror method to onCreate. It is called once when the activity is fully destroyed. This happens when you navigate back out of the activity (as in press the back button), or manually call finish(). It is your last chance to clean up resources associated with the activity. Here you should:</p>
<ul>
<li>Tear down or release any resources that are related to the activity and are not automatically released for you. Forgetting to do this could cause a memory leak! Logic that refers to the activity or attempts to update the UI after the activity has been destroyed could crash the app!</li>
</ul>

<h1 id="summary-of-the-fragment-lifecycle">Summary of the Fragment Lifecycle</h1>
<p>Fragments also have lifecycle states that they go between. The lifecycle states are the same as the activity states. You’ll notice that in your Android Trivia app, you’re using the onCreateView callback - while the fragment lifecycle states are the same, <strong>the callbacks are different</strong>.</p>
<p>A deep dive into the fragment lifecycle could be a lesson in itself. Here, we’ll just cover the basics with the summary below:</p>
<h2 id="important-fragment-callbacks-to-implement">Important Fragment Callbacks to Implement</h2>
<p><strong>onCreate:</strong> Similar to the Activity’s onCreate callback. This is when the fragment is created. This will only get called once. Here you should:</p>
<ul>
<li>Initialize anything essential for you fragment.</li>
<li><strong>DO NOT inflate XML</strong>, do that in onCreateView, when the system is first drawing the fragment
NOT reference the activity, it is still being created. Do this in onActivityCreated.</li>
</ul>
<p><strong>onCreateView:</strong> This is called between onCreate and onActivityCreated. when the system will draw the fragment for the first time when the fragment becomes visible again. You must return a view in this callback if your fragment has a UI.  Here you should:</p>
<ul>
<li>Create your views by inflating your XML.</li>
</ul>
<p><strong>onStop:</strong> Very similar to Activity’s onStop. This callback is called when the user leaves your fragment. Here you should:</p>
<ul>
<li>Save any permanent fragment state (this will be discussed in lesson 6)</li>
</ul>
<h2 id="other-callbacks">Other callbacks</h2>
<p><strong>onAttach:</strong> When the fragment is first attached to the activity. This is only called once during the lifecycle of the fragment.</p>
<p><strong>onActivityCreated:</strong> Called when the activity onCreate method has returned and the activity has been initialized. If the fragment is added to an activity that's already created, this still gets called. It's purpose is to contain any code the requires the activity exists and it is called multiple times during the lifecycle of the fragment. Here you should:</p>
<ul>
<li>Execute any code that requires an activity instance</li>
</ul>
<p><strong>onStart:</strong> Called right before the fragment is visible to the user.</p>
<p><strong>onResume:</strong> When the activity resumes the fragment. This means the fragment is visible, has focus and is running.</p>
<p><strong>onStop:</strong> Called when the Activity’s onStop is called. The fragment no longer has focus.</p>
<p><strong>onDestroyView:</strong> Unlike activities, <strong>fragment views are destroyed every time they go off screen</strong>. This is called after the view is no longer visible.</p>
<ul>
<li>Do not refer to views in this callback, since they are destroyed</li>
</ul>
<p><strong>onDestroy:</strong> Called when the Activity’s onDestroy is called.</p>
<p><strong>onDetach:</strong> Called when the association between the fragment and the activity is destroyed.</p>
<h1 id="lifecycle-cheat-sheets">Lifecycle Cheat sheets</h1>
<p>What you’ve seen up to this point are the Activity Lifecycle and the Fragment Lifecycle for a single Activity or Fragment. For more complicated apps, it becomes important to understand the interactions between Activity and Fragment life cycles and multiple activities. This is outside of the scope of this lesson, but there are a series of excellent blog posts and cheat sheets posted by Googler which are helpful references for this:</p>
<ul>
<li><a target="_blank" href="https://medium.com/androiddevelopers/the-android-lifecycle-cheat-sheet-part-i-single-activities-e49fd3d202ab"><strong>The Android Lifecycle cheat sheet — part I: Single Activity</strong></a> - This is a visual recap of much of the material here.</li>
<li><a target="_blank" href="https://medium.com/androiddevelopers/the-android-lifecycle-cheat-sheet-part-ii-multiple-activities-a411fd139f24"><strong>The Android Lifecycle cheat sheet — part II: Multiple Activities</strong></a>  - This shows the order of lifecycle calls when two activities interact.</li>
<li><a target="_blank" href="https://medium.com/androiddevelopers/the-android-lifecycle-cheat-sheet-part-iii-fragments-afc87d4f37fd"><strong>The Android Lifecycle cheat sheet — part III: Fragments</strong></a> - This show the order of lifecycle calls when an activity and fragment interact.</li>
</ul>
