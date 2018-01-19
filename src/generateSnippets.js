'use babel';

var Mustache = require('mustache');
var path = require('path');
var fs = require('fs');

const generateSnippets = (semi) => {
  const templateData = fs.readdirSync(path.resolve(__dirname, 'templates')).forEach(
    file => {
      generateSnippet(
        path.resolve(__dirname, `templates/${file}`),
        path.resolve(__dirname, `../snippets/${file}`),
        semi
      );
    }
  );
}

const generateSnippet = (templateFile, outputFile, semi) => {
  const templateData = fs.readFileSync(templateFile, 'utf-8');
  const templateVariables = collectTemplateVariables(semi);
  const output = Mustache.render(templateData, templateVariables);

  fs.writeFile(outputFile, output, () => {});
}

const collectTemplateVariables = (semi) => {
  return {
    docsURL: "https://facebook.github.io/jest/docs",
    expressionTerminator: semi ? ';' : '',
    label: "<span style='color:#99424f'>Jest</span>"
  };
}

module.exports = generateSnippets;