import React from 'react'
import './lesson_4';


const handlePromise = {
    promise: null,
    resolve: null,
    reject: null,
    onSuccess(paramName: string) {
        console.log(`Promise is resolved with data: ${paramName}`)
    },
    onError(paramName: string) {
        console.log(`Promise is rejected with error: ${paramName}`)
    }
}

const Lesson4 = () => {
    const createPromiseHandle = () => {
        const promise = new Promise((resolve, reject) => {
            resolve(Promise)
        })
        promise.then((res => {
            // @ts-ignore
            handlePromise.promise = res
            // @ts-ignore
            handlePromise.resolve = res.resolve
            // @ts-ignore
            handlePromise.reject = res.reject
            console.log(handlePromise)
        }))
    }
    const resolvePromiseHandle = () => {
        handlePromise.onSuccess('data')
        console.log(handlePromise)
    }
    const rejectPromiseHandle = () => {
        handlePromise.onError('error')
    }


    return (
        <div>
            <button onClick={createPromiseHandle} id='btn-create-promise'>Create Promise</button>
            <button onClick={resolvePromiseHandle} id='btn-resolve-promise'>Resolve Promise</button>
            <button onClick={rejectPromiseHandle} id='btn-reject-promise'>Reject Promise</button>
        </div>
    );
}

export default Lesson4;