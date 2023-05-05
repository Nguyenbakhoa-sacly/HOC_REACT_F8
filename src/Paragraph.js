import { useContext } from "react"
import { themeContext } from "./ThemeContext"


function Paragraph(){
    // nhan 1 object tu themeContext
    const ThemeValue = useContext(themeContext)

    return (
        <p className={ThemeValue.theme}>
            “A cat is a domestic animal known for its soft fur, playful nature,
            and independent personality. They have four legs, two ears, and two
            bright eyes that can see in the dark. Cats are carnivores and eat meat
            such as fish, chicken, and beef. They are also very clean animals and spend 
            a lot of time grooming themselves. Cats are great companions and 
            can be very affectionate with their owners.”
        </p>
    )
}

export default Paragraph