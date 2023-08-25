namespace Greetings {
  export function returnGreeting(greeting: string) {
    console.log(greeting);
  }
}
namespace GreetingsWithLength {
  export function returnGreeting(greeting: string) {
    let greetingLength = getLength(greeting);
    console.log(`Length: ${greetingLength} Msg: ${greeting}`);
  }
  const getLength = (greeting: string): number => greeting.length;
}

//* Namespaces aninhados
// namespace AllGreetings {
//   export namespace Greetings {
//       export function returnGreeting (greeting: string) {
//           console.log(${greeting});
//       }
//   }
//   export namespace GreetingsWithLength {
//       export function returnGreeting (greeting: string) {
//           let greetingLength = getLength(greeting);
//           console.log(`Msg: ${greeting} Length: ${greetingLength}`);
//       }
//       function getLength(message: string): number {
//           return message.length
//       }
//   }
// }

// AllGreetings.Greetings.returnGreeting("anderson"); // anderson
// AllGreetings.GreetingsWithLength.returnGreeting("kauer"); // kauer

// import greet = allGreetings.Greetings;
// greet.returnGreeting("Anderson");
