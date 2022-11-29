console.log('Error Handling');
{
    console.log('1st {}');

    const myName = undefined;
    if (myName !== undefined) {
        throw new Error('myName should have been undefined');
        console.log('myName is not undefined');
    }
    else {
        console.log('myName is undefined')
    }

    try {
        console.log(`We're inside try block`);
        harry(); // error... now it'll jum to the catch section
        console.log('after finding error'); //just after catching error everything after error will be ignored
    }
    catch (error) {
        console.log("Are you okay?\n" + error + "\n" + error.name + "\n" + error.message);
    }
    finally {
        console.log('This is finally and it will work no matter what is there in try or catch!');
    }

}

{
    console.log('2nd {}');
    try {
        const myName = 'Uzumaki Naruto';
        if (myName !== undefined) {
            throw new Error('myName should have been undefined');
            console.log('myName is not undefined');
        }
        else {
            console.log('myName is undefined')
        }
    }   
    catch(error){
        console.log(error, error.name, error.message);
    }
    finally{
        console.log('Mujhe kya ma to finally hu!\nBTW we are in 2nd {}')
    }
}