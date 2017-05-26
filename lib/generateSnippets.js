'use babel';

import Mustache from 'mustache';
import path from 'path';
import fs from 'fs';

const generateSnippets = () => {
  const templateData = fs.readdirSync(path.resolve(__dirname, 'templates')).forEach(
    file => {
      generateSnippet(
        path.resolve(__dirname, `templates/${file}`),
        path.resolve(__dirname, `../snippets/${file}`)
      );
    }
  );
}

const generateSnippet = (templateFile, outputFile) => {
  const templateData = fs.readFileSync(templateFile, 'utf-8');
  const templateVariables = collectTemplateVariables();
  const output = Mustache.render(templateData, templateVariables);

  fs.writeFile(outputFile, output);
}

const collectTemplateVariables = () => {
  const variables = {};
  if (atom.config.get('atom-jest-snippets.toggleSemicolons')) {
    variables.expressionTerminator = ';';
  } else {
    variables.expressionTerminator = '';
  }

  return variables;
}

export default generateSnippets;