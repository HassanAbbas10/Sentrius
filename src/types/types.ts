export interface User {
    email: string
    password: string
    name?: string
    avatar?: File
  }
  
  export interface AuthFormProps {
    onSubmit: (user: User) => void
    isLoading: boolean
  }
export  interface UserProfileProps {
    isExpanded: boolean;
  }