import app from "./firebaseConfig"
import { getDatabase, ref, set, onValue, push } from "firebase/database";
const database = getDatabase();
let sendData = (obj, node, id) => {
    let postListRef;
    return new Promise((resolve, reject) => {
        if (id) {
            postListRef = ref(database, `${node}/${id}`);
        } else {
            let addRef = ref(database, node);
            obj.id = push(addRef).key;
            postListRef = ref(database, `${node}/${obj.id}`);
        }
        set(postListRef, obj)
            .then((res) => {
                resolve(`Data send to this node ${node}/${obj.id} successfully.`);
            })
            .catch((err) => {
                reject("Failed to end data");
            });
    });
};
let getData = (node, userId) => {
    let dbReference = ref(database, `${node}/${userId ? userId : ""}`);
    return new Promise((resolve, reject) => {
        onValue(
            dbReference,
            (data) => {
                if (data.exists()) {
                    let userData = data.val();
                    if (userId) {
                        // return
                        resolve(userData);
                    } else {
                        let dataArr = Object.values(userData);
                        resolve(dataArr);
                    }
                } else {
                    reject("Data not found");
                }
            },
            {
                onlyOnce: false,
            }
        );
    });
};
export{sendData,getData}
