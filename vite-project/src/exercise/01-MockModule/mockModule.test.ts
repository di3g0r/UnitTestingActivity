/* Mock Modules */

/* Mock the function using jest.mock() and jest.fn().
Write four tests inside a describe block. Do not forget to use the beforeEach function to clear the mock function.
Mock the functions in the utils files, they are being used in the convertCase function.
Set up the mock functions before each test.

1. Test cases for the reverseString function
2. Test cases for the toLowerCase function
3. Test cases for the toUpperCase function
4. Test cases for the default case when it is unknown
5. Test cases for the empty string
*/

import { convertCase } from "./convertCase";
import { reverseString, toLowerCase, toUpperCase } from "./utils";

test("dummy test", () => {
  expect(true).toBe(true);
});

jest.mock("./utils");

describe("convertCase function", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    
    (reverseString as jest.Mock).mockImplementation((str: string) => str.split("").reverse().join(""));
    (toLowerCase as jest.Mock).mockImplementation((str: string) => str.toLowerCase());
    (toUpperCase as jest.Mock).mockImplementation((str: string) => str.toUpperCase());
  });
  
  // Test 1: reverseString function
  test("should reverse a string when case type is 'reverse'", () => {
    const result = convertCase("hello", "reverse");
    
    expect(result).toBe("olleh");
    
    expect(reverseString).toHaveBeenCalledWith("hello");
    expect(reverseString).toHaveBeenCalledTimes(1);
  });
  
  // Test 2: toLowerCase function
  test("should convert string to lowercase when case type is 'lower'", () => {
    const result = convertCase("HELLO", "lower");
    
    expect(result).toBe("hello");
    
    expect(toLowerCase).toHaveBeenCalledWith("HELLO");
    expect(toLowerCase).toHaveBeenCalledTimes(1);
  });
  
  // Test 3: toUpperCase function
  test("should convert string to uppercase when case type is 'upper'", () => {
    const result = convertCase("hello", "upper");
    
    expect(result).toBe("HELLO");
    
    expect(toUpperCase).toHaveBeenCalledWith("hello");
    expect(toUpperCase).toHaveBeenCalledTimes(1);
  });
  
  // Test 4: default case
  test("should return original string when case type is 'unknown'", () => {
    const result = convertCase("Hello", "unknown");
    
    expect(result).toBe("Hello");
    
    expect(reverseString).not.toHaveBeenCalled();
    expect(toLowerCase).not.toHaveBeenCalled();
    expect(toUpperCase).not.toHaveBeenCalled();
  });
  
  // Test 5: empty string
  test("should handle empty string for all case types", () => {
    expect(convertCase("", "upper")).toBe("");
    expect(convertCase("", "lower")).toBe("");
    expect(convertCase("", "reverse")).toBe("");
    expect(convertCase("", "unknown")).toBe("");
    
    expect(toUpperCase).toHaveBeenCalledWith("");
    expect(toLowerCase).toHaveBeenCalledWith("");
    expect(reverseString).toHaveBeenCalledWith("");
    
    expect(toUpperCase).toHaveBeenCalledTimes(1);
    expect(toLowerCase).toHaveBeenCalledTimes(1);
    expect(reverseString).toHaveBeenCalledTimes(1);
  });
});