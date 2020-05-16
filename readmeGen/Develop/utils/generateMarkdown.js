let inlineArr = ["```"];

const generatePreR = preReqText => {
  if (!preReqText) {
    return '';
  }
  return `
  ${inlineArr}
  ${preReqText}
  ${inlineArr}
  `;
};

const generateTest = runTText => {
  if (!runTText) {
    return '';
  }
  return `
  ${inlineArr}
  ${runTText}
  ${inlineArr}
  `;
};

const generateV = versionText => {
  if (!versionText) {
    return '';
  }
  return `
  ## Version
  ${inlineArr}
  ${versionText}
  ${inlineArr}
  `;
};

const generateAck = ackText => {
  if (!ackText) {
    return '';
  }
  return `
  ## Acknowledgments
  ${inlineArr}
  ${ackText}
  ${inlineArr}
  `;
};

const generateLang = langText => {
  if (!langText) {
    return '';
  }
  let str = langText.join(', ');
  return `
  ${inlineArr}
  ${str}
  ${inlineArr}
  `
};

function generateMarkdown(data) {
  return `
  # ${data.title}
  ${data.description}
  ## Getting Started
  Please add the following to run ${data.title}:
  ${generatePreR(data.pre)}
  ## Running Test
  This is how you run the automated tests for this system
  ${generateTest(data.runT)}
  ## This project is build with:
  ${generateLang(data.languages)}
  ## Contributing
  Created by ${data.user} with the help from
  ${data.contr}
  ## GitHub Link
  ${data.link}
  ${generateV(data.version)}
  ${generateAck(data.ack)}

`;
}

module.exports = generateMarkdown;
