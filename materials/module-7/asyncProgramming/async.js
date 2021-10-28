/* Example-1: Resolve the promise via async/await
    */
const promiseResolve = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Resolved!!");
        }, 3000);
    });
};

async function funcToResolve() {
    const result = await promiseResolve();
    return result; // in case of return the 'await' can be skipped: return promiseResolve();
}
funcToResolve();

/* Example-2: Reject the promise via async/await
    */
const promiseReject = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Rejected!!");
        }, 2000);
    });
};

async function funcToReject() {
    try {
        await promiseReject();
    } catch (e) {
        return e;
    }
}
funcToReject();