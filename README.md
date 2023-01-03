# How to develop and build the website

## How to do development

To develop the webpage, go to the folder `react-site/`.
Then, run `npm` to spin up a development version of the site.

```bash
cd react-site/
npm start
```

Update the webpage and see live changes.

## How to build the finalized website

### 1. Manual

To update/change the page, go to the folder `react-site/`.

When you are ready, build the webpage with the following commands:

```bash
cd react-site/
npm run build
```

Then, copy the `index.html` file, the `manifest.json` file, the `resources/`, and the `static/` folder from the `react-site/build/` folder to the project root folder.
Finally, git push and pull.

### 2. Automatic

Go to the root folder and run the `compile.sh` file.

```bash
./compile.sh
```
