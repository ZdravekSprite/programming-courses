---
path: "/lesson08/11-exercise--display-an-internet-image"
title: "Exercise: Display an Internet Image"
---

<youtube id="S0UQn0ipQUM"></youtube>

Now it's your turn to complete this exercise yourself!  At the end of this exercise you will have downloaded and displayed your very first image from Mars.

If you want to start at this step, you can download this exercise from: [Step.04-Exercise-Displaying-an-Internet-Image](https://github.com/udacity/andfun-kotlin-mars-real-estate/archive/Step.04-Exercise-Displaying-an-Internet-Image.zip). You will find plenty of `//TODO` comments to help you complete this exercise.

**1. In `build.gradle`, add the Glide library dependency:**

```ts
implementation "com.github.bumptech.glide:glide:$version_glide"
```

**2. In `OverViewViewModel`, rename `response` `LiveData` to `status`:**

```ts
private val _status = MutableLiveData<String>()

val status: LiveData<String>
    get() = _status
```

**3. Add an encapsulated `LiveData<MarsProperty>` property:**

```ts
private val _property = MutableLiveData<MarsProperty>()

val property: LiveData<MarsProperty>
    get() = _property
```

**4. Update `getMarsRealEstateProperties()` to set _property to the first MarsProperty from listResult:**

```ts
if (listResult.size > 0) {
    _property.value = listResult[0]
}
```

and the error response to a status value:

```ts
_status.value = "Failure: ${e.message}"
```

**5. In `fragment_overview.xml` change the `TextView` binding to `viewModel.property.imgSrcUrl`.**

```ts
android:text="@{viewModel.property.imgSrcUrl}"
```

Running the app now displays the Url to the first Mars image. Next, we'll load and display that image with Glide.

**1. In `BindingAdapters` create a `BindingAdapter` to convert `imgUrl` to a `URI` with the https scheme.**

Inside the adapter, use `Glide` to download the image display it in `imgView`:

```ts
@BindingAdapter("imageUrl")
fun bindImage(imgView: ImageView, imgUrl: String?) {
    imgUrl?.let {
    val imgUri = imgUrl.toUri().buildUpon().scheme("https").build()
    Glide.with(imgView.context)
        .load(imgUri)
        .into(imgView)
    }
}
```

**2. In `grid_view_item.xml`, add a `viewModel` data variable.**

```ts
<data>
    <variable
        name="viewModel"
        type="com.example.android.marsrealestate.overview.OverviewViewModel" />
</data>
```

**3. Bind `mars_image` to the imageView using the recently added `imgUrl` BindingAdapter.**

```ts
app:imageUrl="@{viewModel.property.imgSrcUrl}"
```

**4. Back in `OverviewFragment`, replace `FragmentOverviewBinding` with `GridViewItemBinding`.**

```ts
val binding = GridViewItemBinding.inflate(inflater)
```

**5. Build and run your app. You should see a beautiful piece of property on Mars. Who wouldn't want to live there?**

We can do one more thing to make this work even better. Currently our app doesn't display anything when we're loading, and if the loading fails there's no indication to the user.

**1. In `BindingAdapters`, apply `RequestOptions` to the `Glide` call to add a placeholder that displays an image while your image downloads, and an error image in case it can't be retrieved.**

```ts
.apply(RequestOptions()
    .placeholder(R.drawable.loading_animation)
    .error(R.drawable.ic_broken_image))
```

**2. Build and run your app. You might just catch a blink of the loading animation if you have a fast connection.**

If you get stuck, go back and watch the video again. Once you’re done, you can check your solution against the solution we’ve provided here: [Step.04-Solution-Displaying-an-Internet-Image](https://github.com/udacity/andfun-kotlin-mars-real-estate/tree/Step.04-Solution-Displaying-an-Internet-Image), or using this [git diff](https://github.com/udacity/andfun-kotlin-mars-real-estate/compare/Step.04-Exercise-Displaying-an-Internet-Image...Step.04-Solution-Displaying-an-Internet-Image).

<text-box variant='learningObjectives' name='Complete the tasks below to display an image.'>

- Add the Gradle dependency for the Glide library.
- Add a LiveData MarsProperty property in the OverviewViewModel, and rename response LiveData to Status.
- Update getMarsRealEstateProperties to set the MarsProperty property in the OverViewViewModel.
- Make the text attribute in fragment_overview point at viewModel.property.imgSrcUrl.
- Create the Binding Adapter, converting the imgUrl into a URI with the https: scheme.
- Use Glide to load the imgUri into the imgView.
- Added the viewModel data variable to the grid_view_item layout.
- Set the app:imageUrl attribute to viewModel.property.imgSrcUrl.
- Switch to inflating GridViewItemBinding in OverviewFragment.
- Add the requestOptions for placeholder and errors into the Glide fluent call.

</text-box>

Good work! Are you ready to see some more Mars images?

<button>Continue</button>

Reference documentation

- [Glide](https://bumptech.github.io/glide/)
- [Glide Github](https://github.com/bumptech/glide)
