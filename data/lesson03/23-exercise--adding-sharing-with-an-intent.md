---
path: "/lesson03/23-exercise--adding-sharing-with-an-intent"
title: "Exercise: Adding Sharing with an Intent"
---

<youtube id="SgtRdbCp6E0"></youtube>

<p><strong>1. Add setHasOptionsMenu(true) to onCreateView() in our GameWonFragment</strong></p>
<p>We’ll start by adding setHasOptionsMenu(true) to onCreateView() in our GameWonFragment.</p>

```ts
// Declaring that our Fragment has a Menu
binding.nextMatchButton.setOnClickListener { view: View ->
 view.findNavController().navigate(GameWonFragmentDirections.actionGameWonFragmentToGameFragment())
}
setHasOptionsMenu(true)
```

<p><strong>2. Create a getShareIntent method.  Get the args and build the shareIntent inside.</strong></p>
<p>We’ll create a getShareIntent method and move our GameWonFragmentArgs.fromBundle there. We’ll use shareCompat to create our share Implicit intent. We can call ShareCompat.IntentBuilder.from(activity), set our text, and then set the MIME type, finishing off by building our intent.</p>

```ts
// Creating our Share Intent
private fun getShareIntent() : Intent {
   val args = GameWonFragmentArgs.fromBundle(arguments)
   val shareIntent = Intent(Intent.ACTION_SEND)
        shareIntent.setType("text/plain")
            .putExtra(Intent.EXTRA_TEXT, getString(R.string.share_success_text, args.numCorrect, args.numQuestions))
   return shareIntent
}
```

<p><strong>3. Create a shareSuccess method that starts the activity from the share Intent</strong></p>
<p>Next, we’ll create our shareSuccess method, which gets the Intent from getShareIntent and calls startActivity to begin sharing.</p>

```ts
// Starting an Activity with our new Intent
private fun shareSuccess() {
   startActivity(getShareIntent())
}
```

<p><strong>4. Override onCreateOptionsMenu and inflate our winner_menu.</strong></p>
<p>Override onCreateOptionsMenu and begin by inflating the winner_menu.  Then we’ll get the shareIntent using getShareIntent() and call resolveActivity using the packageManger to make sure our shareIntent resolves to an activity. </p>
<p><strong>5. Hide the sharing menu item if the sharing intent doesn’t resolve to an Activity</strong></p>
<p>If the result equals null, which means that it doesn’t resolve, we find our sharing menu item from the inflated menu and set its visibility to false.</p>

```ts
// Showing the Share Menu Item Dynamically
override fun onCreateOptionsMenu(menu: Menu?, inflater: MenuInflater?) {
   super.onCreateOptionsMenu(menu, inflater)
   inflater?.inflate(R.menu.winner_menu, menu)
   // check if the activity resolves
   if (null == getShareIntent().resolveActivity(activity!!.packageManager)) {
       // hide the menu item if it doesn't resolve
       menu?.findItem(R.id.share)?.setVisible(false)
   }
}
```

<p><strong>6. Override onOptionsIemSelected to link the menu to the shareSuccess action</strong></p>
<p>Override onOptionsItemSelected. When the menuitem id matches R.id.share, call the shareSuccess method.</p>

```ts
// Sharing from the Menu
override fun onOptionsItemSelected(item: MenuItem?): Boolean {
   when (item!!.itemId) {
       R.id.share -> shareSuccess()
   }
   return super.onOptionsItemSelected(item)
}
```

<p>And we’re done!  If there is an available destination for our shareIntent, the icon will appear and we can share.  Otherwise, it will not be available.</p>
<p>If you want to start at this step, you can download this exercise code from: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-android-trivia/archive/Step.08-Exercise-Sharing-Success.zip">Step.08-Exercise-Sharing-Success</a>.</p>
<p>You will find plenty of <code>//TODO</code> comments to help you complete this exercise, and if you get stuck, go back and watch the video again.</p>
<p>Once you’re done, you can check your solution against the solution we’ve provided here <a target="_blank" href="https://github.com/udacity/andfun-kotlin-android-trivia/tree/Step.08-Solution-Sharing-Success">Step.08-Solution-Sharing-Success</a> or <a target="_blank" href="https://github.com/udacity/andfun-kotlin-android-trivia/compare/Step.08-Exercise-Sharing-Success...Step.08-Solution-Sharing-Success">diff</a>.</p>

<text-box variant='learningObjectives' name='Check the steps below as you implement them to complete this exercise.'>
</text-box>

- Add setHasOptionsMenu(true) to onCreateView() in our GameWonFragment.

- Create a getShareIntent method.  Get the args and build the shareIntent inside.

- Create a shareSuccess method that starts the activity from the share Intent.

- Add Override to onCreateOptionsMenu and inflate our winner_menu.

- Hide the sharing menu item if the sharing intent doesn’t resolve to an Activity.

- Add Override to onOptionsIemSelected to link the menu to the shareSuccess action.

</text-box>

<p>And now we really sharing --- with Intent. </p>
<p>Solution: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-android-trivia/tree/Step.08-Solution-Sharing-Success">Step.08-Solution-Sharing-Success</a> or <a target="_blank" href="https://github.com/udacity/andfun-kotlin-android-trivia/compare/Step.08-Exercise-Sharing-Success...Step.08-Solution-Sharing-Success">git diff</a></p>
<button>Continue</button>
