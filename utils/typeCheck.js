export const isFunction = function(value) {
    return value && value.constructor === Function || false
}

export const isObject = function(value){
    return value && value.constructor === Object || false
}