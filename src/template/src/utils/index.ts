interface User {
    name: string
    age: number
}

export function printUserInfo(user: User) {
    console.log(`姓名：${user.name}，年龄：${user.age}`)
}