import { toast } from "react-toastify";

const getStoredReadList = () =>{
    const storedListStr = localStorage.getItem('read-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }
}
const AddToStoredReadList = (id) =>{
    const storedList = getStoredReadList();
    if(storedList?.includes(id)){
        console.log(id, 'already exists in the readList')
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
        toast('This book added to your read list')
    }
}
export { AddToStoredReadList, getStoredReadList }