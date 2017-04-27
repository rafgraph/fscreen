# React Dev Opa

[Live hello world](http://react-dev-opa.rafrex.com)

Boilerplate for a react one page app hosted on github pages (or for local development).  

One page means no path in the url and no `react-router`, so no need for the [`spa-github-pages`](https://github.com/rafrex/spa-github-pages) redirect scripts.

### Boilerplate includes
- `react` and `react-dom`
- `babel` and `webpack` setup for using React and latest JS spec plus stage-1
- `eslint` setup with airbnb config

### Installation
- `$ git clone` and `$ npm install`
- To use with github pages, change the git remote to your repository, and update the `CNAME` file with your custom domain (or delete the `CNAME` file if you're not using a custom domain).
- For detailed info on using GitHub Pages with SPAs see [Single Page Apps for GitHub Pages](https://github.com/rafrex/spa-github-pages).

### Development
- `$ npm start` runs `webpack-dev-server` and is available on port `8080`.

### Production
- `$ webpack -p` creates a minified `bundle.js` file for production, and then `$ git commit` and `$ git push` to make your changes live.
