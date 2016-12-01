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

It tries to import the bundle through [SystemJs](https://github.com/systemjs/systemjs).

If the dllplugin bundle was correct, you should answer to 2 alerts, but, for the second, you get an error in the console.
