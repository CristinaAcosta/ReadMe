var marked = require('marked');
var fs = require('fs');
var text = "";

function inputUser(){
const quest = [{
      message: 'Enter project tile.',
      type: 'input',
      name: 'title',
  },
  {
    message:'Enter project description.',
    type: 'input',
    name: 'description',
},
{
    message: 'Enter project installation instructions.',
    type: 'input',
    name: 'install',
},
{
    message: 'Enter project usage information.',
    name: 'usage',
    type: 'input',
},
{
    message: 'Enter project contribution guidelines.',
    name: 'contr',
    type: 'input',
},
{
    message: 'Enter project test instructions',
    name: 'instruct',
    type: 'input',
},
{
message: 'Enter project license.',
    name: 'license',
    type: 'input',
},
{
message: 'Enter Github Username',
    name: 'user',
    type: 'input',
},
{
 message: 'Enter email address',
    name: 'email',
    type: 'input',

},
];

    inq.prompt(quest).then( ans => {
        text += `# ReadMe
        Title: (NPM displays info)
        
        # Table of Contents: (linked table of contents )
        1. [Description](#description)
        2. [Installation](#install)
        3. [Usage](#usage)
        4. [License](#license)
        5. [Contributing](#contr)
        6. [Tests](#tests)
        7. [Questions](#questions)
        
       Description: (NPM displays info)
        <a name="description" ></a>) ${ans.description}
        
        
        ## Installation: (NPM displays info)
        <a name="install" ></a> 
        ${ans.install}
        
        ## Usage: (NPM displays info)
        <a name="usage"></a> ${ans.usage}
        
        ## License: (NPM displays info and adds badge to corner)
        <a name="license"></a> ${ans.license}
        
        ## Contributing:(NPM displays info)
        <a name="contr"></a> ${ans.contr}
        
        ## Tests: (NPM displays info)
        <a name="tests"></a> ${ans.instruct}
        
        ## Questions: (Adds Github Username & adds email w/ additonal questions on how to reach me )
        <a name="questions"></a>  
        - https://github.com/${ans.user} 
        - Email: ${ans.email}
        `;
        fs.writeFile("README.md", text, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
          });
    });
}

inputUser();

