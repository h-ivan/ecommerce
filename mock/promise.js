import db from "./db.json";

export function getItems() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(db);
        }, 500);
    });
}
