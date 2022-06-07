import { auth } from "~/plugins/firebase"  

export default function({ redirect }) {
    auth.onAuthStateChanged(user => {
        if(!user || user.email != 'admin@gmail.com') {
            return redirect('/login')
        }
    })
}