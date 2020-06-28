---
path: "/lesson07/23-extra-credit--add-a-list-header"
title: "Extra Credit: Add a List Header"
---

<youtube id="cd3OTFak_K8"></youtube>

<p><strong>This is an EXTRA CREDIT exercise, so complete it if you're up for a challenge!</strong></p>
<p>In this exercise you'll add a header to your RecyclerView.  It has lots of steps, but when you're done, your app will display a header as the first row of the list.</p>
<p>Let's finish the adapter using <code>DataItems</code>. You can use this more advanced pattern when you have more than two types of views to hold in a <code>RecyclerView</code>.</p>
<ol>
<li><p><strong>At the bottom of <code>SleepNightAdapter</code>, add a sealed class called <code>DataItem</code>:</strong></p>

```ts
 sealed class DataItem {
     data class SleepNightItem(val sleepNight: SleepNight): DataItem() {
         override val id = sleepNight.nightId
     }

     object Header: DataItem() {
         override val id = Long.MIN_VALUE
     }

     abstract val id: Long
 }
```

<p><br></p>
</li>
<li><p><strong>Add the TextHolder class inside the <code>SleepNightAdapter</code> class.</strong></p>

```ts
 class TextViewHolder(view: View): RecyclerView.ViewHolder(view) {
       companion object {
           fun from(parent: ViewGroup): TextViewHolder {
               val layoutInflater = LayoutInflater.from(parent.context)
               val view = layoutInflater.inflate(R.layout.header, parent, false)
                return TextViewHolder(view)
           }
       }
 }
```

<p><br></p>
</li>
<li><p><strong>Update the declaration of SleepNightAdapter to support any type of view holder.</strong></p>

```ts
class SleepNightAdapter:
 ListAdapter<SleepNight, RecyclerView.ViewHolder>(SleepNightDiffCallback())
```

<p><br></p>
</li>
<li><p><strong>Now let’s update <code>ListAdapter</code> to hold a list of <code>DataItem</code> instead of a list of <code>SleepNight</code>:</strong></p>

```ts
class SleepNightAdapter:
 ListAdapter<DataItem, RecyclerView.ViewHolder>(SleepNightDiffCallback()) {}
```

<p><br></p>
</li>
<li><p><strong>Update your <code>DiffCallback</code> to handle <code>DataItem</code> instead of <code>SleepNight</code>:</strong></p>

```ts
 class SleepNightDiffCallback : DiffUtil.ItemCallback<DataItem>() {
     override fun areItemsTheSame(oldItem: DataItem, newItem: DataItem): Boolean {
         return oldItem.id == newItem.id
     }

     override fun areContentsTheSame(oldItem: DataItem, newItem: DataItem): Boolean {
         return oldItem == newItem
     }
 }
```

<p><br></p>
</li>
<li><p><strong>Then, to figure out what view type to return, add a check to see which type of item is in the list:</strong></p>
<p>At the top of the file, before the class declaration, create variables for Header and SleepNight item types:</p>

```ts
private val ITEM_VIEW_TYPE_HEADER = 0
private val ITEM_VIEW_TYPE_ITEM = 1
```

<p>Then override <code>getItemViewType</code> and return the correct item view type.</p>

```ts
 override fun getItemViewType(position: Int): Int {
      return when (getItem(position)) {
          is DataItem.Header -> ITEM_VIEW_TYPE_HEADER
          is DataItem.SleepNightItem -> ITEM_VIEW_TYPE_ITEM
      }
 }
```

<p><br></p>
</li>
<li><p><strong>Change onCreateViewHolder's return type to RecyclerView.ViewHolder, and
update it to return the correct ITEM_VIEW_TYPE.</strong></p>

```ts
 override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): RecyclerView.ViewHolder {
    return when (viewType) {
        ITEM_VIEW_TYPE_HEADER -> TextViewHolder.from(parent)
        ITEM_VIEW_TYPE_ITEM -> ViewHolder.from(parent)
        else -> throw ClassCastException("Unknown viewType ${viewType}")
    }
 }
```

<p><br></p>
</li>
<li><p><strong>In <code>onBindViewHolder()</code> you'll need to unwrap the <code>DataItem</code> to pass a <code>SleepNight</code> to the <code>ViewHolder</code></strong></p>

```ts
 override fun onBindViewHolder(holder: RecyclerView.ViewHolder, position: Int) {
    when (holder) {
        is ViewHolder -> {
            val nightItem = getItem(position) as DataItem.SleepNightItem
            holder.bind(nightItem.sleepNight, clickListener)
        }
    }
 }
```

<p><br></p>
</li>
<li><p><strong>You'll need a way to convert a <code>List&lt;SleepNight&gt;</code> to a <code>List&lt;DataItem&gt;</code>.</strong></p>

```ts
 private val adapterScope = CoroutineScope(Dispatchers.Default)
     fun addHeaderAndSubmitList(list: List<SleepNight>?) {
         adapterScope.launch {
             val items = when (list) {
                 null -> listOf(DataItem.Header)
                 else -> listOf(DataItem.Header) + list.map   DataItem.SleepNightItem(it)
             }
        }
            withContext(Dispatchers.Main) {
         submitList(items)
        }
     }
 }
```

<p><br></p>
</li>
<li><p><strong>Finally, update <code>SleepTrackerFragment</code> to pass a list of <code>DataItem</code> instead of a list of <code>SleepNight</code> and call the new addHeaderAndSubmitList method instead of submitList method:</strong></p>

```ts
 sleepTrackerViewModel.nights.observe(viewLifecycleOwner, Observer {
        it?.let {
            adapter.addHeaderAndSubmitList(it)
        }
 })
```

</li>
</ol>
<p>If you want to start at this step, you can download this exercise from: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker-with-recyclerview/archive/Step.13-Exercise-Add-a-List-Header.zip">Step.13-Exercise-Add-a-List-Header</a>.</p>
<p>You will find plenty of <code>//TODO</code> comments to help you complete this exercise, and if you get stuck, go back and watch the video again.</p>
<p>Once you’re done, you can check your solution against the solution we’ve provided here: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker-with-recyclerview/tree/Step.13-Solution-Add-a-List-Header">Step.13-Solution-Add-a-List-Header</a>, or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker-with-recyclerview/compare/Step.13-Exercise-Add-a-List-Header...Step.13-Solution-Add-a-List-Header">git diff</a>.</p>

<text-box variant='learningObjectives' name='Complete these tasks to display a header as the first row of the list.'>

- In <code>SleepNightAdapter</code>, add a sealed class called <code>DataItem</code>, containing a <code>SleepNightItem</code> data class, and a <code>Header</code> object.
- In <code>SleepNightAdapter</code>, copy and paste the <code>TextViewHolder</code> class from the exercise text.
- In <code>SleepNightAdapter</code>, in <code>ListAdapter&lt;&gt;</code>, replace <code>SleepNight</code> with <code>DataItem</code> and <code>SleepNightAdapter.ViewHolder</code> with <code>RecyclerView.ViewHolder</code>.
- In <code>SleepNightAdapter</code>, create variables for <code>Header</code> and <code>SleepNight</code> item types.
- In <code>SleepNightAdapter</code>, change <code>onCreateViewHolder</code>'s return type to <code>RecyclerView.ViewHolder</code>, and update it to return <code>ITEM_VIEW_TYPE</code>.
- In <code>SleepNightAdapter</code>, Change <code>onBindViewHolder()</code> to take a <code>RecyclerView.ViewHolder</code>, and change the item from a <code>SleepNight</code> to a <code>DataItem</code>.
- In <code>SleepNightAdapter</code>, override <code>getItemViewType()</code> and check whether the item is a <code>Header</code> or a <code>SleepNight</code>.
- In <code>SleepNightAdapter</code>, update <code>DiffCallback</code> to compare <code>DataItem</code> instead <code>SleepNight</code> objects.
- In <code>SleepNightAdapter</code>, define a <code>CoroutineScope</code> with <code>Dispatchers.Default</code>.
- In <code>SleepNightAdapter</code>, create a new <code>addHeaderAndSubmitList()</code> function, and launch the coroutine to convert a <code>List&lt;SleepNight&gt;</code> to a <code>List&lt;DataItem&gt;</code>, then submit the list to the adapter on the main thread.
- In <code>SleepTrackerFragment</code>, replace <code>submitList</code> with <code>addHeaderAndSubmitList</code>.
- Run the app and verify the list has a header!

</text-box>

<p>Wow, that was a lot of steps, great job!</p>
<button>Continue</button>
