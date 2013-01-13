node-wtr-dev-workflow-example
=============================

A dev workflow example that might help your node.js project grow

Prerequisites
-------------

* node.js
* npm
* git (and a github account or similar shared git repository)


Workflow
--------

1. Create two repositories on github. e.g. 'node-wtr-dev-workflow-example' and 
'node-wtr-dev-workflow-example-module'

The first one is your main project, the second is a module that your main project is 
dependent on, you want to develop in parallel, but maintain on github separately.

2. Make a top level directory to hold both your main project and your module. e.g. 
~/mydevproject/

3. Clone both your repositories into this top level directory:

```bash
git clone git@github.com:aogriffiths/node-wtr-dev-workflow-example.git
git clone git@github.com:aogriffiths/node-wtr-dev-workflow-example-module.git
```
   
 Your should now have working directories something like this:

```bash 
~/mydevproject/node-wtr-dev-workflow-example/
~/mydevproject/node-wtr-dev-workflow-example-module/
```


3. Code them both (e.g. write index.js, README.md, package.json etc)

The module should export something and the main project should require it (otherwise 
why bother!). If you clone this example and the example module they already to that.


4. Make like easier 

```bash
sudo chown -R $USER /usr/local/lib/node_modules/
```

This will mean you don't need to run subsequent npm commands as sudo, which is arguably more
secure than having /usr/local/lib/node_modules/ belong to root.

Link
----

Link to the module from the main project with:

```bash
cd ~/mydevproject/node-wtr-dev-workflow-example
npm link ../node-wtr-dev-workflow-example-module/
```
    
see more at https://npmjs.org/doc/link.html.

   
Run your main project with

    node index.js

And everything should work:

* Your main project should be able to use the method you exported from your module.
* Edits to you module via both '~/mydevproject/node-wtr-dev-workflow-example-module/'
and '~/mydevproject/node-wtr-dev-workflow-example/node_modules/node-wtr-dev-workflow-example-module/'
are editing the same files (so no laborious requirement to edit you module in one place and copy
the edits to the other).
* You can work on the code in your module and your main project simultaneously until they both work
* You can git commit your module any time you want
* There is a gotcha with committing your main project. See below.


Install
-------

Once your module is working well within your main project you should install it. See 
http://www.mikealrogers.com/posts/nodemodules-in-git.html

The way to install the working version of your module is similar to the way you linked it during 
development.

    cd ~/mydevproject/node-wtr-dev-workflow-example
    npm install ../node-wtr-dev-workflow-example-module/

Now you can git commit your main project and anyone cloing or pulling it from there will be able to
run it, as you intended with needing to find the latest version of your working module, which you
may or may not have published to the npm repository and you may or may not have pushed to github.

