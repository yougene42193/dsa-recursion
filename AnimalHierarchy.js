//input: array of objects of an id and parent
//output: object of the parent and object of ids
//input recursion: current id then becomes parent of object
//output recursion: a tree of nested objects

const animalHierarchy = [
    {id: 'Animals', parent: null},
    {id: 'Mammals', parent: 'Animals'},
    {id: 'Dogs', parent:'Mammals' },
    {id: 'Cats', parent:'Mammals' },
    {id: 'Golden Retriever', parent: 'Dogs'},
    {id: 'Husky', parent:'Dogs' },
    {id: 'Bengal', parent:'Cats' }
]

function traverse(animalHierarchy, parent) {
    let node = {};
    animalHierarchy.filter(item => item.parent === parent)
                   .forEach(item => node[item.id] = traverse(animalHierarchy, item.id));
    return node;  
}
console.log(traverse(animalHierarchy, null));