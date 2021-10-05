const resolvedPromise =() => {
    setTimeout(()=>{
        let message = {"message": 'Message displayed after 500ms'}
        console.log(message)
    },500)
}

const rejectedPromise = () => {
    setTimeout(()=>{
        let errorMsg = {"error":"delayed Exception"}
        console.log(errorMsg)
    },500)
}


resolvedPromise()
rejectedPromise();