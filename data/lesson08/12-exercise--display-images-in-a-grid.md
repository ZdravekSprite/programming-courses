---
path: "/lesson08/12-exercise--display-images-in-a-grid"
title: "Exercise: Display Images in a Grid"
---

<youtube id="raskVFBJOqQ"></youtube>

Now it's your turn! If you want to start at this step, you can download this exercise from: [Step.05-Exercise-Displaying-a-Grid-of-Internet-Images](https://github.com/udacity/andfun-kotlin-mars-real-estate/archive/Step.05-Exercise-Displaying-a-Grid-of-Internet-Images.zip). You will find plenty of helpful `//TODO` comments there.

Your app shows you just a single property on Mars.  Let's give you some real-estate choices!

When you've completed with this exercise you'll be able scroll through whole list of properties in a new RecyclerView.

**1. Add the Gradle dependency for the RecyclerView:**

```ts
implementation "androidx.recyclerview:recyclerview:$version_recyclerview"
```

**2. In `OverviewViewModel` rename `_property` to `_properties`, and assign it a `List` of `MarsProperty`:**

```ts
private val _properties = MutableLiveData<List<MarsProperty>>()

val properties: LiveData<List<MarsProperty>>
    get() = _properties
```

**3. Then update getMarsRealEstateProperties() to return the entire list instead of just one item:**

```ts
_properties.value = listResult
```

**4. In `grid_view_item.xml` replace the `viewModel` variable with a `property` of type `MarsProperty`:**

```ts
<variable
 name="property"
 type="com.example.android.marsrealestate.network.MarsProperty" />
```

Then update the binding in `mars_image` to reflect the variable change:

```ts
app:imageUrl="@{property.imgSrcUrl}"
```

**5. In `OverviewFragment` inflate a `FragmentOverviewBinding` instead of a `GridViewItemBinding`:**


```ts
val binding = FragmentOverviewBinding.inflate(inflater)
```

**6. In `fragment_overview`, replace the `TextView` with a `RecyclerView`, using a `GridLayoutManager` to display items in a 2-column grid:**


```ts
<androidx.recyclerview.widget.RecyclerView
  android:id="@+id/photos_grid"
  android:layout_width="0dp"
  android:layout_height="0dp"
  android:padding="6dp"
  app:layoutManager="androidx.recyclerview.widget.GridLayoutManager"
  app:layout_constraintBottom_toBottomOf="parent"
  app:layout_constraintLeft_toLeftOf="parent"
  app:layout_constraintRight_toRightOf="parent"
  app:layout_constraintTop_toTopOf="parent"
  app:spanCount="2"
  tools:itemCount="16"
  tools:listitem="@layout/grid_view_item" />
```

Previewing the overview_fragment in the Design panel now shows a grid of images. Let's implement the RecyclerView Adapter in our app to show our list of Mars rover photos.

**1. In `PhotoGridAdapter.kt` create a 'PhotoGridAdapter' class that extends a `RecyclerView` `ListAdapter` with `DiffCallback`.  Have it use a custom `PhotoGridAdapter.MarsPropertyViewHolder` to present a list of `&lt;MarsProperty&gt;` objects:**


```ts
class PhotoGridAdapter : ListAdapter<MarsProperty, PhotoGridAdapter.MarsPropertyViewHolder>(DiffCallback) {}
```

**2. Add the imports for the ListAdapter and MarsProperty. Make <em>sure</em> to import `androidx.recyclerview.widget.ListAdapter.`**

```ts
import androidx.recyclerview.widget.ListAdapter
import com.example.android.marsrealestate.network.MarsProperty
```

**3. Use <em>Control-I</em> to have Android Studio override the adapter's required `onCreateViewHolder()` and `onBindViewHolder()` methods:  Don't bother filling them out yet.**

```ts
override fun onCreateViewHolder(parent: ViewGroup, viewType: Int):
PhotoGridAdapter.MarsPropertyViewHolder {
 TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
}

override fun onBindViewHolder(holder: PhotoGridAdapter.MarsPropertyViewHolder, position: Int) {
 TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
}
```

**4. Create the `DiffCallback` companion object and override its two required `areItemsTheSame()` methods:**

```ts
companion object DiffCallback : DiffUtil.ItemCallback<MarsProperty>() {
 override fun areItemsTheSame(oldItem: MarsProperty, newItem: MarsProperty): Boolean {
    return oldItem === newItem
 }

 override fun areContentsTheSame(oldItem: MarsProperty, newItem: MarsProperty): Boolean {
    return oldItem.id == newItem.id
 }
}
```

**5. Create a `MarsPropertyViewHolder` inner class, and implement the `bind()` method that includes a binding to `marsProperty`:**

<em>Hint</em> Don't forget to call `binding.executePendingBindings()`!

```ts
class MarsPropertyViewHolder(private var binding: GridViewItemBinding):
 RecyclerView.ViewHolder(binding.root) {
    fun bind(marsProperty: MarsProperty) {
       binding.property = marsProperty
       binding.executePendingBindings()
    }
  }
```

**6. Implement the empty `onCreateViewHolder()` and `onBindViewHolder()` methods:**

```ts
override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): PhotoGridAdapter.MarsPropertyViewHolder {
 return MarsPropertyViewHolder(GridViewItemBinding.inflate(LayoutInflater.from(parent.context)))
}

override fun onBindViewHolder(holder: PhotoGridAdapter.MarsPropertyViewHolder, position: Int) {
 val marsProperty = getItem(position)
 holder.bind(marsProperty)
}
```

**7. In `BindingAdapters`, add a `bindRecyclerView` binding adapter for `listData`, and have it call `submitList()` on the `PhotosGridAdapter`:**


```ts
@BindingAdapter("listData")
 fun bindRecyclerView(recyclerView: RecyclerView, data: List<MarsProperty>?) {
     val adapter = recyclerView.adapter as PhotoGridAdapter
     adapter.submitList(data)
 }
```

**8. In `fragment_overview`,  in `photos_grid`, bind  the `listData` binding adapter  to `viewModel.properties`:**

```ts
app:listData="@{viewModel.properties}"
```

**9. In `OverviewFragment`, set the adapter in the `RecyclerView` (the `photosGrid.adapter` in the binding object) to a new `PhotoGridAdapter`**

```ts
binding.photosGrid.adapter = PhotoGridAdapter()
```

**10. In `fragment_overview`, add an attribute to the `RecyclerView` to set `clipToPadding` to `false`:**

```ts
android:clipToPadding="false"
```

**11. And, you made it! Build and run the app to see the grid of properties --- so much more choice!**

If you get stuck, go back and watch the video again. Once you’re done, you can check your solution against the solution we’ve provided here: [Step.05-Solution-Displaying-a-Grid-of-Internet-Images](https://github.com/udacity/andfun-kotlin-mars-real-estate/tree/Step.05-Solution-Displaying-a-Grid-of-Internet-Images), or using this [git diff](https://github.com/udacity/andfun-kotlin-mars-real-estate/compare/Step.05-Exercise-Displaying-a-Grid-of-Internet-Images...Step.05-Solution-Displaying-a-Grid-of-Internet-Images).


<text-box variant='learningObjectives' name='Complete the tasks below to display your images in a grid.'>

- Add the gradle dependency for the RecyclerView library.
- Update the ViewModel to return a LiveData of List.
- Update grid_view_item to bind to MarsProperty rather than ViewModel, and update the reference to it in the ImageView.
- Switch OverviewFragment to inflate FragmentOverviewBinding.
- Replace the TextView with a RecyclerView in fragment_overview.xml.
- Create and fill out the PhotoGridAdapter including DiffCallback, MarsPropertyViewHolder.
- Create a binding adapter for the listData attribute and add it to the RecyclerView xml tag.
- Set binding.photosGrid.adapter to a new PhotoGridAdapter() in OverviewFragment.
- Add android:clipToPadding = "false" in fragment_overview.

</text-box>

Great job!  So many properties to choose from!

<button>Continue</button>
