import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ButtonColor } from './lib/types';


// type DummyProps = {
//   number: number,
//   setNumber: Dispatch<SetStateAction<number>>
// }

// How it was done in the past: 
// const ExampleComponent: React.FC<> = () => {};
// some issues with this syntax. Not used anymore, and only possible with arrow functions.

// ONE WAY TO HANDLE STYLE

// // Break out the union type into a variable
// type Color = "red" | "blue" | "green"  | "pink" 


// // Declare the props types like this. Adding ?. marks prop as optional
// // backgroundColor is a union type. Multiple string options
// // padding is a tuple, an array of defined type and length 
// type ButtonProps = {
//   backgroundColor: Color
//   fontSize?: number
//   pillShape: boolean
//   padding: [number, number, number, number]
//   borderRadius: number
// }


// export default function Button({
//   backgroundColor,
//   fontSize,
//   pillShape,
//   padding,
//   borderRadius
// }: ButtonProps) {
//   return(
//     <button style={{
//       backgroundColor: backgroundColor,
//       fontSize: fontSize,
//       padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`,
//       borderRadius: `${borderRadius}rem`
//     }}
//     >Click me</button>
//   )
// };




// ANOTHER WAY TO HANDLE STYLE
// type Color = "red" | "blue" | "green"  | "pink"  

// type ButtonProps = {
//   style: {
//     backgroundColor: Color
//     fontSize?: number
//     pillShape: boolean
//     borderRadius: number
//   }
// }


// export default function Button({
//   style
// }: ButtonProps) {
//   return(
//     <button style={style}>Click me</button>
//   )
// };


// STYLE WITH CSS PROPERTIES INSTEAD
// type ButtonProps = {
//   style: React.CSSProperties
// }


// export default function Button({
//   style
// }: ButtonProps) {
//   return(
//     <button style={style}>Click me</button>
//   )
// };


// RECORD
// Record defines the types of the key value pairs in an object.
// Defining a function that does not return something: use void. 
// type ButtonProps = {
//   borderRadius: Record<string, number>,
//   onClick: () => void;
// }


// export default function Button({
//   borderRadius,
//   onClick
// }: ButtonProps) {
//   return(
//     <button style={{borderRadius: `${borderRadius}rem`}}
//     onClick={onClick}>Click me</button>
//   )
// };


// IF we want to user the component like this <Button></Button> we must allow the component to take children. 
// ReactNode allows any types. 
// type ButtonProps = {
//   children: React.ReactNode; 
// }


// export default function Button({
//   children
// }: ButtonProps) {
//   return(
//     <button>{children}</button>
//   )
// };


// PASS STATE 
// state functions needs Dispatch
// type ButtonProps = {
//   setCount: React.Dispatch<React.SetStateAction<number>>
// }


// export default function Button({
//   setCount
// }: ButtonProps) {
//   return(
//     <button>Click me</button>
//   )
// };


// USE STATE WITH TYPESCRIPT
// type User = {
//   name: string,
//   age: number
// }

// export default function Button({}) {
//   const [count, setCount] = useState(0)
//   const [text, setText] = useState('Click me') // typescript recognises primitive values so we don't have to define them
//   const [user, setUser] = useState<User | null >(null)
//   // how to use NULL with typescript: define a type and pput it in <>
//   // HOWEVER, then we get squiggly lines under null. We need to add a OR statement.

//   // this will be possibly null. USe optional chaining! Add ?
//   const name = user?.name; // now this works because of our defined User type

//   return(
//     <button>Click me</button>
//   )
// };

// UseContext is more complex. Check more videos!

// MAP WITH TYPESCRIPT
// const ButtonTextOptions = [
//   "Click me!",
//   "Click me again!",
//   "Click me baby one more time"
// ] as const;
// // the last line, as const, is unique for typescript and marks this as the ONLY options permitted. Readonly array.

//   // this returns the whole array?
//   export default function Button({}) {
//     return(
//       <button>
//         {ButtonTextOptions.map((option)=> {
//           return option;
//         })
//         }</button>
//     )
//   };

// OMIT
// type User = {
//   sessionId: string,
//   name: string
// }
// // Omit is helpful when you want to take an existing type and remove something from it. 
// type Guest = Omit<User, 'name'>
  
//     export default function Button({}) {
//       return(
//         <button>ClickClick</button>
//       )
//     };

// STORING STUFF IN LOCALSTORAGE

  // type ButtonColor = 'red' | 'blue' | 'green'

  //   export default function Button() {
  //     // using "as ButtonColor" is called asserts. 
  //     useEffect(() => {
  //       const previousButtonColor = localStorage.getItem('buttonColor') as ButtonColor;
  //     }, [])

  //     return(
  //       <button>ClickClick</button>
  //     )
  //   };

// TYPESCRIPT GENERICS
// we want to be able to call the function with both strings and numbers.
// don't use any, that means everything goes. 
// using T (meaning Type), we specify that the input value and the output needs to be of the same type. 
// for this to work we need to put <T,> before our parameters. The comma is needed so that the compiler knows it's not a jsx-element. 

// const convertToArray = <T,>(value: T): T[] => {
//   return [value]

// }
//     export default function Button() {
//       // using "as ButtonColor" is called asserts. 


//       return(
//         <button>ClickClick</button>
//       )
//     };

// MORE ON GENERICS
// generics is just specifying a relationship between props. The type of input should be the same in the output. 
    // type ButtonProps<T> = {
    //   countValue: T;
    //   countHistory: T[];
    // }
    //     export default function Button<T>({ countValue, countHistory }: ButtonProps<T>) {
    
    
    //       return(
    //         <button>ClickClick</button>
    //       )
    //     };

// REUSING STYLING IN OTHER FILES
// Move type to new folder called lib. Put in a file called types.ts
// centralize types in one file. Type 'type' in front of your import, like this: import { type Color } from ...


// FETCHING DATA FROM API
// typescript automatically interpretes fetched data as type: any.

    // export default function Button() {

    //   useEffect(()=> {
    //     fetch('https://jsonplaceholder.typicode.com/todos/1')
    //     .then((response) => response.json())
    //     .then((data: unknown) => {
    //       // here we want to verify that we're getting what we expect
    //       // run it through Zod
    //       // const todo = todoSchema.parse(data);
    //       // then do stuff as usual
    //     })
    //   }, [])
    //   return(
    //     <button>Add</button>
    //   )
    // };


type ButtonProps = {
  onClick: () => void;
  text: string;

}

export default function Button({
  onClick,
  text
}: ButtonProps) {
  return(
    <button onClick={onClick}>{text}</button>
  )
};


// This is needed to make the typescript file a module. Otherwise it counts as a global script file.
export {};

