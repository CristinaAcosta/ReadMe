const inq = require('inquirer');
const fs = require('fs');
var text = "";
const quest = [{
      message: 'Enter project tile.',
      name: 'title',
      type: 'input',
  },
  {
    message:'Enter project description.',
    name: 'description',
    type: 'input',
},
{
    message: 'Enter project installation instructions.',
    name: 'install',
    type: 'input',
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
    text += `<#ReadMe>
    Title: ${ans.title}
    
    Description: ${ans.description}
    
    Table of Contents: 
    
    Installation: ${ans.install}
    
    Usage: ${ans.usage}
    
    License: ${ans.license}
    
    Contributing: ${ans.contr}
    
    Tests: ${ans.instruct}
    
    Questions: ${ans.user} ${ans.email}

    `;
    fs.writeFile("README.md", text, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
});

init();

const userName = questions.userName

axios.get(`https://api.github.com/users/${userName}`)
.then(questions => {
  console.log(questions.data);
});
