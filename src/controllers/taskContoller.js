const express = require('express');
const router = express.Router();
router.use(express.json());

// Exemple de données des tâches (en mémoire)
const tasks = [
    {
        title: 'Première tâche',
        description: 'Faire la lessive',
        dueDate: '2025-03-31',
        status: 'En cours', // Ajout du statut
        createdAt: new Date(), // Ajout de la date de création
    },
    {
        title: 'Deuxième tâche',
        description: 'Envoyer un email important',
        dueDate: '2025-03-25',
        status: 'Terminée',
        createdAt: new Date(),
    },
];

// Route GET - Récupérer toutes les tâches
router.get('/', (req, res) => {
    res.status(200).json(tasks);
});

// Route POST - Créer une nouvelle tâche
router.post('/', (req, res) => {
    const { title, description, dueDate, status } = req.body;
    if (!title || !description || !dueDate) {
        return res.status(400).json({ message: 'Les champs (title, description, dueDate) sont obligatoires.' });
    }

    const newTask = {
        title,
        description,
        dueDate,
        status: status || 'En cours', // Statut par défaut "En cours"
        createdAt: new Date(), // Date de création automatique
    };

    tasks.push(newTask); // Ajouter la nouvelle tâche
    res.status(201).json({
        message: 'Tâche créée avec succès !',
        createdTask: newTask,
    });
});

// Route PUT - Mettre à jour une tâche (par index dans la liste)
router.put('/:index', (req, res) => {
    const index = parseInt(req.params.index, 10); // Récupérer l'index
    const updatedTask = req.body; // Les données mises à jour

    if (index >= 0 && index < tasks.length) {
        tasks[index] = { ...tasks[index], ...updatedTask }; // Mettre à jour les propriétés
        res.status(200).json({
            message: 'Tâche mise à jour avec succès !',
            updatedTask: tasks[index],
        });
    } else {
        res.status(404).json({ message: 'Tâche non trouvée à cet index !' });
    }
});

// Route DELETE - Supprimer une tâche (par index dans la liste)
router.delete('/:index', (req, res) => {
    const index = parseInt(req.params.index, 10); // Récupérer l'index
    if (index >= 0 && index < tasks.length) {
        tasks.splice(index, 1); // Supprimer la tâche
        res.status(200).json({ message: 'Tâche supprimée avec succès !' });
    } else {
        res.status(404).json({ message: 'Tâche non trouvée à cet index !' });
    }
});

// module.exports = router;

module.exports = {
    getAllUsers: (req, res) => { res.send('All users'); },
    getAllStuff: (req, res) => { res.send('All stuff'); },
    createThing: (req, res) => { res.send('Thing created'); },
    getOneThing: (req, res) => { res.send(`Thing with ID: ${req.params.id}`); },
    modifyThing: (req, res) => { res.send(`Thing modified with ID: ${req.params.id}`); },
    deleteThing: (req, res) => { res.send(`Thing deleted with ID: ${req.params.id}`); }
  };