// TODO: Create a function to generate markdown for README
function generateMarkdown(readmeData) {
  return `
  <h1 align="center">
    ${readmeData.projectTitle}
    <img src="https://img.shields.io/badge/license-${readmeData.projectLicense}-brightgreen"/>
  </h1>

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributors](#Contributors)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Description
  ${readmeData.projectDecription}

  ## Installation
  ${readmeData.projectInstallation}

  ## Usage
  ${readmeData.projectUsage}

  ## License
  ![badge](https://img.shields.io/badge/license-${readmeData.projectLicense}-brightgreen)<br />
  This application is covered by the ${readmeData.projectLicense} license. 

  ## Contributors
  ${readmeData.projectContributors}

  ## Tests
  ${readmeData.projectTest}

  ## Questions
  Find me on GitHub: [${readmeData.userName}](https://github.com/${readmeData.userName})<br />
  Email me with any questions: ${readmeData.userEmail}<br />
  _This README was generated with by a [readme-generator](https://github.com/${readmeData.userName}/readme-generator)_
`;
}

module.exports = generateMarkdown;