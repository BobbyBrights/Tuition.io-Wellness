{"template":"component.html","title":"Checkbox","demo":"<h4>Basic</h4>\r\n\r\n<!-- START: FIRSTDEMO -->\r\n\r\n<div class=\"demo_container\">\r\n  <div class=\"demo_example\">\r\n    <div class=\"fs-row\">\r\n      <div class=\"fs-cell fs-sm-half fs-md-half fs-lg-third\">\r\n        <form action=\"#\" method=\"GET\" class=\"form demo_form\">\r\n          <fieldset class=\"form_fieldset\">\r\n            <input type=\"checkbox\" value=\"1\" id=\"checkbox-1\" name=\"checkbox-1\" checked>\r\n            <label for=\"checkbox-1\">One</label>\r\n          </fieldset>\r\n          <fieldset class=\"form_fieldset\">\r\n            <label for=\"checkbox-2\">\r\n              <input type=\"checkbox\" value=\"2\" id=\"checkbox-2\" name=\"checkbox-2\"> Two\r\n            </label>\r\n          </fieldset>\r\n          <fieldset class=\"form_fieldset\">\r\n            <input type=\"checkbox\" value=\"3\" id=\"checkbox-3\" name=\"checkbox-3\" disabled>\r\n            <label for=\"checkbox-3\">Three</label>\r\n          </fieldset>\r\n          <fieldset class=\"form_fieldset\">\r\n            <label>\r\n              <span>\r\n                <input type=\"checkbox\" value=\"4\" id=\"checkbox-4\" name=\"checkbox-4\"> Four\r\n              </span>\r\n            </label>\r\n          </fieldset>\r\n        </form>\r\n      </div>\r\n      <div class=\"fs-cell fs-sm-half fs-md-half fs-lg-third\">\r\n        <form action=\"#\" method=\"GET\" class=\"form demo_form\">\r\n          <fieldset class=\"form_fieldset\">\r\n            <input type=\"radio\" value=\"1\" id=\"radio-1\" name=\"radio-group\" checked>\r\n            <label for=\"radio-1\">One</label>\r\n          </fieldset>\r\n          <fieldset class=\"form_fieldset\">\r\n            <label for=\"radio-2\">\r\n              <input type=\"radio\" value=\"2\" id=\"radio-2\" name=\"radio-group\"> Two\r\n            </label>\r\n          </fieldset>\r\n          <fieldset class=\"form_fieldset\">\r\n            <input type=\"radio\" value=\"3\" id=\"radio-3\" name=\"radio-group\" disabled>\r\n            <label for=\"radio-3\">Three</label>\r\n          </fieldset>\r\n          <fieldset class=\"form_fieldset\">\r\n            <label>\r\n              <span>\r\n                <input type=\"radio\" value=\"4\" id=\"radio-4\" name=\"radio-group\"> Four!\r\n              </span>\r\n            </label>\r\n          </fieldset>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"demo_code\">\r\n    <pre><code class=\"language-html\">&lt;input type=&quot;checkbox&quot; value=&quot;1&quot; id=&quot;checkbox&quot; name=&quot;checkbox&quot;&gt;\r\n&lt;label for=&quot;checkbox&quot;&gt;Checkbox&lt;/label&gt;\r\n\r\n&lt;input type=&quot;radio&quot; value=&quot;1&quot; id=&quot;radio&quot; name=&quot;radio&quot;&gt;\r\n&lt;label for=&quot;radio&quot;&gt;Radio&lt;/label&gt;</code></pre>\r\n    <pre><code class=\"language-javascript\">$(\"input[type='checkbox'], input[type='radio']\").checkbox();</code></pre>\r\n  </div>\r\n</div>\r\n\r\n<!-- END: FIRSTDEMO -->\r\n\r\n<h4>Toggle</h4>\r\n<div class=\"demo_container\">\r\n  <div class=\"demo_example\">\r\n    <div class=\"fs-row\">\r\n      <div class=\"fs-cell fs-sm-half fs-md-half fs-lg-third\">\r\n        <form action=\"#\" method=\"GET\" class=\"form demo_form\">\r\n          <fieldset class=\"form_fieldset\">\r\n            <input type=\"checkbox\" value=\"One\" id=\"toggle-1\" name=\"toggle-1\" checked data-checkbox-options='{\"toggle\":true}'>\r\n            <label for=\"toggle-1\">One</label>\r\n          </fieldset>\r\n        </form>\r\n      </div>\r\n      <div class=\"fs-cell fs-sm-half fs-md-half fs-lg-third\">\r\n        <form action=\"#\" method=\"GET\" class=\"form demo_form\">\r\n          <fieldset class=\"form_fieldset\">\r\n            <input type=\"checkbox\" value=\"Two\" id=\"toggle-2\" name=\"toggle-2\" disabled data-checkbox-options='{\"toggle\":true}'>\r\n            <label for=\"toggle-2\">Two</label>\r\n          </fieldset>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"demo_code\">\r\n    <pre><code class=\"language-html\">&lt;input type=&quot;checkbox&quot; value=&quot;1&quot; id=&quot;checkbox&quot; name=&quot;checkbox&quot;&gt;\r\n&lt;label for=&quot;checkbox&quot;&gt;Checkbox&lt;/label&gt;</code></pre>\r\n    <pre><code class=\"language-javascript\">$(\"input[type='checkbox']\").checkbox({\r\n  toggle: true\r\n});</code></pre>\r\n  </div>\r\n</div>\r\n\r\n<h4>No Theme</h4>\r\n<div class=\"demo_container\">\r\n  <div class=\"demo_example\">\r\n    <div class=\"fs-row\">\r\n      <div class=\"fs-cell fs-sm-half fs-md-half fs-lg-third\">\r\n        <form action=\"#\" method=\"GET\" class=\"form demo_form\">\r\n          <fieldset class=\"form_fieldset\">\r\n            <input type=\"checkbox\" value=\"1\" id=\"checkbox-plain-1\" name=\"checkbox-plain-1\" checked data-checkbox-options='{\"theme\":\"\"}'>\r\n            <label for=\"checkbox-plain-1\">One</label>\r\n          </fieldset>\r\n          <fieldset class=\"form_fieldset\">\r\n            <label for=\"checkbox-plain-2\">\r\n              <input type=\"checkbox\" value=\"2\" id=\"checkbox-plain-2\" name=\"checkbox-plain-2\" data-checkbox-options='{\"theme\":\"\"}'> Two\r\n            </label>\r\n          </fieldset>\r\n          <fieldset class=\"form_fieldset\">\r\n            <input type=\"checkbox\" value=\"3\" id=\"checkbox-plain-3\" name=\"checkbox-plain-3\" disabled data-checkbox-options='{\"theme\":\"\"}'>\r\n            <label for=\"checkbox-plain-3\">Three</label>\r\n          </fieldset>\r\n          <fieldset class=\"form_fieldset\">\r\n            <label>\r\n              <span>\r\n                <input type=\"checkbox\" value=\"4\" id=\"checkbox-plain-4\" name=\"checkbox-plain-4\" data-checkbox-options='{\"theme\":\"\"}'> Four\r\n              </span>\r\n            </label>\r\n          </fieldset>\r\n        </form>\r\n      </div>\r\n      <div class=\"fs-cell fs-sm-half fs-md-half fs-lg-third\">\r\n        <form action=\"#\" method=\"GET\" class=\"form demo_form\">\r\n          <fieldset class=\"form_fieldset\">\r\n            <input type=\"radio\" value=\"1\" id=\"radio-plain-1\" name=\"radio-plain-group\" checked data-checkbox-options='{\"theme\":\"\"}'>\r\n            <label for=\"radio-plain-1\">One</label>\r\n          </fieldset>\r\n          <fieldset class=\"form_fieldset\">\r\n            <label for=\"radio-plain-2\">\r\n              <input type=\"radio\" value=\"2\" id=\"radio-plain-2\" name=\"radio-plain-group\" data-checkbox-options='{\"theme\":\"\"}'> Two\r\n            </label>\r\n          </fieldset>\r\n          <fieldset class=\"form_fieldset\">\r\n            <input type=\"radio\" value=\"3\" id=\"radio-plain-3\" name=\"radio-plain-group\" disabled data-checkbox-options='{\"theme\":\"\"}'>\r\n            <label for=\"radio-plain-3\">Three</label>\r\n          </fieldset>\r\n          <fieldset class=\"form_fieldset\">\r\n            <label>\r\n              <span>\r\n                <input type=\"radio\" value=\"4\" id=\"radio-plain-4\" name=\"radio-plain-group\" data-checkbox-options='{\"theme\":\"\"}'> Four!\r\n              </span>\r\n            </label>\r\n          </fieldset>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"demo_code\">\r\n    <pre><code class=\"language-html\">&lt;input type=&quot;checkbox&quot; value=&quot;1&quot; id=&quot;checkbox&quot; name=&quot;checkbox&quot;&gt;\r\n&lt;label for=&quot;checkbox&quot;&gt;Checkbox&lt;/label&gt;\r\n\r\n&lt;input type=&quot;radio&quot; value=&quot;1&quot; id=&quot;radio&quot; name=&quot;radio&quot;&gt;\r\n&lt;label for=&quot;radio&quot;&gt;Radio&lt;/label&gt;</code></pre>\r\n    <pre><code class=\"language-javascript\">$(\"input[type='checkbox'], input[type='radio']\").checkbox({\r\n  theme: \"\"\r\n});</code></pre>\r\n  </div>\r\n</div>\r\n","asset_root":"../","year":2017}

 #Checkbox Demo
<p class="back_link"><a href="https://formstone.it/components/checkbox">View Documentation</a></p>