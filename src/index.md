---
layout: layouts/default.liquid
title: Mindful Associates | Mindful Flooring
---

<amp-animation id="showAnim" layout="nodisplay">
  <script type="application/json">
    {
      "duration": "200ms",
       "fill": "both",
       "iterations": "1",
       "direction": "alternate",
       "animations": [
         {
           "selector": "#scrollToTopButton",
           "keyframes": [
             { "opacity": "1", "visibility": "visible" }
           ]
         }
       ]
    }
  </script>
</amp-animation>
<amp-animation id="hideAnim" layout="nodisplay">
  <script type="application/json">
    {
     "duration": "200ms",
       "fill": "both",
       "iterations": "1",
       "direction": "alternate",
       "animations": [
         {
           "selector": "#scrollToTopButton",
           "keyframes": [
             { "opacity": "0", "visibility": "hidden" }
           ]
         }
       ]
   }
  </script>
</amp-animation>
<section>
  <h1>
    <a class="target-anchor" id="top"></a>
    {{ siteData.name }}
    <amp-position-observer on="enter:hideAnim.start; exit:showAnim.start" layout="nodisplay"></amp-position-observer>
  </h1>

  <h2>About Us</h2>

  <p>Mike has been flooring and installing floors and servicing floors for 10 years.</p>

  <p [text]="'Thanks, ' + individual +'! You have successfully contacted us.'">
    Contact us
  </p>
  <form method="post" action-xhr="/"  on="submit-success: AMP.setState({ 'individual': event.response.value1 })" target="_blank">
    <input type="text" name="value1" placeholder="Name" required />
    <input type="tel" name="value2" placeholder="Phone Number" required />
    <input type="text" name="value3" placeholder="How can we help you?" />
    <input type="submit" value="Contact Us" />
  </form>
</section>
<div>
  <button id="scrollToTopButton"
    on="tap:top.scrollTo(duration=200)"
    class="scrollToTop">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44.224 44.224"><path d="M22.112 44.224a3 3 0 003-3v-25.66c0-2.761 1.541-3.376 3.443-1.374l7.045 7.419a3.127 3.127 0 002.274.976 3.134 3.134 0 002.273-5.295L24.653.977A3.13 3.13 0 0022.406 0a3.161 3.161 0 00-2.261.938L4.114 17.254a3.135 3.135 0 104.47 4.394l7.024-7.148c1.935-1.97 3.504-1.328 3.504 1.433v25.291a3 3 0 003 3z" fill="#fff"/></svg>
  </button>
</div>