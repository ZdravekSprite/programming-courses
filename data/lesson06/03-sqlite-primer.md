---
path: "/lesson06/03-sqlite-primer"
title: "SQLite Primer"
---

<p>This course assumes that you are familiar with databases in general, SQL databases in particular, and the SQL language used to interact with them. </p>
<p>This page is a refresher and quick reference.</p>

<p><strong>SQL databases</strong></p>
<p>SQL databases store data in tables of rows and columns:</p>
<ul>
<li>The intersection of a row and column is called a field.</li>
<li>Fields contain data, references to other fields, or references to other tables.</li>
<li>Each row contains one entity identified by a unique ID, which is usually used as its primary key.</li>
<li>Each column is identified by a name that is unique per table.</li>
</ul>

<p><strong>SQLite</strong></p>
<p>SQLite implements an SQL database engine that has the following characteristics:</p>
<ul>
<li>Self-contained (requires no other components)</li>
<li>Serverless (requires no server backend)</li>
<li>Zero-configuration (does not need to be configured for your app)</li>
<li>Transactional (changes within a single transaction in SQLite either occur completely or not at all)</li>
</ul>
<p>SQLite is the most widely deployed database engine in the world. The source code for SQLite is in the public domain. For details of the SQLite database, see the <a target="_blank" href="https://www.sqlite.org">SQLite website</a>.</p>

<p><strong>Example table</strong></p>

<ul>
<li>A database named <code>DATABASE_NAME</code></li>
<li>A table named <code>WORD_LIST_TABLE</code></li>
<li>Columns for <code>_id</code>, <code>word</code>, and  <code>definition</code></li>
<li>After inserting the words <code>alpha</code> and <code>beta</code>, where <code>alpha</code> has two definitions, the table might look like this:</li>
</ul>

<p>DATABASE_NAME &gt; WORD_LIST_TABLE                  </p>

<table>
<thead>
<tr>
<th>_id</th>
<th style="text-align:left">Word</th>
<th style="text-align:left">Definition</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td style="text-align:left">"alpha"</td>
<td style="text-align:left">"first letter"</td>
</tr>
<tr>
<td>2</td>
<td style="text-align:left">"beta"</td>
<td style="text-align:left">"second letter"</td>
</tr>
<tr>
<td>3</td>
<td style="text-align:left">"alpha"</td>
<td style="text-align:left">"particle"</td>
</tr>
</tbody>
</table>

<p>You can find what's in a specific row using the <code>_id</code>, or you can retrieve rows by formulating queries that select rows from the table by specifying constraints.</p>

<p><strong>Query language</strong></p>

<p>You use the SQL query language to interact with the database.
Queries can be very complex, but there are four basic operations:</p>
<ul>
<li>Inserting rows</li>
<li>Deleting rows</li>
<li>Updating values in rows</li>
<li>Retrieving rows that meet given criteria</li>
</ul>
<p>On Android, the data access object (DAO) provides convenience methods for inserting, deleting, and updating the database. </p>
<p><a target="_blank" href="https://www.sqlite.org/lang.html">Full description of the query language</a></p>

<p><strong>Query structure</strong></p>

<p>An SQL query is highly structured and here is an example: </p>
<p><code>SELECT word, definition FROM WORD_LIST_TABLE WHERE word="alpha"</code></p>
<p>Here is the generic version of the sample query:</p>
<p><code>SELECT columns FROM table WHERE column="value"</code></p>
<p>Parts of a query:</p>
<ul>
<li><code>SELECT</code> columns: Select the columns to return. Use * to return all columns.</li>
<li><code>FROM</code> table: Specify the table from which to get results.</li>
<li><code>WHERE</code>: Optional keyword that precedes conditions that have to be met, for example <code>column="value"</code>. Common operators are <code>=</code>, <code>*</code>, <code>LIKE</code>, <code>&lt;</code>, and <code>&gt;</code>. To connect multiple conditions, use  <code>AND</code> or <code>OR</code>.</li>
</ul>
<p>Also:</p>
<ul>
<li><code>ORDER BY</code>: Optional key phrase for ordering results by the specified column. Specify <code>ASC</code> for ascending and <code>DESC</code> for descending. If you don't specify an order, you will get the default order, which may be unordered.</li>
<li><code>LIMIT</code>: Keyword to specify a limited number of results. </li>
</ul>
<p><strong>Sample queries and results</strong></p>
<p>The following queries use the previously defined table <code>WORD_LIST_TABLE</code>.</p>

<table>
<thead>
<tr>
<th>Query</th>
<th>Result</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>SELECT * FROM WORD_LIST_TABLE</code></td>
<td>Gets all the rows in <code>WORD_LIST_TABLE</code> table.</td>
</tr>
<tr>
<td><code>SELECT word, definition FROM WORD_LIST_TABLE WHERE _id &gt; 2</code></td>
<td>Selects the word and definition columns of all items with an id greater than 2.  Returns<code>[["alpha", "particle"]]</code></td>
</tr>
<tr>
<td><code>SELECT _id FROM WORD_LIST_TABLE WHERE word="alpha" AND definition LIKE "%art%"</code></td>
<td>Returns the id of the word alpha with the substring art in the definition. <code>[["3"]]</code></td>
</tr>
<tr>
<td><code>SELECT definition FROM WORD_LIST_TABLE ORDER BY word DESC LIMIT 1</code></td>
<td>Selects all definitions. Sorts in reverse and gets the first row after the list is sorted. Sorting is by the column specified which is word. Note that we can sort by a column that we don't return!  <code>[["second letter"]]</code></td>
</tr>
<tr>
<td><code>SELECT * FROM WORD_LIST_TABLE LIMIT 2,1</code></td>
<td>Returns 1 item starting at position 2. Position counting starts at 1 (not zero!). Returns <code>[["2", "beta", "second letter"]]</code></td>
</tr>
</tbody>
</table>

<p>Reference Documentation</p>

<ul>
<li><p><a target="_blank" href="https://www.sqlite.org">SQLite website</a></p>
</li>
<li><p><a target="_blank" href="https://www.sqlite.org/lang.html">Full description of SQL as understood by SQLite</a></p>
</li>
<li><p><a target="_blank" href="https://developer.android.com/reference/android/database/sqlite/SQLiteDatabase">SQLiteDatabase class</a></p>
</li>
</ul>
