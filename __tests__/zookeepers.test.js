const fs = require('fs');
const { filterByQuery, findById, createNewZookeeper, validateZookeeper } = require('../lib/zookeepers');
const { zookeepers } = require('../data/zookeepers');

jest.mock('fs');

test('filter zookeeper by query', () => {
    const originalZookeepers = [
        {
            "id": "0",
            "name": "Kim",
            "age": 28,
            "favoriteAnimal": "dolphin"
        },
        {
            "id": "1",
            "name": "Raksha",
            "age": 31,
            "favoriteAnimal": "penguin"
        }
    ];

    const filteredZookeeper = filterByQuery({ name: 'Kim' }, originalZookeepers);
    
    expect(filteredZookeeper.length).toEqual(1);
});

test('find zookeeper by ID', () => {
    const originalZookeepers = [
        {
            "id": "0",
            "name": "Kim",
            "age": 28,
            "favoriteAnimal": "dolphin"
        },
        {
            "id": "1",
            "name": "Raksha",
            "age": 31,
            "favoriteAnimal": "penguin"
        }
    ];

    const filteredZookeeper = findById('0', originalZookeepers);

    expect(filteredZookeeper.id).toBe('0');
    expect(filteredZookeeper.name).toBe('Kim');
});

test('create new zookeeper', () => {
    const zookeeper = createNewZookeeper(
        { name: 'John', age: 36 }, zookeepers
    );

    expect(zookeeper.name).toBe('John');
    expect(zookeeper.age).toBe(36);
});

test('validate zookeeper favorite animal', () => {
    const zookeeper = {
        "id": "0",
        "name": "Kim",
        "age": 28,
        "favoriteAnimal": "dolphin"
    };

    const invalidZookeeper = {
        "id": "0",
        "name": "Kim",
        "age": 28
    };

    const result = validateZookeeper(zookeeper);
    const result2 = validateZookeeper(invalidZookeeper);

    expect(result).toBe(true);
    expect(result2).toBe(false);
});