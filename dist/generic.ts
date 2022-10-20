const returnValue = <T>(value: T): T => value;

const message = returnValue<string>("Hello World");

const conta = returnValue<number>(5);

function getFirstValueFromArray<Type>(array: Type[]) {
    return array[0]
}

const getFirstValueFromStringArray = getFirstValueFromArray<string>(["1", "2"]);
const getFirstValueFromNumberArray = getFirstValueFromArray<number>([10, 20]);

// promisses
const returnPromise = async (): Promise<string> => {
    return "5"
}