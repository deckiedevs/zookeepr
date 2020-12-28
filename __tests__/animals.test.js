const fs = require('fs');
const { filterByQuery, findById, createNewAnimal, validateAnimal} = require('../lib/animals.js');
const { animals } = require('../data/animals');

jest.mock('fs');

test('filter animal by query', () => {
    const originalAnimals = [
        {
            "id": "0",
            "name": "Spindle",
            "species": "bear",
            "diet": "carnivore",
            "personalityTraits": [
                "hungry",
                "zany",
                "loving"
            ]
        },
        {
            "id": "1",
            "name": "Terry",
            "species": "gorilla",
            "diet": "omnivore",
            "personalityTraits": [
                "anxious",
                "goofy"
            ]
        }
    ];

    const filteredAnimal = filterByQuery({ diet: 'carnivore' }, originalAnimals);

    expect(filteredAnimal.length).toEqual(1);
});

test('find animal by ID', () => {
    const originalAnimals = [
        {
            "id": "0",
            "name": "Spindle",
            "species": "bear",
            "diet": "carnivore",
            "personalityTraits": [
                "hungry",
                "zany",
                "loving"
            ]
        },
        {
            "id": "1",
            "name": "Terry",
            "species": "gorilla",
            "diet": "omnivore",
            "personalityTraits": [
                "anxious",
                "goofy"
            ]
        }
    ];

    const filteredAnimal = findById('0', originalAnimals);

    expect(filteredAnimal.id).toBe('0');
    expect(filteredAnimal.name).toBe('Spindle');
});

test('create new animal', () => {
    const animal = createNewAnimal(
        { name: 'Charlie', species: 'dog' },
        animals
    );

    expect(animal.name).toBe('Charlie');
    expect(animal.species).toBe('dog');
});

test('validate animal personality traits', () => {
    const animal = {
        "id": "0",
        "name": "Spindle",
        "species": "bear",
        "diet": "carnivore",
        "personalityTraits": [
            "hungry",
            "zany",
            "loving"
        ]
    }
    const invalidAnimal = {
        "id": "0",
        "name": "Spindle",
        "species": "bear",
        "diet": "carnivore",
    };

    const result = validateAnimal(animal);
    const result2 = validateAnimal(invalidAnimal);

    expect(result).toBe(true);
    expect(result2).toBe(false);
});