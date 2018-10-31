import { getCollectionSize, addObjectToCollection } from './CollectionProvider';

describe('Started', () => {
    let obj = null;

    beforeAll(() => {
        obj = {
            prop1: 1,
            prop2: '1',
            prop3: true
        }
    })

    test('should connect to firebase and get collection \'col\' size', async () => {
        getCollectionSize('col');        
    })

    test('should connect to firebase and add object to collection \'col\'', async () => {
        addObjectToCollection('col', obj);        
    })
})