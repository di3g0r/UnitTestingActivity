/* Exercise 2: Test using snapshots */

/* Mock the function using jest.fn().
Write three tests inside a describe block. You should use import the superHeros[] and getFlyingSuperHeros function.

1. First Test: 
Test should return an empty array if no superheros have the 'Fly' power"
2. Second Test:
Test should return an array of superHeros that have the 'Fly' power"
3. Third Test:
Test should match the snapshot of flying superheros.
The snapshot file should contain the expected output of the test.
The snapshot should be saved in a __snapshots__ directory next to the test file.
The snapshot file should be named SuperHeros.test.ts.snap.
*/

import { superHeros } from './superHeros';
import { getFlyingSuperHeros } from './getFlyingSuperHeros';

test("dummy test", () => {
  expect(true).toBe(true);
});

describe("SuperHero Testing", () => {
  // Test 1: Return an empty array if no superheroes have the 'Fly' power
  test("should return an empty array if no superheros have the 'Fly' power", () => {
    const nonFlyingHeroes = [
      { name: "Hulk", power: ["Super Strength", "Regeneration"] },
      { name: "SpiderMan", power: ["Agility", "Spider-Sense"] },
      { name: "BlackWidow", power: ["Agility", "Intelligence"] }
    ];
    
    const result = getFlyingSuperHeros(nonFlyingHeroes);
    expect(result).toEqual([]);
    expect(result.length).toBe(0);
  });
  
  // Test 2: Return an array of superheroes that have the 'Fly' power
  test("should return an array of superHeros that have the 'Fly' power", () => {
    const result = getFlyingSuperHeros(superHeros);
    
    result.forEach(hero => {
      expect(hero.power).toContain("Fly");
    });
    
    const expectedFlyingHeroes = superHeros.filter(hero => hero.power.includes("Fly"));
    expect(result.length).toBe(expectedFlyingHeroes.length);
    
    const heroNames = result.map(hero => hero.name);
    expect(heroNames).toContain("Superman");
    expect(heroNames).toContain("IronMan");
    expect(heroNames).toContain("GreenLantern");
  });
  
  // Test 3: Match the snapshot of flying superheroes
  test("should match the snapshot of flying superheros", () => {
    const flyingHeroes = getFlyingSuperHeros(superHeros);
    
    expect(flyingHeroes).toMatchSnapshot();
  });
});


