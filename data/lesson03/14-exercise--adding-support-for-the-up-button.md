---
path: "/lesson03/14-exercise--adding-support-for-the-up-button"
title: "Exercise: Adding Support for the Up Button"
---

<youtube id="IXsPbkeMpYE"></youtube>

<p>To add support for the up button, we first need to make sure our Activity has an ActionBar.  We’ve already done this piece of the work for you, but to review:</p>
<p><strong>1. Link the NavController to the ActionBar with NavigationUI.setupWithNavController.</strong></p>
<p>Let's move to MainActivity. We need to find the NavController. Since we’re in the Activity now, we’ll use the alternate method of finding the controller from the ID of our NavHostFragment using the KTX extension function.</p>

```ts
val navController = this.findNavController(R.id.myNavHostFragment)
```

<p>Link the NavController to our ActionBar.</p>


```ts
NavigationUI.setupActionBarWithNavController(this, navController)
```

<p><strong> 2. Override the onSupportNavigateUp method from the activity and call navigateUp in nav controller.</strong></p>
<p>Finally, we need to have the Activity handle the navigateUp action from our Activity. To do this we override onSupportNavigateUp,  find the nav controller, and then we call navigateUp().  </p>

```ts
override fun onSupportNavigateUp(): Boolean {
   val navController = this.findNavController(R.id.myNavHostFragment)
   return navController.navigateUp()
}
```

<p>If you want to start at this step, you can download this exercise code from: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-android-trivia/archive/Step.05-Exercise-Adding-Support-for-the-Up-Button.zip">Step.05-Exercise-Adding-Support-for-the-Up-Button</a>.</p>
<p>You will find plenty of <code>//TODO</code> comments to help you complete this exercise, and if you get stuck, go back and watch the video again.</p>
<p>Once you’re done, you can check your solution against the solution we’ve provided here <a target="_blank" href="https://github.com/udacity/andfun-kotlin-android-trivia/tree/Step.05-Solution-Adding-Support-for-the-Up-Button">Step.05-Solution-Adding-Support-for-the-Up-Button</a> or <a target="_blank" href="https://github.com/udacity/andfun-kotlin-android-trivia/compare/Step.05-Exercise-Adding-Support-for-the-Up-Button...Step.05-Solution-Adding-Support-for-the-Up-Button">git diff</a>.</p>

<text-box variant='learningObjectives' name='Check the steps below as you implement them to complete this exercise.'>

- Link the NavController to the ActionBar with NavigationUI.setupWithNavController.

- Add Override to the onSupportNavigateUp method from the activity and called navigateUp in nav controller.

</text-box>

<p>And you can navigate up!</p>
<p>Solution: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-android-trivia/tree/Step.05-Solution-Adding-Support-for-the-Up-Button">Step.05-Solution-Adding-Support-for-the-Up-Button</a> or <a target="_blank" href="https://github.com/udacity/andfun-kotlin-android-trivia/compare/Step.05-Exercise-Adding-Support-for-the-Up-Button...Step.05-Solution-Adding-Support-for-the-Up-Button">git diff</a></p>
<button>Continue</button>
