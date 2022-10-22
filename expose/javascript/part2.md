1. It will write 3 to the console because i is declared with var, allowing it to used outside of the block it is declared in. i will be 3 because after the last iteration of the for loop, i is incremented to 3, which is greater than prices.length, so the for loop is exited.
   
2. It will write 150 to the console because discountedPrice is declared with var, allowing it to be used outside of the block it is declared in. discountedPrice will contain the value during the last iteration of the for loop, which will be 150.
   
3. It will write 150 to the console because finalPrice is declared with var, allowing it to be used.
   
4. The function will return an array of size 3 that is filled with the discounted prices (50% discount) of the prices array given. Therefore it returns the array [50, 100, 150].
   
5. This will result in an error because i has block scope within the for loop block and cannot be accessed outside of the for loop.
   
6. This will result in an error because discountedPrice is declared within the for loop with let, which means it has block scope and cannot be accessed outside of the for loop. 
   
7. It will write 150 to the console because finalPrice is declared outside of the for loop, so the scope of the variable is within the entire function. It will contain the last iteration of the for loop, which will be 150.
   
8. This will return the discounted array, which contains 3 elements because the for loop iterated 3 times. It will return [50, 100, 150].
   
9.  This will result in an error because the variable i is declared with let and is within a for loop, so it cannot be accessed outside of the for loop.

10. This will write 3 to the console because the length of the price array is 3. The variable length is declared with const, so it cannot be changed.

11. This will cause an error because during every iteration of the for loop, we are trying to redeclare const discountedPrice, which is not allowed.

12. A) student.name  
    B) student['Grad Year']  
    C) student.greeting()  
    D) student['Favorite Teacher'].name  
    E) student.courseLoad[0]  

13. A) '32' since 2 will map to '2', and concatenating the two strings gives '32'  
    B) 1 since '3' will map to 3, and it will perform arithmetic subtraction 3 - 1.  
    C) 3 since null gets converted to 0 and 3 + 0 = 3  
    D) '3null' since null gets converted to the string 'null' and they will get concatenated together.  
    E) 4 since true gets mapped to 1 and then 1 + 3 = 4  
    F) 0 since both false and null get mapped to 0, and 0 + 0 = 0  
    G) '3undefined' since undefined gets converted to the string 'undefined' and they get concatenated.  
    H) NaN since '3' gets converted to 3 and undefined gets converted to NaN, which results in NaN. 

14. A) true since '2' gets converted to 2 and 2 > 1 returns true.  
    B) false because the string '2' is greater than '1'.  
    C) true because '2' gets converted to 2 and 2 == 2 is true.  
    D) false because === does not use type conversions, so 2 is not equal to '2'.  
    E) false because true gets converted to 1 and 1 is not equal to 2.  
    F) true because Boolean(2) results in true and that is equal to true.  

15. === checks equality without type conversion, while == will use type conversion.
    
17. In the function modifyArray will call the function doSomething in the for loop. The doSomething function will multiply the number by 2, so the for loop multiplies every number in array by 2, and add it to the array newArr. So, modifyArray will return the array [2,4,6].

19. The output is 1 4 3 2.

