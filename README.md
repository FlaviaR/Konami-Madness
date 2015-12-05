# Konami-Madness
<h4>Add secret codes to your website and watch the magic happen</h4>


<b>To Use:</b><br><br>
Add the following div to your website: <br>
<pre><code>&lt;div id = "secretAppend" style = "pointer-events: none; position:fixed; width:100%; height:100%; top:0px; left:0px; z-index:1000;"&gt;
&lt;/div&gt;
</code></pre>

This will create a div that covers your entire screen, allowing the obnoxious images to pop up without overflowing onto other page elements. <br>
<b>NOTE</b>: Alaways make sure to include "pointer-events: none" as this will allow you to continue interacting with your website normally even with a superimposed div.

<br><br>
To define your own code: <br>
<pre><code>&lt;specifyCode(string)&gt;
&lt;/div&gt;
</code></pre> 
<br>
<i>Note that CAPS LOCK is usually preferred for the code. It will work for both lower and upper-case code entries. 
<br><br>
To add an image: <br>
<pre><code>&lt;addImage(imgPath)&gt;
&lt;/div&gt;
</code></pre> 
<br><br>
TO DO: 
 - add different results to inputting different codes

