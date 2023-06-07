import * as fs from "fs";
import * as path from "path";

interface fileProps  {
    image: string,
    id: string
}

const uploader = ({ image, id }: fileProps) => new Promise((resolve, reject) => {
    const _path = path.resolve(`images/${id}.jpg`);
    var base64Data = image.split(',')[1];
    fs.writeFile(_path, base64Data, 'base64', (err) => {
        if (err) return reject(err);
        resolve(`http://localhost:5500/images/${id}.jpg`);
    })
});

const downloader = (path: string) => new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
        if (err) return reject();
        resolve(data);
    })
});

const deleteFile = (path: string) => new Promise((resolve, reject) => {
    fs.unlink(path, (err) => {
        if (err) return reject(false);
        resolve(true);
    })
});


export { uploader, downloader, deleteFile }