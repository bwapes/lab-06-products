import {  
    getItemsToDelete, 
    createDeleteLine,
    addNewItems
} from './admin-utils.js';

const theForm = document.querySelector('#form');
const deleteTable = document.querySelector('#deleteBody');

theForm.addEventListener('submit', e => {

    e.preventDefault();

    const formDataThing = new FormData(theForm);

    const newItemToAdd = {
        //add form data things
        id: formDataThing.get('id') + 'newItem',
        name: formDataThing.get('name'),
        image: formDataThing.get('image'),
        description: formDataThing.get('description'),
        price: Number(formDataThing.get('price')),
        invAmount: Number(formDataThing.get('invAmount')),
    };

    addNewItems(newItemToAdd);

    // window.location = '../productFolder/productPage.html';
    const deleteItems = getItemsToDelete();
    
    for (let i = 0; i < deleteItems.length; i++) {
        const itemToDelete = deleteItems[i];
        const deleteLine = createDeleteLine(itemToDelete);
        deleteTable.append(deleteLine);
    }

    window.location = '../productFolder/productPage.html';
});

const ItemsToDelete = getItemsToDelete();

for (let i = 0; i < ItemsToDelete.length; i++){
    const item = ItemsToDelete[i];
    const deleteLine = createDeleteLine(item);
    deleteTable.append(deleteLine);
}

