---
path: "/lesson02/15-data-binding--views"
title: "Data Binding: Views"
---
<youtube id="rMrVU5ACPYU"></youtube>

<h3 id="android-developer-documentation-">Android Developer Documentation:</h3>
<ul>
<li><a target="_blank" href="https://developer.android.com/topic/libraries/data-binding/start">Getting started with data binding</a></li>
<li><a target="_blank" href="https://developer.android.com/topic/libraries/data-binding/">Data Binding Library</a></li>
<li><a target="_blank" href="https://developer.android.com/topic/libraries/data-binding/generated-binding">Generated Binding Classes</a></li>
</ul>

<h3>Quiz Question</h3>
<p>Check all the answers that are true for Data Binding.</p>
<ul>
<li><p>Data binding generates the Binding object at compile time for all views in the layout.</p></li>
<li><p>Accessing views through the Binding object is more efficient than using findViewById.</p></li>
<li><p>For complex view hierarchies, data binding can be a significant performance gain.</p></li>
<li><p>You should not use data binding if your app is simple.</p></li>
<li><p>findViewById traverses the view hierarchy at runtime to find a view every time it’s called.</p></li>
</ul>
<button>Submit</button>

<p>Data binding generates a Binding object at compile time, so that your app does not have to traverse the view hierarchy at runtime using findViewById, which is costly and can affect app performance.</p>
TRY AGAIN

<p>While using data binding is not mandatory for simple apps, it is a recommended pattern that makes your code simpler and easier to read.</p>
CONTINUE
