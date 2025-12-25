import fs from "fs/promises"

export async function readFileFS(path) {
    try {
        const reader = await fs.readFile(path, 'utf-8')
        const data = await JSON.parse(reader)
        return data
    } catch (err) {
        console.error(err);
        return []
    }
}

export async function writeFileFS(path, data) {
    try {
        await fs.writeFile(path, JSON.stringify(data, null, 2))
    } catch (err) {
        console.error(err);
    }
}