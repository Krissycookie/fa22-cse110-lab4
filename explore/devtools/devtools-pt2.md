1. The bug was that when calculating the sum in the calculateSum function, we are adding together two strings, resulting in a concatenated string instead of adding the two numbers together.

2. I would fix it by converting num1 and num2 from strings to ints using parseInt(), therefore it will do arithmetic addition.