---
path: "/lesson01/15-connecting-the-button"
title: "Connecting the Button"
---
<youtube id="faPKAbSFDsM"></youtube>

<p><strong>A note about the view binding feature (Android Studio 3.6+)</strong><br>Since Developing Android Apps with Kotlin has launched, a new feature, view binding, has been introduced and is available in Android Studio 3.6 and higher. We don't use view binding because it came out after the course, but it's a feature to be aware of.</p>
<p><a target="_blank" href="https://developer.android.com/topic/libraries/view-binding">View binding</a> replaces <a target="_blank" href="https://developer.android.com/reference/kotlin/android/view/View.html#findViewById%28kotlin.Int%29"><code>findViewById</code></a>. View binding generates a binding object for each XML layout. You use this binding object to reference views, using their resource ids as the name:</p>

```xml
// Creating a binding object for the main_activity.xml layout
binding = ActivityMainBinding.inflate(layoutInflater)

// Referencing a view with the ID roll_button
binding.rollButton
```

<p>View binding has the following benefits over <code>findViewById</code>:</p>
<ul>
<li><strong>Type safety</strong> - <code>findViewById</code> requires you to specify the type of view you expect to be returned. For example, if you accidentally specify that you expect an <code>ImageButton</code> to be returned when the actual type is a <code>Button</code>, you'll get a <a target="_blank" href="https://developer.android.com/reference/java/lang/ClassCastException">ClassCastException</a>. View binding protects you from this type of error because the view is a correctly typed property of the binding.</li>
<li><strong>Null safety</strong> - <code>findViewById</code> expects an integer parameter, which is meant to be the resource ID of a view. It is possible, though, to pass in any integer as a parameter,  including unrelated integers and invalid view ids. If you supply an integer that doesn't match a view resource id in the layout, <code>findViewById</code> returns null and can cause a <a target="_blank" href="https://developer.android.com/reference/java/lang/NullPointerException"><code>NullPointerException</code></a>. View binding is null safe because you reference view objects directly and don't look them up by integer IDs.</li>
</ul>
<p>To learn more about how to use view binding in your app, check out the <a target="_blank" href="https://d.android.com/topic/libraries/view-binding">View Binding documentation</a> and the <a target="_blank" href="https://youtu.be/Qxj2eBmXLHg?t=444">Accessing Views</a> portion of <a target="_blank" href="https://www.youtube.com/watch?v=Qxj2eBmXLHg">What's new in Architecture Components (Google I/O'19)</a>.</p>
