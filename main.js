const {Client} = require('@notionhq/client');
require('dotenv').config();
const { execSync } = require('child_process');
const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  });
const database = notion.databases.retrieve({ database_id: process.env.NOTION_DATABASE_ID });
const leetcodeProblems = execSync('leetcode list -q d').toString().trim().split('\n');//gets all solved question with d

// ;(async () =>{const listUsersResponse = await notion.users.list({})
// console.log(listUsersResponse)
// })()

