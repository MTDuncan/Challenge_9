// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}// Function to return a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }

  switch (license.toLowerCase()) {
    case "apache":
      return "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
    case "mit":
      return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
    case "gnu":
      return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
    default:
      return "";
  }
}

// Function to return the license link
function renderLicenseLink(license) {
  if (!license) {
    return "";
  }

  switch (license.toLowerCase()) {
    case "apache":
      return "https://opensource.org/licenses/Apache-2.0";
    case "mit":
      return "https://opensource.org/licenses/MIT";
    case "gnu":
      return "https://www.gnu.org/licenses/gpl-3.0";
    default:
      return "";
  }
}

// Function to return the license section of README
function renderLicenseSection(license) {
  if (!license) {
    return "";
  }

  return `
## License
This project is licensed under the [${license} license](${renderLicenseLink(license)}).
  `;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions about the project, please contact me via email at ${data.email}. You can also find more of my work at [${data.github}](https://github.com/${data.github}/).
`;
}

module.exports = generateMarkdown;


module.exports = generateMarkdown;
