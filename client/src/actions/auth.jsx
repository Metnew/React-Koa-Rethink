export const logout = () => {
    return {

    }
}

export const login = (user) => {
    return {
        type: 'LOGIN',
        user
    }
}
