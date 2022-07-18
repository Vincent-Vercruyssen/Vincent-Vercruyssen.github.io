# How to develop and build the website

## How to do development

To develop the webpage, go to the folder `react-page/`.
Then, run `npm` to spin up a development version of the site.

```bash
cd react-page/
npm start
```

Update the webpage and see live changes.

## How to build the finalized website

To update/change the page, go to the folder `react-page/`.

When you are ready, build the webpage with the following commands:

```bash
cd react-page/
npm run build
```

Then, copy the `index.html` file, the `manifest.json` file, and the `static/` folder from the `react-page/build/` folder to the project root folder.
Finally, git push and pull.
