const cliSelect = require('cli-select');
const licenseNames = require('license');
 
cliSelect({
    values: ['MIC', 'Boot', 'git'],
    valueRenderer: (value, selected) => {
        if (selected) {
            return licenseNames.underline(value);
        }
 
        return value;
    },