# Konami-Madness
<h4>Add secret codes to your website and watch the magic happen</h4>

This code was initially added to flavulous.com and is still under development.

For best results, add the following div to your html page:
<pre><code>&lt;div id = "secretAppend" style = "pointer-events: none; position:fixed; width:100%; height:100%; top:0px; left:0px; z-index:1000;"&gt;
&lt;/div&gt;
</code></pre>

This will create a div that covers your entire screen, allowing the obnoxious images to pop up without overflowing onto other page elements.
<b>NOTE</b>: Alaways make sure to include "pointer-events: none" as this will allow you to continue interacting with your website normally even with a superimposed div.

TO DO: 
 - fix position generation of each div (reduce overflow out of screen)
 - add animations
 - add different results to inputting different codes

