export type MessageType = {
    id: number
    message: string
}

export type DialogType = {
    id: number
    name: string
}

export type PostsType = {
    id: number
    post: string
    likesCount: number
}

//_________________________________________

export type SocSetType = {
    posts: PostsType[]
    dialogs: DialogType[]
    messages: MessageType[]
}

export type DialogsType = {
    dialogs: DialogType[]
    messages: MessageType[]
}