// function to generate markdown for README
// ${data 
//   .map(({ title, description, preReq, runT, languages, contr, link, version, ack }))}

// const usesNode = nodeUse => {
//   if(!node) {
//     return '';
//   }
//   return `
//   !-- This project uses Node.js --!
//   `;
// };

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

function generateMarkdown(data) {
  return `
  # ${data.title}
  ${data.description}
  ## Getting Started
  Please add the following to run the ${data.title}:
  ${generatePreR(data.pre)}

`;
}

module.exports = generateMarkdown;
