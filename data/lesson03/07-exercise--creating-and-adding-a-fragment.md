---
path: "/lesson03/07-exercise--creating-and-adding-a-fragment"
title: "Exercise: Creating and Adding a Fragment"
---

<youtube id="x9Z0TNdAJ60"></youtube>

<p>Now it’s your turn to complete this exercise yourself.</p>
<p><strong>1. Download the starter code if you haven't already.</strong><br>
 Instructions are in the <a target="_blank" href="https://classroom.udacity.com/courses/ud9012/lessons/7466f670-3d47-4b60-8f6a-0914ce58f9ad/concepts/9bfc90da-6173-4825-ab64-3d94b92df26c">previous exercise</a>.</p>
<p><strong>2. Create a fragment file.</strong><br>
Make sure a file is selected in the project first.<br>
 Select File-&gt;New-&gt;Fragment-&gt;Fragment (Blank).<br></p>
<ul>
<li>For fragment name, use <code>TitleFragment</code></li>
<li>uncheck create Layout XML</li>
<li>uncheck include fragment factory methods,</li>
<li>uncheck include interface callbacks</li>
</ul>
<p>Then select Finish.</p>
<p><strong>3. Cleanup the new TitleFragment class.</strong><br>
Open up the new TitleFragment, begin by deleting the four lines under the import statements, from the <code>// TODO</code>. Rename parameter arguments, choose names that match, down to the ARG_PARAM2 declaration.   Then remove the <code>return TextView(activity).apply</code> section along with the SetText.  The fragment won’t compile now because we have just removed the code that was returning the Fragment View or ViewGroup.</p>
<p><strong>4. Inflate and return the fragment layout.</strong><br>
In our Activity, we used <code>DataBindingUtil.setContentView</code> to get the binding class from a layout, but since we’re in a fragment we need to call <code>DataBindingUtil.inflate</code> in onCreateView with the provided layout inflater, the layout resource ID, the provided viewgroup it will be hosted by, and false to not attach it to the viewgroup. Return binding.root. The code should look like:</p>

```ts
//Inflating and Returning the View with DataBindingUtil
override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?,
                         savedInstanceState: Bundle?): View? {
   val binding = DataBindingUtil.inflate<FragmentTitleBinding>(inflater, R.layout.fragment_title, container, false)
   return binding.root
}
```

<p><strong>5. Add the fragment to the activity layout.</strong>
<br>Open the activity_main.xml layout. Go to the LinearLayout and create a fragment tag inside of it.  You need to give a fragment created in this way an id and set android:name to the full path of our fragment class.  Then set the layout width and height to match_parent, and you’re done.</p>
<p><strong>6. Run your app.</strong>
<br>Launch the app and revel in the glory of your first fragment!</p>
<p>If you want to start at this step, you can download this exercise code from: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-android-trivia/archive/Step.01-Exercise-Creating-and-Adding-a-Fragment.zip">Step.01-Exercise-Creating-and-Adding-a-Fragment</a>.</p>
<p>You will find plenty of <code>//TODO</code> comments to help you complete this exercise, and if you get stuck, go back and watch the video again.</p>
<p>Once you’re done, you can check your solution against the solution we’ve provided here <a target="_blank" href="https://github.com/udacity/andfun-kotlin-android-trivia/tree/Step.01-Solution-Creating-and-Adding-a-Fragment">Step.01-Solution-Creating-and-Adding-a-Fragment</a> or <a target="_blank" href="https://github.com/udacity/andfun-kotlin-android-trivia/compare/Step.01-Exercise-Creating-and-Adding-a-Fragment...Step.01-Solution-Creating-and-Adding-a-Fragment">git diff</a>.</p>

<text-box variant='learningObjectives' name='Learn about Fragments by implementing the title screen of our trivia app.  Check the steps below as you implement them to complete this exercise.'>

- Get the navigation starter code from GitHub.

- Use Android Studio to create a new TitleFragment.

- In the TitleFragment onCreateView, inflate and return the fragment_title layout.

- Add a fragment tag referencing our TitleFragment in the activity_main.xml layout.

</text-box>

<p>That’s it!  It’s time to navigate!</p>
<p>Solution: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-android-trivia/tree/Step.01-Solution-Creating-and-Adding-a-Fragment">Step.01-Solution-Creating-and-Adding-a-Fragment</a> or <a target="_blank" href="https://github.com/udacity/andfun-kotlin-android-trivia/compare/Step.01-Exercise-Creating-and-Adding-a-Fragment...Step.01-Solution-Creating-and-Adding-a-Fragment">git diff</a></p>
<button>Continue</button>
