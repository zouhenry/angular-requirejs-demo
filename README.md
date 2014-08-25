Being new to both angular and requirejs (coming from Backbone/Marionette). When I first started working with angular and requirejs, I spent way too much time trying to figure out why the application was throwing errors.

Now having successfully troubleshooted this issue; hopefully this application will help others out.

The main trick is to not include "ng-app" directive in the HTML page itself when there are other directives requiring dynamically loaded javascript files.


