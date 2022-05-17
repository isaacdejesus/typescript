interface MultiplyValues {
    value1: number;
    value2: number;
}
const parseArguments = (args: Array<string>): MultiplyValues => {
    if(args.length < 4) throw new Error('Not enough arguments');
    if(args.length > 4) throw new Error('Too many arguments');
    if(!isNaN(Number(args[2])) && !isNaN(Number(args[3]))){
        return {
            value1: Number(args[2]),
            value2: Number(args[3])
        }
    }else {
        throw new Error('Provided values were not numbers!')
    }
}
const multiplicator = (a: number, b: number, printText: string) => {
    console.log(printText, a * b);
}
try {
    const { value1, value2 } = parseArguments(process.argv)
    multiplicator(value1, value2, `Multiplied ${value1} and ${value2}, the result is:`);
}
catch(error: unknown){
    let errorMessage = 'Something went wrong'
    if(error instanceof Error)
        errorMessage += ' Error: ' + error.message;
    console.log(errorMessage)
}
//correct function call
//multiplicator(3, 4, 'Result of 3 * 4 is: ')
//bad function call
//multiplicator("33", 4, " I shall fail")
//const a: number = Number(process.argv[2])
//const b: number = Number(process.argv[3])
//multiplicator(a, b, `Multiplied ${a} and ${b}, the result is:`);
