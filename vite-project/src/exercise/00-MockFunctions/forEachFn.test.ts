/* Exercise 0: Test the function by using a mock function */

/* Mock the function using jest.fn().
Write four tests inside a describe block. Do not forget to use the beforeEach function to clear the mock function.
The mock function receives a prop of type number. The mocked function adds a 6 to the number.
1. First Test: 
The forEach function should be called 3 times
2. Second Test:
The forEach function should be called with the correct arguments.
3. Third Test:
Test the first argument of the first call to the function was 0 and the result is 6.
Test the first argument of the second call to the function was 1  and the result is 7.
4. Forth Test:
Test the first argument of the third call to the function was 4 and the result is not 9.
*/

import { forEach } from "./forEach";

test("dummy test", () => {
  expect(true).toBe(true);
});

describe("forEach function", () => {
  const mockCallback = jest.fn((x) => x + 6);
  
  beforeEach(() => {
    mockCallback.mockClear();
  });
  
  // Test 1: The forEach function should be called 3 times
  test("calls the callback 3 times", () => {
    const items = [0, 1, 4];
    forEach(items, mockCallback);
    expect(mockCallback).toHaveBeenCalledTimes(3);
  });
  
  // Test 2: The forEach function should be called with the correct arguments
  test("calls the callback with the correct arguments", () => {
    const items = [0, 1, 4];
    
    forEach(items, mockCallback);
    
    expect(mockCallback).toHaveBeenNthCalledWith(1, 0);
    expect(mockCallback).toHaveBeenNthCalledWith(2, 1);
    expect(mockCallback).toHaveBeenNthCalledWith(3, 4);
  });
  
  // Test 3: Test the first arguments and results of first and second calls
  test("first and second calls have correct arguments and results", () => {
    const items = [0, 1, 4];
    
    forEach(items, mockCallback);
    
    expect(mockCallback.mock.calls[0][0]).toBe(0); 
    expect(mockCallback.mock.results[0].value).toBe(6); 
    
    expect(mockCallback.mock.calls[1][0]).toBe(1); 
    expect(mockCallback.mock.results[1].value).toBe(7); 
  });
  
  // Test 4: Test the third call argument and result is not 9
  test("third call has correct argument and result is not 9", () => {
    const items = [0, 1, 4];
    
    forEach(items, mockCallback);
    
    expect(mockCallback.mock.calls[2][0]).toBe(4); 
    expect(mockCallback.mock.results[2].value).not.toBe(9); 
  });
});
