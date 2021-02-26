const inq = require('inquirer');
const fs = require('fs');
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
{
    message: 'Instructions on how to reach out to you?',
       name: 'additional',
       type: 'input',
   
   },
];

    inq.prompt(quest).then( ans => {
        text += `# ReadMe
        #Title:  
        ${ans.title}
        
        # Table of Contents: (linked table of contents )
        1. (Description)[description]
        2. (Installation)[installation]
        3. (Usage)[usage]
        4. (License)[license]
        5. (Contribution)[contribution]
        6. (Tests)[tests]
        7. (Questions)[questions]
        
        ##Description: 
        ${ans.description}
        
        ##Installation: 
        ${ans.install}
        
        ##Usage: 
        ${ans.usage}
        
        ##License: (NPM displays info and adds badge to corner)
        [https://img.shields.io/github/license/<Github-Username>/<Repository>]
        ${ans.license}]
        
        ##Contributing:
        ${ans.contr}
        
        ##Tests: 
        ${ans.instruct}
        
        ##Questions:
        - https://github.com/${ans.user} 
        - For more information contact me at:  ${ans.email}
        - Additional instructions:  ${ans.additional}
        `;
        fs.writeFile("README.md", text, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
          });
    });
}

inputUser();

