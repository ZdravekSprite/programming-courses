---
path: "/lesson03/09-exercise--let-s-navigate-already"
title: "Exercise: Let's Navigate Already"
---

<youtube id="Gh8Av2FGsyU"></youtube>

<p>We’re ready to navigate! You’ll create a navigation graph for the trivia app, add the Title Screen and the Game Screen, connect them with an action, and navigate to the game screen when the play button is pressed.</p>
<p>(<strong>Note:</strong> The Navigation Editor and Component feature require at least Android Studio 3.3.) </p>
<h3 id="1-adding-the-navigation-components-to-the-project">1. Adding the Navigation Components to the Project</h3>
<p>We've already added the ext variable for you within the <strong>Project</strong> build.gradle file that shows the version of the navigation component we will use.  We have tested against the version shown, but you can see which version is the latest on <a target="_blank" href="https://developer.android.com/topic/libraries/architecture/adding-components">this page on developer.android.com</a>:</p>

```ts
buildscript {
    ext {
        ...
        version_navigation = '1.0.0'
        ...
    }
```

<p>Within the <strong>App</strong> build.gradle file, add the dependencies for navigation fragment ktx and navigation UI ktx.</p>

```ts
dependencies {
    ...
    implementation "android.arch.navigation:navigation-fragment-ktx:$version_navigation"
    implementation "android.arch.navigation:navigation-ui-ktx:$version_navigation"
}
```

<h3 id="2-adding-the-navigation-graph-to-the-project">2. Adding the Navigation Graph to the Project</h3>
<p>In the Project window, right-click on the res directory and select New &gt; Android resource file. The New Resource dialog appears.</p>
<p>Select Navigation as the resource type, and give it the file name of navigation.  Make sure it has no qualifiers.  Select the navigation.xml file in the new navigation directory under res, and make sure the design tab is selected.</p>
<h3 id="3-replace-the-title-fragment-with-the-navigation-host-fragment-in-the-activity-layout">3. Replace the Title Fragment with the Navigation Host Fragment in the Activity Layout</h3>
<p>Go to the activity_main layout. Change the class name of the existing Title fragment to androidx.navigation.fragment.NavHostFragment.  Change the ID to myNavHostFragment.  It needs to know which navigation graph resource to use, so add the app:navGraph attribute and have it point to the navigation graph resource - @navigation/navigation.  Finally, set defaultNavHost = true, which means that this navigation host will intercept the system back key.</p>

```xml
<!-- The NavHostFragment within the activity_main layout -->
<fragment
   android:id="@+id/myNavHostFragment"
   android:name="androidx.navigation.fragment.NavHostFragment"
   android:layout_width="match_parent"
   android:layout_height="match_parent"
   app:navGraph="@navigation/navigation"
   app:defaultNavHost="true"
   />
```

<h3 id="4-adding-the-title-and-game-fragments-to-the-navigation-graph">4. Adding the Title and Game Fragments to the Navigation Graph</h3>
<p>Within the navigation editor, click the add button.  A list of fragments and activities will drop down.  Add fragment_title first, as it is the start destination.  (you’ll see that it will automatically be set as the Start Destination for the graph.) Next, add the fragment_game.</p>

```xml
<!-- The complete game fragment within the navigation XML, complete with tools:layout. -->
<fragment
   android:id="@+id/gameFragment"
   android:name="com.example.android.navigation.GameFragment"
   android:label="GameFragment"
   tools:layout="@layout/fragment_game" />
```

<h3 id="5-connecting-the-title-and-game-fragments-with-an-action">5. Connecting the Title and Game Fragments with an Action</h3>
<p>Begin by hovering over the titleFragment. You’ll see a circular connection point on the right side of the fragment view. Click on the connection point and drag it to gameFragment to add an Action that connects the two fragments.</p>
<h3 id="6-navigating-when-the-play-button-is-hit">6. Navigating when the Play Button is Hit</h3>
<p>Return to onCreateView in the TitleFragment Kotlin code. The binding class has been exposed, so you just call binding.playButton.setOnClickListener with a new anonymous function, otherwise known as a lambda. Inside our lambda, use view.findNavcontroller to get the navigation controller for our Navigation Host Fragment. Then, use the navController to navigate using the titleFragment to gameFragment action, by calling navigate(R.id.action_titleFragment_to_gameFragment)</p>

```ts
//The complete onClickListener with Navigation
binding.playButton.setOnClickListener { view: View ->
        view.findNavController().navigate(R.id.action_titleFragment_to_gameFragment)
}
```

<p>One more thing you might want to do.  Navigation can create the onClick listener for us.  We can replace the anonymous function with the Navigation.createNavigateOnClickListener call.</p>

```ts
//The complete onClickListener with Navigation using createNavigateOnClickListener
binding.playButton.setOnClickListener(
        Navigation.createNavigateOnClickListener(R.id.action_titleFragment_to_gameFragment))

```

<p>You’re done!  That was a lot of steps, but you’ve built a graph, connected it to the UI, and made navigation happen.</p>
<p>If you want to start at this step, you can download this exercise code from: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-android-trivia/archive/Step.02-Exercise-Lets-Navigate-Already.zip">Step.02-Exercise-Lets-Navigate-Already</a>.</p>
<p>You will find plenty of <code>//TODO</code> comments to help you complete this exercise, and if you get stuck, go back and watch the video again.</p>
<p>Once you’re done, you can check your solution against the solution we’ve provided here <a target="_blank" href="https://github.com/udacity/andfun-kotlin-android-trivia/tree/Step.02-Solution-Lets-Navigate-Already">Step.02-Solution-Lets-Navigate-Already</a> or <a target="_blank" href="https://github.com/udacity/andfun-kotlin-android-trivia/compare/Step.02-Exercise-Lets-Navigate-Already...Step.02-Solution-Lets-Navigate-Already">diff</a></p>

<text-box variant='learningObjectives' name='Check the steps below as you implement them to complete this exercise.'>

- Add the Navigation Components to the build.

- Add the Navigation graph resource to the build.

- Replace the title fragment with the Navigation Host Fragment in the Activity Layout.

- Add the title, game, and gameOver fragments to the navigation graph.

- Connect the titleFragment to the gameFragment with an action.

- Add an onClick handler lambda to the playButton in TitleFragment.

- In the onClick handler, find the navController.

- Use the navController to navigate with TitleFragmentDirections using R.id.action_titleFragment_to_gameFragment.

- Use Navigation.createNavigateOnClickListener to replace the anonymous onClick function.

</text-box>

<p>You’re done!  You’ve built a graph, connected it to the UI, and made navigation happen.</p>
<p>Solution: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-android-trivia/tree/Step.02-Solution-Lets-Navigate-Already">Step.02-Solution-Lets-Navigate-Already</a> or <a target="_blank" href="https://github.com/udacity/andfun-kotlin-android-trivia/compare/Step.02-Exercise-Lets-Navigate-Already...Step.02-Solution-Lets-Navigate-Already">diff</a></p>
<button>Continue</button>
