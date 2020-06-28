---
path: "/lesson07/10-exercise--refactor-oncreateviewholder"
title: "Exercise: Refactor onCreateViewHolder"
---

<youtube id="JmANi69w8pQ"></youtube>

<p>Now it’s your turn to complete this exercise yourself.</p>
<p>In this exercise, we’ll continue the refactor we started in the prior lesson by encapsulating the logic for creating the ViewHolder into a method called from(), which we’ll then place into a companion object in the ViewHolder class.</p>
<ol>
<li><p><strong>Encapsulate the logic for creating the <code>ViewHolder</code>.</strong></p>
<p>Select the code in onCreateViewHolder() and, using the same process as above, refactor it into a <code>public</code> method called <code>from</code>.</p>
<p>Watch the video to see how to use Android Studio tools to do most of this refactor for you.
<br><br></p>
</li>
<li><p><strong>Move the <code>from</code> code into a <code>companion object</code>.</strong></p>
<p>Click option-enter on the <code>from</code> method, and select <code>Move to companion object</code>.  Then move the resulting <code>companion object</code> into the <code>ViewHolder</code> class.
<br><br></p>
</li>
<li><p><strong>Change the <code>ViewHolder</code> class declaration to be a <code>private constructor</code>:</strong></p>

```ts
class ViewHolder private constructor(itemView: View)
```

<p><br></p>
</li>
<li><p><strong>Finally, change the return statement in onBindViewHolder to <code>return ViewHolder.from(parent)</code>.</strong></p>
<p>Your refactored SleepNightAdapter should now look like this:</p>

```ts
  class SleepNightAdapter : RecyclerView.Adapter<SleepNightAdapter.ViewHolder>() {

     var data = listOf<SleepNight>()
         set(value) {
             field = value
             notifyDataSetChanged()
         }

     override fun getItemCount() = data.size

     override fun onBindViewHolder(holder: ViewHolder, position: Int) {
         val item = data[position]

         holder.bind(item)
     }

     override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
         return ViewHolder.from(parent)
     }

     class ViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView){
         val sleepLength: TextView = itemView.findViewById(R.id.sleep_length)
         val quality: TextView = itemView.findViewById(R.id.quality_string)
         val qualityImage: ImageView = itemView.findViewById(R.id.quality_image)

         fun bind(item: SleepNight) {
             val res = itemView.context.resources

             sleepLength.text = convertDurationToFormatted(item.startTimeMilli, item.endTimeMilli, res)
             quality.text = convertNumericQualityToString(item.sleepQuality, res)
             qualityImage.setImageResource(when (item.sleepQuality) {
                 0 -> R.drawable.ic_sleep_0
                 1 -> R.drawable.ic_sleep_1
                 2 -> R.drawable.ic_sleep_2
                 3 -> R.drawable.ic_sleep_3
                 4 -> R.drawable.ic_sleep_4
                 5 -> R.drawable.ic_sleep_5
                 else -> R.drawable.ic_sleep_active
             })
         }

         companion object {
             fun from(parent: ViewGroup): ViewHolder {
                 val layoutInflater = LayoutInflater.from(parent.context)
                 val view = layoutInflater
                .inflate(R.layout.list_item_sleep_night, parent, false)

                 return ViewHolder(view)
             }
          }
        }
   }
```

<p><br></p>
</li>
<li><p><strong>Run the app and verify that it runs exactly as it did before the refactor.</strong></p>
</li>
</ol>
<p><strong>Wow, that was a lot of steps!</strong> And the app didn’t change at all! But by using encapsulation to achieve <em>separation of concerns</em>, you’ve made your code much more readable, and easier to maintain. </p>
<p>If you want to start at this step, you can download this exercise from: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker-with-recyclerview/archive/Step.06-Exercise-Refactor-onCreateViewHolder.zip">Step.06-Exercise-Refactor-onCreateViewHolder</a>.</p>
<p>You will find plenty of <code>//TODO</code> comments to help you complete this exercise, and if you get stuck, go back and watch the video again.</p>
<p>Once you’re done, you can check your solution against the solution we’ve provided here: <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker-with-recyclerview/tree/Step.06-Solution-Refactor-onCreateViewHolder">Step.06-Solution-Refactor-onCreateViewHolder</a>, or using this <a target="_blank" href="https://github.com/udacity/andfun-kotlin-sleep-tracker-with-recyclerview/compare/Step.06-Exercise-Refactor-onCreateViewHolder...Step.06-Solution-Refactor-onCreateViewHolder">git diff</a>.</p>

<text-box variant='learningObjectives' name='Complete these steps to refactor onCreateViewHolder().'>

- In <code>SleepNightAdapter</code>, refactor the logic for creating the <code>ViewHolder</code> into a function called <code>from()</code>.
- In <code>SleepNightAdapter</code>, make the <code>from()</code>function into a companion object.
- In <code>SleepNightAdapter</code>, move the companion object into the <code>ViewHolder</code> class, and have it return a <code>ViewHolder</code>.
- Build and run the app.  It looks the same but the code is so much better now!

</text-box>

<p>Great job! Your encapsulated ViewHolder is so much simpler!</p>
<button>Continue</button>
