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