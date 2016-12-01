# Webpack requiring Dll name

A project to show how I would like to use the Dll name with the DllReferencePlugin

## How to use

Install the dependencies :

```
$ npm install
```

To bundle the dllplugin version :

```
$ npm run build:dllplugin
```

To bundle the dllreferenceplugin version :

```
$ npm run build:dllreferenceplugin
```

This will fail because it does not know the custom library name.

## Try it in a browser

Access to the file ```example/index.html``` through a webserver.

If the bundle was correct, you should see a dialog.
