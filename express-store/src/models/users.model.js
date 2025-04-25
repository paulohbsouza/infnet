//models/	Responsável pelo acesso aos dados (leitura, escrita nos arquivos JSON).

const fs = require('fs/promises'); // File System
const path = require('path');

const filePath = path.join(__dirname, '../data/users.json');

const getUsers = async () => {
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
}

const saveUsers = async (users) => {
    await fs.writeFile(filePath, JSON.stringify(users, null, 2), 'utf8');
}

module.exports = {
    getUsers,
    saveUsers
}