<!DOCTYPE HTML>
 
<html lang="en">
    <head>

 
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta http-equiv="Content-Style-Type" content="text/css">
        <meta http-equiv="Content-Script-Type" content="text/javascript">
 
    
 
        <script src="javascript/jquery-1.1.3.1.pack.js" type="text/javascript"></script>
        <script src="javascript/jquery.history_remote.pack.js" type="text/javascript"></script>
        <script src="javascript/jquery.tabs.pack.js" type="text/javascript"></script>
         
 
        <link rel="stylesheet" href="css/jquery.tabs.css" type="text/css" media="print, projection, screen">
        <!-- Additional IE/Win specific style sheet (Conditional Comments) -->
        <!--[if lte IE 7]>
        <link rel="stylesheet" href="jquery.tabs-ie.css" type="text/css" media="projection, screen">
        <![endif]-->
        <style type="text/css" media="screen, projection">
 
            /* Not required for Tabs, just to make this demo look better... */
 
            body {
                font-size: 16px; /* @ EOMB */
            }
            * html body {
                font-size: 100%; /* @ IE */
            }
            body * {
                font-size: 87.5%;
                font-family: "Trebuchet MS", Trebuchet, Verdana, Helvetica, Arial, sans-serif;
            }
            body * * {
                font-size: 100%;
            }
            h1 {
                margin: 1em 0 1.5em;
                font-size: 18px;
            }
            h2 {
                margin: 2em 0 1.5em;
                font-size: 16px;
            }
            p {
                margin: 0;
            }
            pre, pre+p, p+p {
                margin: 1em 0 0;
            }
            code {
                font-family: "Courier New", Courier, monospace;
            }
        </style>
    </head>
    <body>
         
        <h2>Slide and Fade Effect Combined</h2>
 
        <div id="container-5">
            <ul>
                <li><a href="#fragment-13"><span>One</span></a></li>
                <li><a href="#fragment-14"><span>Two</span></a></li>
                <li><a href="#fragment-15"><span>Three</span></a></li>
            </ul>
            <div id="fragment-13">
                <p>Use a combined slide and fade effect to switch tabs:</p>
                <pre><code>$(&#039;#container&#039;).tabs({ fxSlide: true, fxFade: true, fxSpeed: 'fast' });</code></pre>
            </div>
            <div id="fragment-14">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </div>
            <div id="fragment-15">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </div>
        </div>
 
<script type="text/javascript">
            $(function() {
              $('#container-5').tabs({ fxSlide: true, fxFade: true, fxSpeed: 'normal' });
            });
        </script>
    </body>
</html>
