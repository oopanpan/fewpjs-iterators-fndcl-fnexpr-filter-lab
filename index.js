const findMatching = (drivers, string) =>{
    let result =  drivers.filter( driver =>{
        return driver.toUpperCase() === string.toUpperCase()
    })
    return result
}

const fuzzyMatch = (drivers, string) =>{
    let result = drivers.filter( driver =>{
        return driver.charAt(0) === string.charAt(0)
    })
    return result
}

const matchName = (drivers, string) =>{
    let result = drivers.filter( driver =>{
        return driver.name === string
    })
    return result
}