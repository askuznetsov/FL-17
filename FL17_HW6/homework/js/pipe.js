 function isFunction(functionToCheck) {
     return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
 }

 const pipe = (value, ...funcs) => {
     let i = 0;
     let output = value;
     try {
         while (i < funcs.length) {
             const element = funcs[i];
             if (isFunction(element) !== true) {
                 throw new Error(`Provided argument at position ${i} is not a function!`);
             }
             output = element(output);
             i++;
         }
     } catch (error) {
         return error;
     }
     return output;
 };

 const replaceUnderscoreWithSpace = (value) => value.replace(/_/g, ' ');
 const capitalize = (value) =>
     value
     .split(' ')
     .map((val) => val.charAt(0).toUpperCase() + val.slice(1))
     .join(' ');
 const appendGreeting = (value) => `Hello, ${value}!`;

 const error = pipe('john_doe', replaceUnderscoreWithSpace, capitalize, '');

 // alert(error); // Provided argument at position 2 is not a function!

 const result = pipe('john_doe', replaceUnderscoreWithSpace, capitalize, appendGreeting);

 // alert(result); // Hello, John Doe!