/// --------------------
// Lesson 4 - Conditonal statements

// / Write an if statement:
// If it's above 90 degrees, log "Too hot!"
// If it's between 60 and 90, log "Perfect!"
// Otherwise, log "Too cold!"


const temp = 85;
if (temp >90) {
console.log("too hot");
} else if (temp >= 60 && temp <= 90) {
console.log("Perfect!");
} else {
  console.log("Too cold!");
}
// Create a variable `isLoggedIn` set to true or false
// If true, console.log "Welcome back!"
// If false, console.log "Please log in."


const isLoggedIn = true;
if (isLoggedIn) {
console.log ("welcome back!");
} else {
    console.log ("please log back in.")
}


// Create a variable `age`
// If age is 18 or older, log "You can vote"
// Else, log "You must be at least 18 to vote"

const age = 20
if (age >= 18) {
    console.log ("you can vote");
}
else {
    console.log ("you are not old enough to vote");
}

/// --------------------
// Lesson 5 - functional components

//Write a functional component called Greeting that takes a name prop and says hello.
 function Greeting (props) {
    return <h1> Hello, {props.name}! </h1>;
 }

//Create an array of favorite snacks and use .map() to display each one as a paragraph.

function SnacksList() {
  const snacks = ["chips", "cookies", "fruit", "nuts"];

  return (
    <div>
      {snacks.map((snack, index) => (
        <p key={index}>{snack}</p>
      ))}
    </div>
  );
}
//Create a component called BookList that receives a list of books and renders each one’s title and author.

const booksData = [
  { title: "Giovanni's Room", author: "James Baldwin" },
  { title: "The Fifth Season", author: "N.K. Jemisin" },
  { title: "Sister Outsider", author: "Audre Lorde" }
];

function BookList(props) {
  return (
    <div>
      {props.books.map((book, index) => (
        <p key={index}>
          <strong>{book.title}</strong> by {book.author}
        </p>
      ))}
    </div>
  );
}

function App() {
  return <BookList books={booksData} />;
}