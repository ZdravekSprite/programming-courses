---
path: "/lesson07/23-extra-credit--add-a-list-header"
title: "Extra Credit: Add a List Header"
---

<youtube id="cd3OTFak_K8"></youtube>

**This is an EXTRA CREDIT exercise, so complete it if you're up for a challenge!**

In this exercise you'll add a header to your RecyclerView.  It has lots of steps, but when you're done, your app will display a header as the first row of the list.

Let's finish the adapter using `DataItems`. You can use this more advanced pattern when you have more than two types of views to hold in a `RecyclerView`.

1. **At the bottom of `SleepNightAdapter`, add a sealed class called `DataItem`:**

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

2. **Add the TextHolder class inside the `SleepNightAdapter` class.**

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

3. **Update the declaration of SleepNightAdapter to support any type of view holder.**

```ts
class SleepNightAdapter:
    ListAdapter<SleepNight, RecyclerView.ViewHolder>(SleepNightDiffCallback())
```

4. **Now let’s update `ListAdapter` to hold a list of `DataItem` instead of a list of `SleepNight`:**

```ts
class SleepNightAdapter:
    ListAdapter<DataItem, RecyclerView.ViewHolder>(SleepNightDiffCallback()) {}
```

5. **Update your `DiffCallback` to handle `DataItem` instead of `SleepNight`:**

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

6. **Then, to figure out what view type to return, add a check to see which type of item is in the list:**

At the top of the file, before the class declaration, create variables for Header and SleepNight item types:

```ts
private val ITEM_VIEW_TYPE_HEADER = 0
private val ITEM_VIEW_TYPE_ITEM = 1
```

Then override `getItemViewType` and return the correct item view type.

```ts
override fun getItemViewType(position: Int): Int {
    return when (getItem(position)) {
        is DataItem.Header -> ITEM_VIEW_TYPE_HEADER
        is DataItem.SleepNightItem -> ITEM_VIEW_TYPE_ITEM
    }
}
```

7. **Change onCreateViewHolder's return type to RecyclerView.ViewHolder, and update it to return the correct ITEM_VIEW_TYPE.**

```ts
override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): RecyclerView.ViewHolder {
    return when (viewType) {
        ITEM_VIEW_TYPE_HEADER -> TextViewHolder.from(parent)
        ITEM_VIEW_TYPE_ITEM -> ViewHolder.from(parent)
        else -> throw ClassCastException("Unknown viewType ${viewType}")
    }
}
```

8. **In `onBindViewHolder()` you'll need to unwrap the `DataItem` to pass a `SleepNight` to the `ViewHolder`.**

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

9. **You'll need a way to convert a `List<SleepNight>` to a `List<DataItem>`.**

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

10. **Finally, update `SleepTrackerFragment` to pass a list of `DataItem` instead of a list of `SleepNight` and call the new addHeaderAndSubmitList method instead of submitList method:**

```ts
 sleepTrackerViewModel.nights.observe(viewLifecycleOwner, Observer {
        it?.let {
            adapter.addHeaderAndSubmitList(it)
        }
 })
```

If you want to start at this step, you can download this exercise from: [Step.13-Exercise-Add-a-List-Header](https://github.com/udacity/andfun-kotlin-sleep-tracker-with-recyclerview/archive/Step.13-Exercise-Add-a-List-Header.zip).

You will find plenty of `//TODO` comments to help you complete this exercise, and if you get stuck, go back and watch the video again.

Once you’re done, you can check your solution against the solution we’ve provided here: [Step.13-Solution-Add-a-List-Header](https://github.com/udacity/andfun-kotlin-sleep-tracker-with-recyclerview/tree/Step.13-Solution-Add-a-List-Header), or using this [git diff](https://github.com/udacity/andfun-kotlin-sleep-tracker-with-recyclerview/compare/Step.13-Exercise-Add-a-List-Header...Step.13-Solution-Add-a-List-Header).

<text-box variant='learningObjectives' name='Complete these tasks to display a header as the first row of the list.'>

- In `SleepNightAdapter`, add a sealed class called `DataItem`, containing a `SleepNightItem` data class, and a `Header` object.
- In `SleepNightAdapter`, copy and paste the `TextViewHolder` class from the exercise text.
- In `SleepNightAdapter`, in `ListAdapter&lt;&gt;`, replace `SleepNight` with `DataItem` and `SleepNightAdapter.ViewHolder` with `RecyclerView.ViewHolder`.
- In `SleepNightAdapter`, create variables for `Header` and `SleepNight` item types.
- In `SleepNightAdapter`, change `onCreateViewHolder`'s return type to `RecyclerView.ViewHolder`, and update it to return `ITEM_VIEW_TYPE`.
- In `SleepNightAdapter`, Change `onBindViewHolder()` to take a `RecyclerView.ViewHolder`, and change the item from a `SleepNight` to a `DataItem`.
- In `SleepNightAdapter`, override `getItemViewType()` and check whether the item is a `Header` or a `SleepNight`.
- In `SleepNightAdapter`, update `DiffCallback` to compare `DataItem` instead `SleepNight` objects.
- In `SleepNightAdapter`, define a `CoroutineScope` with `Dispatchers.Default`.
- In `SleepNightAdapter`, create a new `addHeaderAndSubmitList()` function, and launch the coroutine to convert a `List&lt;SleepNight&gt;` to a `List&lt;DataItem&gt;`, then submit the list to the adapter on the main thread.
- In `SleepTrackerFragment`, replace `submitList` with `addHeaderAndSubmitList`.
- Run the app and verify the list has a header!

</text-box>

Wow, that was a lot of steps, great job!

<button>Continue</button>
