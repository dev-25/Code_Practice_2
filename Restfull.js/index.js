const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const port = 3000;

let items = [
    {id:1, name: 'Devesh'},
    {id:2, name: 'Sharma'}
];

app.get('/items',(req,res) => {
    res.json(items);
});

app.get('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = items.find(item => item.id === id);
    if (item) {
         res.json(item);
    }else {
        res.status(404).json({ error: 'Item not found' });
    }
});


app.post('/items', (req, res) => {
    const newItem = { id: items.length + 1, name: req.body.name };
    items.push(newItem);
    res.status(201).json(newItem);
});


app.put('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    // console.log(req.body)
    const itemIndex = items.findIndex(item => item.id === id); 
    console.log(itemIndex)
    if (itemIndex !== -1) {
        items[itemIndex].name = req.body.name;
        //   console.log(items)
        res.json(items[itemIndex]);
    } else {
        res.status(404).json({ error: 'Item not found' });
    }
});


app.delete('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const itemIndex = items.findIndex(item => item.id === id);
  
    if (itemIndex !== -1) {
        const deletedItem = items.splice(itemIndex, 1)[0];
        res.json(deletedItem);
    } else {
         res.status(404).json({ error: 'Item not found' });
    }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

