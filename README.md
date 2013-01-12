node-wtr-dev-workflow-example
=============================

A dev workflow example that might help your node.js project grow

Prerequisites
=========
* node.js
* npm
* git (and a github account or similar shared git repository)


Workflow
=======
1. Create two repositories on github. e.g. 'node-wtr-dev-workflow-example' and 
'node-wtr-dev-workflow-example-module'

The first one is your main project, the second is a module that your main project is 
dependent on, you want to develop in parallel, but maintain on github separately.

2. Make a top level directory to hold both your main project and your module. e.g. 
~/mydevproject/

3. Clone both your repositories into this top level directory:

   git clone git@github.com:aogriffiths/node-wtr-dev-workflow-example.git
   git clone git@github.com:aogriffiths/node-wtr-dev-workflow-example-module.git
   
 Your should now have working directories somthing like this:
 
~/mydevproject/node-wtr-dev-workflow-example/
~/mydevproject/node-wtr-dev-workflow-example-module/


3. Write the code for them both (e.g. index.js, README.md, package.json etc)

Your module should export something and your main project could require your module and 
use something that your modules exports (otherwise why bother!).

4. Link your main project to your module. 

In your top level directory run:

    cd ~/mydevproject
    sudo npm link 

5. Run your main project

e.g.

   cd ~/mydevproject/node-wtr-dev-workflow-example/
   node index.js

And everything should work:

* Your main project should be able to use the method you exported from your module.
* Edits to you module via both '~/mydevproject/node-wtr-dev-workflow-example-module/'
and '~/mydevproject/node-wtr-dev-workflow-example/node_modules/node-wtr-dev-workflow-example-module/'
are editing the same files (so no labourious requirement to edit you module in one place and copy
the edits to the other).
* You can git commit either project to keep control of the source.

But what happens when it comes to production deployment?
