/* Exercise 0: Test the function by using a spyOn function */

/* Mock the function using spyOn
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

describe("forEach function with spyOn", () => {
  const utils = {
    callback: function(x: number) {
      return x + 6;
    }
  };
  
  let callbackSpy: jest.SpyInstance;
  
  beforeEach(() => {
    callbackSpy = jest.spyOn(utils, 'callback');
  });
  
  afterEach(() => {
    callbackSpy.mockRestore();
  });
  
  // Test 1: The forEach function should be called 3 times
  test("calls the callback 3 times", () => {
    const items = [0, 1, 4];
    
    forEach(items, utils.callback);
    
    expect(callbackSpy).toHaveBeenCalledTimes(3);
  });
  
  // Test 2: The forEach function should be called with the correct arguments
  test("calls the callback with the correct arguments", () => {
    const items = [0, 1, 4];
    
    forEach(items, utils.callback);
    
    expect(callbackSpy).toHaveBeenNthCalledWith(1, 0);
    expect(callbackSpy).toHaveBeenNthCalledWith(2, 1);
    expect(callbackSpy).toHaveBeenNthCalledWith(3, 4);
  });
  
  // Test 3: Test the first arguments and results of first and second calls
  test("first and second calls have correct arguments and results", () => {
    const items = [0, 1, 4];
    
    forEach(items, utils.callback);
    
    expect(callbackSpy.mock.calls[0][0]).toBe(0); 
    expect(callbackSpy.mock.results[0].value).toBe(6); 
    
    expect(callbackSpy.mock.calls[1][0]).toBe(1); 
    expect(callbackSpy.mock.results[1].value).toBe(7); 
  });
  
  // Test 4: Test the third call argument and result is not 9
  test("third call has correct argument and result is not 9", () => {
    const items = [0, 1, 4];
    
    forEach(items, utils.callback);
    
    expect(callbackSpy.mock.calls[2][0]).toBe(4); 
    expect(callbackSpy.mock.results[2].value).not.toBe(9); 
  });
});