export default defineNuxtRouteMiddleware((to,from)=>{
    const user = useState("user")


    const publicRoutes = ['/login','/register']

    if(publicRoutes.includes(to.path))return

    if(!user.value){
        return navigateTo('/login')
    }


})
