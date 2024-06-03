const {Client} = require('@notionhq/client');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

dotenv.config();

const notionClient = new Client({ auth: process.env.NOTION_KEY });
const templatePath = path.join(__dirname, 'viewTemplates/scheduleButtonPageTemplate.html');
const variableName = '{USER_ID}';

async function getNotionWorkspaceUserIds() {
    const allUsers = await notionClient.users.list({});
    const sortedUsers = allUsers.results.filter((user) =>  {
        return user.type === 'person';
    });

    sortedUsers.forEach(user => console.log(user.name, user.id))

    return sortedUsers.map(user => user.id);
}


async function createButtonsPageFromTemplate() {
    const ids = await getNotionWorkspaceUserIds();

    ids.forEach(id => {
        copyTemplate(templatePath, `${__dirname}/${id}.html`, variableName, id)
    })
}

function copyTemplate(templatePath, newFilePath, variableName, newValue) {
    fs.readFile(templatePath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading the template file: ${err}`);
            return;
        }

        const modifiedData = data.replace(new RegExp(variableName, 'g'), newValue);

        fs.writeFile(newFilePath, modifiedData, (err) => {
            if (err) {
                console.error(`Error writing the new file: ${err}`);
                return;
            }
            console.log(`File has been copied and modified successfully: ${newFilePath}`);
        });
    });
}

createButtonsPageFromTemplate()
.then(() => {
    console.log('Done');
})
.catch((err) => {
    console.log(err)
});