type Order = {
    productId: string;
    price: number;
}

type User = {
    firstName: string;
    age: number;
    email: string;
    password?: string;
    orders: Order[];
}

const user: User = {
    firstName: "Jane",
    age: 20,
    email: "jane@doe.com",
    orders: [{ productId: "1", price: 200 }],
}

const printLog = (message: string) => {}

printLog(user.password!);

type Author = {
    books: string[];
}

const author: Author & User = {
    age: 2,
    books: ["1"],
    email: "author@gmail.com",
    firstName: "Felipe",
    orders: [],
}

interface UserInterface {
    readonly firstName: string;
    email: string;
}

const emailUser: UserInterface = {
    email: "felipe@gmail.com",
    firstName: "Felipe"
}

interface AuthorInterface {
    books: string[];
} 

const newAuthor: UserInterface & AuthorInterface = {
    email: "author@gamil.com",
    firstName: "Felipe",
    books: []
}