---
path: "/developers01/02-view-binding"
title: "View Binding"
---

<article class="devsite-article-inner">
  <h1 class="devsite-page-title">View Binding</h1>
    <devsite-toc class="devsite-nav devsite-toc-embedded" devsite-toc-embedded="" visible="">
      <ul class="devsite-nav-list" scrollbars="">
        <li class="devsite-nav-item devsite-nav-heading devsite-toc-toggle">
          <a href="#top_of_page" class="devsite-nav-title">
            <span class="devsite-nav-text" tooltip="">Contents</span>
          </a>
          <button type="button" title="Expand/collapse contents" class="devsite-nav-show-all button-transparent material-icons"></button>
        </li>
        <li class="devsite-nav-item">
          <a href="#setup" class="devsite-nav-title"><span class="devsite-nav-text" tooltip="">Setup instructions</span></a></li>
        <li class="devsite-nav-item"><a href="#usage" class="devsite-nav-title"><span class="devsite-nav-text" tooltip="">Usage</span></a>
          <ul class="devsite-nav-list"><li class="devsite-nav-item"><a href="#activities" class="devsite-nav-title gc-analytics-event" data-category="Site-Wide Custom Events" data-action="click" data-label="Embedded nav" data-value="1.0"><span class="devsite-nav-text" tooltip="">Use view binding in activities</span></a></li><li class="devsite-nav-item"><a href="#fragments" class="devsite-nav-title gc-analytics-event" data-category="Site-Wide Custom Events" data-action="click" data-label="Embedded nav" data-value="1.1"><span class="devsite-nav-text" tooltip="">Use view binding in fragments</span></a></li></ul></li><li class="devsite-nav-item"><a href="#findviewbyid" class="devsite-nav-title"><span class="devsite-nav-text" tooltip="">Differences from findViewById</span></a></li><li class="devsite-nav-item"><a href="#data-binding" class="devsite-nav-title"><span class="devsite-nav-text" tooltip="">Comparison with data binding</span></a></li><li class="devsite-toc-toggle"><button type="button" class="button-flat devsite-nav-more-items material-icons" title="Expand/collapse contents" aria-hidden="true"></button></li></ul></devsite-toc>
    <div class="devsite-article-body clearfix">
<p><em>View binding</em> is a feature that allows you to more easily write code that
interacts with views. Once view binding is enabled in a module, it generates a
<em>binding class</em> for each XML layout file present in that module. An instance of
a binding class contains direct references to all views that have an ID in the
corresponding layout.</p>

<p>In most cases, view binding replaces <code translate="no" dir="ltr">findViewById</code>.</p>

<h2 id="setup" data-text="Setup instructions" tabindex="0">Setup instructions</h2>
<aside class="note"><strong>Note:</strong><span> View binding is available in <a href="/studio/preview">Android Studio 3.6 Canary
11+</a>.</span></aside>
<p>View binding is enabled on a module by module basis. To enable view binding in a
module, add the <code translate="no" dir="ltr">viewBinding</code> element to its <code translate="no" dir="ltr">build.gradle</code> file, as shown in
the following example:</p>
<devsite-code><pre class="lang-groovy" translate="no" dir="ltr" is-upgraded=""><code dir="ltr"><span class="pln">android </span><span class="pun">{</span><span class="pln"><br>&nbsp; &nbsp; </span><span class="pun">...</span><span class="pln"><br>&nbsp; &nbsp; viewBinding </span><span class="pun">{</span><span class="pln"><br>&nbsp; &nbsp; &nbsp; &nbsp; enabled </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">true</span><span class="pln"><br>&nbsp; &nbsp; </span><span class="pun">}</span><span class="pln"><br></span><span class="pun">}</span><span class="pln"><br></span></code></pre><div class="devsite-code-buttons-container"><button type="button" class="gc-analytics-event material-icons devsite-icon-code-dark devsite-toggle-dark" data-category="Site-Wide Custom Events" data-label="Dark Code Toggle" track-type="exampleCode" track-name="darkCodeToggle" aria-label="Dark code theme" data-title="Dark code theme"></button><button type="button" class="gc-analytics-event material-icons devsite-icon-code-light devsite-toggle-light" data-category="Site-Wide Custom Events" data-label="Light Code Toggle" track-type="exampleCode" track-name="lightCodeToggle" aria-label="Light code theme" data-title="Light code theme"></button><button type="button" class="gc-analytics-event material-icons devsite-icon-copy" data-category="Site-Wide Custom Events" data-label="Click To Copy" track-type="exampleCode" track-name="clickToCopy" aria-label="Copy code sample to clipboard" data-title="Copy code sample to clipboard"></button></div></devsite-code>
<p>If you want a layout file to be ignored while generating binding classes, add
the <code translate="no" dir="ltr">tools:viewBindingIgnore="true"</code> attribute to the root view of that layout
file:</p>
<devsite-code><pre class="lang-xml" translate="no" dir="ltr" is-upgraded=""><code dir="ltr"><span class="tag">&lt;LinearLayout</span><span class="pln"><br>&nbsp; &nbsp; &nbsp; &nbsp; ...<br>&nbsp; &nbsp; &nbsp; &nbsp; </span><span class="atn">tools:viewBindingIgnore</span><span class="pun">=</span><span class="atv">"true"</span><span class="pln"> </span><span class="tag">&gt;</span><span class="pln"><br>&nbsp; &nbsp; ...<br></span><span class="tag">&lt;/LinearLayout&gt;</span><span class="pln"><br></span></code></pre><div class="devsite-code-buttons-container"><button type="button" class="gc-analytics-event material-icons devsite-icon-code-dark devsite-toggle-dark" data-category="Site-Wide Custom Events" data-label="Dark Code Toggle" track-type="exampleCode" track-name="darkCodeToggle" aria-label="Dark code theme" data-title="Dark code theme"></button><button type="button" class="gc-analytics-event material-icons devsite-icon-code-light devsite-toggle-light" data-category="Site-Wide Custom Events" data-label="Light Code Toggle" track-type="exampleCode" track-name="lightCodeToggle" aria-label="Light code theme" data-title="Light code theme"></button><button type="button" class="gc-analytics-event material-icons devsite-icon-copy" data-category="Site-Wide Custom Events" data-label="Click To Copy" track-type="exampleCode" track-name="clickToCopy" aria-label="Copy code sample to clipboard" data-title="Copy code sample to clipboard"></button></div></devsite-code>
<h2 id="usage" data-text="Usage" tabindex="0">Usage</h2>

<p>If view binding is enabled for a module, a binding class is generated for each
XML layout file that the module contains. Each binding class contains references
to the root view and all views that have an ID. The name of the binding class is
generated by converting the name of the XML file to camel case and adding the
word "Binding" to the end.</p>

<p>For example, given a layout file called <code translate="no" dir="ltr">result_profile.xml</code>:</p>
<devsite-code><pre class="lang-xml" translate="no" dir="ltr" is-upgraded=""><code dir="ltr"><span class="tag">&lt;LinearLayout</span><span class="pln"> ... </span><span class="tag">&gt;</span><span class="pln"><br>&nbsp; &nbsp; </span><span class="tag">&lt;TextView</span><span class="pln"> </span><span class="atn">android:id</span><span class="pun">=</span><span class="atv">"@+id/name"</span><span class="pln"> </span><span class="tag">/&gt;</span><span class="pln"><br>&nbsp; &nbsp; </span><span class="tag">&lt;ImageView</span><span class="pln"> </span><span class="atn">android:cropToPadding</span><span class="pun">=</span><span class="atv">"true"</span><span class="pln"> </span><span class="tag">/&gt;</span><span class="pln"><br>&nbsp; &nbsp; </span><span class="tag">&lt;Button</span><span class="pln"> </span><span class="atn">android:id</span><span class="pun">=</span><span class="atv">"@+id/button"</span><span class="pln"><br>&nbsp; &nbsp; &nbsp; &nbsp; </span><span class="atn">android:background</span><span class="pun">=</span><span class="atv">"@drawable/rounded_button"</span><span class="pln"> </span><span class="tag">/&gt;</span><span class="pln"><br></span><span class="tag">&lt;/LinearLayout&gt;</span><span class="pln"><br></span></code></pre><div class="devsite-code-buttons-container"><button type="button" class="gc-analytics-event material-icons devsite-icon-code-dark devsite-toggle-dark" data-category="Site-Wide Custom Events" data-label="Dark Code Toggle" track-type="exampleCode" track-name="darkCodeToggle" aria-label="Dark code theme" data-title="Dark code theme"></button><button type="button" class="gc-analytics-event material-icons devsite-icon-code-light devsite-toggle-light" data-category="Site-Wide Custom Events" data-label="Light Code Toggle" track-type="exampleCode" track-name="lightCodeToggle" aria-label="Light code theme" data-title="Light code theme"></button><button type="button" class="gc-analytics-event material-icons devsite-icon-copy" data-category="Site-Wide Custom Events" data-label="Click To Copy" track-type="exampleCode" track-name="clickToCopy" aria-label="Copy code sample to clipboard" data-title="Copy code sample to clipboard"></button></div></devsite-code>
<p>The generated binding class is called <code translate="no" dir="ltr">ResultProfileBinding</code>. This class has two
fields: a <code translate="no" dir="ltr">TextView</code> called <code translate="no" dir="ltr">name</code> and a <code translate="no" dir="ltr">Button</code> called <code translate="no" dir="ltr">button</code>. The
<code translate="no" dir="ltr">ImageView</code> in the layout has no ID, so there is no reference to it in the
binding class.</p>

<p>Every binding class also includes a <code translate="no" dir="ltr">getRoot()</code> method, providing a direct
reference for the root view of the corresponding layout file. In this example,
the <code translate="no" dir="ltr">getRoot()</code> method in the <code translate="no" dir="ltr">ResultProfileBinding</code> class returns the
<code translate="no" dir="ltr">LinearLayout</code> root view.</p>

<p>The following sections demonstrate the use of generated binding classes in
activities and fragments.</p>

<h3 id="activities" data-text="Use view binding in activities" tabindex="0">Use view binding in activities</h3>

<p>To set up an instance of the binding class for use with an activity, perform the
following steps in the activity's
<a href="/reference/kotlin/android/app/Activity#oncreate"><code translate="no" dir="ltr">onCreate()</code></a> method:</p>

<ol>
<li>Call the static <code translate="no" dir="ltr">inflate()</code> method included in the generated binding class.
This creates an instance of the binding class for the activity to use.</li>
<li>Get a reference to the root view by either calling the <code translate="no" dir="ltr">getRoot()</code> method or
using <a href="https://kotlinlang.org/docs/reference/properties.html#declaring-properties">Kotlin property
syntax</a>.</li>
<li>Pass the root view to
<a href="/reference/kotlin/android/app/Activity#setcontentview_1"><code translate="no" dir="ltr">setContentView()</code></a>
to make it the active view on the screen.</li>
</ol>

<div>
<devsite-selector scope="auto" active="kotlin" ready=""><devsite-tabs role="tablist" connected=""><div class="devsite-tabs-wrapper"><tab role="tab" aria-selected="true" aria-controls="tabpanel-kotlin" tab="kotlin" id="kotlin" active=""><a id="aria-tab-kotlin" role="button" href="#kotlin">Kotlin</a></tab><tab role="tab" aria-selected="false" aria-controls="tabpanel-java" tab="java" id="java"><a id="aria-tab-java" role="button" href="#java">Java</a></tab><tab overflow-tab="" hidden=""><a href="#" class="devsite-icon devsite-icon-arrow-drop-down">More</a><div class="devsite-tabs-overflow-menu" scrollbars="" hidden=""></div></tab></div></devsite-tabs><section tab="kotlin" role="tabpanel" aria-labelledby="aria-tab-kotlin" tabindex="0" id="tabpanel-kotlin" active="">
<devsite-code><pre class="lang-kotlin" translate="no" dir="ltr" is-upgraded=""><span class="kwd">private</span><span class="pln"> lateinit </span><span class="kwd">var</span><span class="pln"> binding</span><span class="pun">:</span><span class="pln"> </span><span class="typ">ResultProfileBinding</span><span class="pln"><br><br></span><span class="kwd">override</span><span class="pln"> </span><span class="kwd">fun</span><span class="pln"> onCreate</span><span class="pun">(</span><span class="pln">savedInstanceState</span><span class="pun">:</span><span class="pln"> </span><span class="typ">Bundle</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln"><br>&nbsp; &nbsp; </span><span class="kwd">super</span><span class="pun">.</span><span class="pln">onCreate</span><span class="pun">(</span><span class="pln">savedInstanceState</span><span class="pun">)</span><span class="pln"><br>&nbsp; &nbsp; binding </span><span class="pun">=</span><span class="pln"> </span><span class="typ">ResultProfileBinding</span><span class="pun">.</span><span class="pln">inflate</span><span class="pun">(</span><span class="pln">layoutInflater</span><span class="pun">)</span><span class="pln"><br>&nbsp; &nbsp; </span><span class="kwd">val</span><span class="pln"> view </span><span class="pun">=</span><span class="pln"> binding</span><span class="pun">.</span><span class="pln">root<br>&nbsp; &nbsp; setContentView</span><span class="pun">(</span><span class="pln">view</span><span class="pun">)</span><span class="pln"><br></span><span class="pun">}</span><span class="pln"><br></span></pre><div class="devsite-code-buttons-container"><button type="button" class="gc-analytics-event material-icons devsite-icon-code-dark devsite-toggle-dark" data-category="Site-Wide Custom Events" data-label="Dark Code Toggle" track-type="exampleCode" track-name="darkCodeToggle" aria-label="Dark code theme" data-title="Dark code theme"></button><button type="button" class="gc-analytics-event material-icons devsite-icon-code-light devsite-toggle-light" data-category="Site-Wide Custom Events" data-label="Light Code Toggle" track-type="exampleCode" track-name="lightCodeToggle" aria-label="Light code theme" data-title="Light code theme"></button><button type="button" class="gc-analytics-event material-icons devsite-icon-copy" data-category="Site-Wide Custom Events" data-label="Click To Copy" track-type="exampleCode" track-name="clickToCopy" aria-label="Copy code sample to clipboard" data-title="Copy code sample to clipboard"></button></div></devsite-code>
</section><section tab="java" role="tabpanel" aria-labelledby="aria-tab-java" tabindex="0" id="tabpanel-java">
<devsite-code><pre class="prettyprint lang-java" translate="no" dir="ltr" is-upgraded="">private ResultProfileBinding binding;

@Override
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    binding = ResultProfileBinding.inflate(getLayoutInflater());
    View view = binding.getRoot();
    setContentView(view);
}
</pre></devsite-code>
</section></devsite-selector>
</div>

<p>You can now use the instance of the binding class to reference any of the views:</p>

<div>
<devsite-selector scope="auto" active="kotlin" ready=""><devsite-tabs role="tablist" connected=""><div class="devsite-tabs-wrapper"><tab role="tab" aria-selected="true" aria-controls="tabpanel-kotlin" tab="kotlin" id="kotlin" active=""><a id="aria-tab-kotlin" role="button" href="#kotlin">Kotlin</a></tab><tab role="tab" aria-selected="false" aria-controls="tabpanel-java" tab="java" id="java"><a id="aria-tab-java" role="button" href="#java">Java</a></tab><tab overflow-tab="" hidden=""><a href="#" class="devsite-icon devsite-icon-arrow-drop-down">More</a><div class="devsite-tabs-overflow-menu" scrollbars="" hidden=""></div></tab></div></devsite-tabs><section tab="kotlin" role="tabpanel" aria-labelledby="aria-tab-kotlin" tabindex="0" id="tabpanel-kotlin" active="">
<devsite-code><pre class="lang-kotlin" translate="no" dir="ltr" is-upgraded=""><span class="pln">binding</span><span class="pun">.</span><span class="pln">name</span><span class="pun">.</span><span class="pln">text </span><span class="pun">=</span><span class="pln"> viewModel</span><span class="pun">.</span><span class="pln">name<br>binding</span><span class="pun">.</span><span class="pln">button</span><span class="pun">.</span><span class="pln">setOnClickListener </span><span class="pun">{</span><span class="pln"> viewModel</span><span class="pun">.</span><span class="pln">userClicked</span><span class="pun">()</span><span class="pln"> </span><span class="pun">}</span><span class="pln"><br></span></pre><div class="devsite-code-buttons-container"><button type="button" class="gc-analytics-event material-icons devsite-icon-code-dark devsite-toggle-dark" data-category="Site-Wide Custom Events" data-label="Dark Code Toggle" track-type="exampleCode" track-name="darkCodeToggle" aria-label="Dark code theme" data-title="Dark code theme"></button><button type="button" class="gc-analytics-event material-icons devsite-icon-code-light devsite-toggle-light" data-category="Site-Wide Custom Events" data-label="Light Code Toggle" track-type="exampleCode" track-name="lightCodeToggle" aria-label="Light code theme" data-title="Light code theme"></button><button type="button" class="gc-analytics-event material-icons devsite-icon-copy" data-category="Site-Wide Custom Events" data-label="Click To Copy" track-type="exampleCode" track-name="clickToCopy" aria-label="Copy code sample to clipboard" data-title="Copy code sample to clipboard"></button></div></devsite-code>
</section><section tab="java" role="tabpanel" aria-labelledby="aria-tab-java" tabindex="0" id="tabpanel-java">
<devsite-code><pre class="prettyprint lang-java" translate="no" dir="ltr" is-upgraded="">binding.getName().setText(viewModel.getName());
binding.button.setOnClickListener(new View.OnClickListener() {
    viewModel.userClicked()
});
</pre></devsite-code>
</section></devsite-selector>
</div>

<h3 id="fragments" data-text="Use view binding in fragments" tabindex="0">Use view binding in fragments</h3>

<p>To set up an instance of the binding class for use with a fragment, perform the
following steps in the fragment's
<a href="/reference/kotlin/androidx/fragment/app/Fragment#oncreateview"><code translate="no" dir="ltr">onCreateView()</code></a>
method:</p>

<ol>
<li>Call the static <code translate="no" dir="ltr">inflate()</code> method included in the generated binding class.
This creates an instance of the binding class for the fragment to use.</li>
<li>Get a reference to the root view by either calling the <code translate="no" dir="ltr">getRoot()</code> method or
using <a href="https://kotlinlang.org/docs/reference/properties.html#declaring-properties">Kotlin property
syntax</a>.</li>
<li>Return the root view from the <code translate="no" dir="ltr">onCreateView()</code> method to make it the active
view on the screen.</li>
</ol>
<aside class="note"><strong>Note:</strong><span> The <code translate="no" dir="ltr">inflate()</code> method requires you to pass in a layout inflater. If the
layout has already been inflated, you can instead call the binding class's
static <code translate="no" dir="ltr">bind()</code> method. To learn more, see <a href="https://github.com/android/architecture-components-samples/blob/master/ViewBindingSample/app/src/main/java/com/android/example/viewbindingsample/BindFragment.kt#L36-L41">an example from the view binding
GitHub
sample</a>.</span></aside>
<div>
<devsite-selector scope="auto" active="kotlin" ready=""><devsite-tabs role="tablist" connected=""><div class="devsite-tabs-wrapper"><tab role="tab" aria-selected="true" aria-controls="tabpanel-kotlin" tab="kotlin" id="kotlin" active=""><a id="aria-tab-kotlin" role="button" href="#kotlin">Kotlin</a></tab><tab role="tab" aria-selected="false" aria-controls="tabpanel-java" tab="java" id="java"><a id="aria-tab-java" role="button" href="#java">Java</a></tab><tab overflow-tab="" hidden=""><a href="#" class="devsite-icon devsite-icon-arrow-drop-down">More</a><div class="devsite-tabs-overflow-menu" scrollbars="" hidden=""></div></tab></div></devsite-tabs><section tab="kotlin" role="tabpanel" aria-labelledby="aria-tab-kotlin" tabindex="0" id="tabpanel-kotlin" active="">
<devsite-code><pre class="lang-kotlin" translate="no" dir="ltr" is-upgraded=""><span class="kwd">private</span><span class="pln"> </span><span class="kwd">var</span><span class="pln"> </span><span class="lit">_</span><span class="pln">binding</span><span class="pun">:</span><span class="pln"> </span><span class="typ">ResultProfileBinding</span><span class="pun">?</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="lit">null</span><span class="pln"><br></span><span class="com">// This property is only valid between onCreateView and</span><span class="pln"><br></span><span class="com">// onDestroyView.</span><span class="pln"><br></span><span class="kwd">private</span><span class="pln"> </span><span class="kwd">val</span><span class="pln"> binding </span><span class="kwd">get</span><span class="pun">()</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="lit">_</span><span class="pln">binding</span><span class="pun">!!</span><span class="pln"><br><br></span><span class="kwd">override</span><span class="pln"> </span><span class="kwd">fun</span><span class="pln"> onCreateView</span><span class="pun">(</span><span class="pln"><br>&nbsp; &nbsp; inflater</span><span class="pun">:</span><span class="pln"> </span><span class="typ">LayoutInflater</span><span class="pun">,</span><span class="pln"><br>&nbsp; &nbsp; container</span><span class="pun">:</span><span class="pln"> </span><span class="typ">ViewGroup</span><span class="pun">?,</span><span class="pln"><br>&nbsp; &nbsp; savedInstanceState</span><span class="pun">:</span><span class="pln"> </span><span class="typ">Bundle</span><span class="pun">?</span><span class="pln"><br></span><span class="pun">):</span><span class="pln"> </span><span class="typ">View</span><span class="pun">?</span><span class="pln"> </span><span class="pun">{</span><span class="pln"><br>&nbsp; &nbsp; </span><span class="lit">_</span><span class="pln">binding </span><span class="pun">=</span><span class="pln"> </span><span class="typ">ResultProfileBinding</span><span class="pun">.</span><span class="pln">inflate</span><span class="pun">(</span><span class="pln">inflater</span><span class="pun">,</span><span class="pln"> container</span><span class="pun">,</span><span class="pln"> </span><span class="lit">false</span><span class="pun">)</span><span class="pln"><br>&nbsp; &nbsp; </span><span class="kwd">val</span><span class="pln"> view </span><span class="pun">=</span><span class="pln"> binding</span><span class="pun">.</span><span class="pln">root<br>&nbsp; &nbsp; </span><span class="kwd">return</span><span class="pln"> view<br></span><span class="pun">}</span><span class="pln"><br><br></span><span class="kwd">override</span><span class="pln"> </span><span class="kwd">fun</span><span class="pln"> onDestroyView</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln"><br>&nbsp; &nbsp; </span><span class="kwd">super</span><span class="pun">.</span><span class="pln">onDestroyView</span><span class="pun">()</span><span class="pln"><br>&nbsp; &nbsp; </span><span class="lit">_</span><span class="pln">binding </span><span class="pun">=</span><span class="pln"> </span><span class="lit">null</span><span class="pln"><br></span><span class="pun">}</span><span class="pln"><br></span></pre><div class="devsite-code-buttons-container"><button type="button" class="gc-analytics-event material-icons devsite-icon-code-dark devsite-toggle-dark" data-category="Site-Wide Custom Events" data-label="Dark Code Toggle" track-type="exampleCode" track-name="darkCodeToggle" aria-label="Dark code theme" data-title="Dark code theme"></button><button type="button" class="gc-analytics-event material-icons devsite-icon-code-light devsite-toggle-light" data-category="Site-Wide Custom Events" data-label="Light Code Toggle" track-type="exampleCode" track-name="lightCodeToggle" aria-label="Light code theme" data-title="Light code theme"></button><button type="button" class="gc-analytics-event material-icons devsite-icon-copy" data-category="Site-Wide Custom Events" data-label="Click To Copy" track-type="exampleCode" track-name="clickToCopy" aria-label="Copy code sample to clipboard" data-title="Copy code sample to clipboard"></button></div></devsite-code>
</section><section tab="java" role="tabpanel" aria-labelledby="aria-tab-java" tabindex="0" id="tabpanel-java">
<devsite-code><pre class="prettyprint lang-java" translate="no" dir="ltr" is-upgraded="">private ResultProfileBinding binding;

@Override
public View onCreateView (LayoutInflater inflater, 
                          ViewGroup container, 
                          Bundle savedInstanceState) {
    binding = ResultProfileBinding.inflate(inflater, container, false);
    View view = binding.getRoot();
    return view;
}

@Override
public void onDestroyView() {
    super.onDestroyView();
    binding = null;
}
</pre></devsite-code>
</section></devsite-selector>
</div>

<p>You can now use the instance of the binding class to reference any of the views:</p>

<div>
<devsite-selector scope="auto" active="kotlin" ready=""><devsite-tabs role="tablist" connected=""><div class="devsite-tabs-wrapper"><tab role="tab" aria-selected="true" aria-controls="tabpanel-kotlin" tab="kotlin" id="kotlin" active=""><a id="aria-tab-kotlin" role="button" href="#kotlin">Kotlin</a></tab><tab role="tab" aria-selected="false" aria-controls="tabpanel-java" tab="java" id="java"><a id="aria-tab-java" role="button" href="#java">Java</a></tab><tab overflow-tab="" hidden=""><a href="#" class="devsite-icon devsite-icon-arrow-drop-down">More</a><div class="devsite-tabs-overflow-menu" scrollbars="" hidden=""></div></tab></div></devsite-tabs><section tab="kotlin" role="tabpanel" aria-labelledby="aria-tab-kotlin" tabindex="0" id="tabpanel-kotlin" active="">
<devsite-code><pre class="lang-kotlin" translate="no" dir="ltr" is-upgraded=""><span class="pln">binding</span><span class="pun">.</span><span class="pln">name</span><span class="pun">.</span><span class="pln">text </span><span class="pun">=</span><span class="pln"> viewModel</span><span class="pun">.</span><span class="pln">name<br>binding</span><span class="pun">.</span><span class="pln">button</span><span class="pun">.</span><span class="pln">setOnClickListener </span><span class="pun">{</span><span class="pln"> viewModel</span><span class="pun">.</span><span class="pln">userClicked</span><span class="pun">()</span><span class="pln"> </span><span class="pun">}</span><span class="pln"><br></span></pre><div class="devsite-code-buttons-container"><button type="button" class="gc-analytics-event material-icons devsite-icon-code-dark devsite-toggle-dark" data-category="Site-Wide Custom Events" data-label="Dark Code Toggle" track-type="exampleCode" track-name="darkCodeToggle" aria-label="Dark code theme" data-title="Dark code theme"></button><button type="button" class="gc-analytics-event material-icons devsite-icon-code-light devsite-toggle-light" data-category="Site-Wide Custom Events" data-label="Light Code Toggle" track-type="exampleCode" track-name="lightCodeToggle" aria-label="Light code theme" data-title="Light code theme"></button><button type="button" class="gc-analytics-event material-icons devsite-icon-copy" data-category="Site-Wide Custom Events" data-label="Click To Copy" track-type="exampleCode" track-name="clickToCopy" aria-label="Copy code sample to clipboard" data-title="Copy code sample to clipboard"></button></div></devsite-code>
</section><section tab="java" role="tabpanel" aria-labelledby="aria-tab-java" tabindex="0" id="tabpanel-java">
<devsite-code><pre class="prettyprint lang-java" translate="no" dir="ltr" is-upgraded="">binding.getName().setText(viewModel.getName());
binding.button.setOnClickListener(new View.OnClickListener() {
    viewModel.userClicked()
});
</pre></devsite-code>
</section></devsite-selector>
</div>
<aside class="note"><strong>Note:</strong><span> Fragments outlive their views. Make sure you clean up any references to
the binding class instance in the fragment's
<a href="/reference/kotlin/androidx/fragment/app/Fragment#ondestroyview"><code translate="no" dir="ltr">onDestroyView()</code></a>
method.</span></aside>
<h2 id="findviewbyid" data-text="Differences from findViewById" tabindex="0">Differences from findViewById</h2>

<p>View binding has important advantages over using <code translate="no" dir="ltr">findViewById</code>:</p>

<ul>
<li><strong>Null safety:</strong> Since view binding creates direct references to views,
there's no risk of a null pointer exception due to an invalid view ID.
Additionally, when a view is only present in some configurations of a layout,
the field containing its reference in the binding class is marked with
<code translate="no" dir="ltr">@Nullable</code>.</li>
<li><strong>Type safety:</strong> The fields in each binding class have types matching the
views they reference in the XML file. This means that there's no risk of a
class cast exception.</li>
</ul>

<p>These differences mean that incompatibilities between your layout and your code
will result in your build failing at compile time rather than at runtime.</p>

<h2 id="data-binding" data-text="Comparison with data binding" tabindex="0">Comparison with data binding</h2>

<p>View binding and <a href="/topic/libraries/data-binding">data binding</a> both generate
binding classes that you can use to reference views directly. However, view
binding is intended to handle simpler use cases and provides the following
benefits over data binding:</p>

<ul>
<li><strong>Faster compilation:</strong> View binding requires no annotation processing, so
compile times are faster.</li>
<li><strong>Ease of use:</strong> View binding does not require specially-tagged XML layout
files, so it is faster to adopt in your apps. Once you enable view binding in
a module, it applies to all of that module's layouts automatically.</li>
</ul>

<p>Conversely, view binding has the following limitations compared to data binding:</p>

<ul>
<li>View binding doesn't support <a href="/topic/libraries/data-binding/expressions">layout variables or layout
expressions</a>, so it can't be used
to declare dynamic UI content straight from XML layout files.</li>
<li>View binding doesn't support <a href="/topic/libraries/data-binding/two-way">two-way data
binding</a>.</li>
</ul>

<p>Because of these considerations, it is best in some cases to use both view
binding and data binding in a project. You can use data binding in layouts that
require advanced features and use view binding in layouts that do not.</p>

          </div>

    
                      <devsite-page-rating position="footer" selected-rating="0" hover-rating-star="0">
    <div><div class="devsite-rating-caption">Was this page helpful?</div><div class="devsite-rating-stars"><div class="devsite-rating-star devsite-rating-star-outline gc-analytics-event material-icons" data-rating-val="1" track-metadata-score="1" track-type="feedback" track-name="rating" track-metadata-position="footer" role="button" tabindex="0" data-title="Unusable documentation" aria-label="Unusable documentation, with a rating of 1 out of 5"></div><div class="devsite-rating-star devsite-rating-star-outline gc-analytics-event material-icons" data-rating-val="2" track-metadata-score="2" track-type="feedback" track-name="rating" track-metadata-position="footer" role="button" tabindex="0" data-title="Poor documentation" aria-label="Poor documentation, with a rating of 2 out of 5"></div><div class="devsite-rating-star devsite-rating-star-outline gc-analytics-event material-icons" data-rating-val="3" track-metadata-score="3" track-type="feedback" track-name="rating" track-metadata-position="footer" role="button" tabindex="0" data-title="OK documentation" aria-label="OK documentation, with a rating of 3 out of 5"></div><div class="devsite-rating-star devsite-rating-star-outline gc-analytics-event material-icons" data-rating-val="4" track-metadata-score="4" track-type="feedback" track-name="rating" track-metadata-position="footer" role="button" tabindex="0" data-title="Good documentation" aria-label="Good documentation, with a rating of 4 out of 5"></div><div class="devsite-rating-star devsite-rating-star-outline gc-analytics-event material-icons" data-rating-val="5" track-metadata-score="5" track-type="feedback" track-name="rating" track-metadata-position="footer" role="button" tabindex="0" data-title="Excellent documentation" aria-label="Excellent documentation, with a rating of 5 out of 5"></div></div></div></devsite-page-rating>
  
                   
          </article>