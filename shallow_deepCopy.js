//!shallow copy
let a = [12, 13];
let b = a;
b.pop();

console.log("Copy real value of a", a); //output 12
console.log("Copy real value of b", b); //output 12
//Ab yha output dono ka 12 - 12 aya h kyuki ham direct copy nhi kar skte
//yaha actula value change ho rhi h....
//TODO=> Yaha b sirf a ki reference ko hold karta hai, iska matlab b aur a dono same array ko point kar rahe hain. Isliye jab ham b.pop() karte h, tab a ka array bhi change ho jaata hai. Isko shallow copy kehte hain, jisme sirf reference copy hota hai, actual data nahi.

//!deep copy
let x = [12, 13];
let y = [...x];
y.pop();

console.log("Copy real value of x", x); //output [12, 13]
console.log("Copy real value of y", y); //output[12]
// Ab yha output dono ka [12,13] aur [12] shi aya h kyuki ham spread operator se copy kr rhe hain.
//yaha actula value change nhi ho rhi h....
//TODO=> Yaha b ek nayi array ban gaya, jo a ke values ka copy hai. Ab b.pop() karne se sirf b change hota hai, a nahi. Isko deep copy kehte hain, jisme actual data copy hota hai, reference nahi.
