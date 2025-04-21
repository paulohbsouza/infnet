//models/	Responsável pelo acesso aos dados (leitura, escrita nos arquivos JSON).

const fs = require('fs/promises'); // File System
const path = require('path');

const filePath = path.join(__dirname, '../data/users.json');

const getUsers = async () => {
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
}

module.exports = {
    getUsers,
}