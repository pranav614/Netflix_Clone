export const emailValidation=(email)=>{
    const emailVal=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(email);
    if(!emailVal) return "Please enter a valid email address";
    return null;
}
export const passwordValidation=(password)=>{
    const passwordVal=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if(!passwordVal) return "Your password must contain between 4 and 60 characters.";
    return null;
}

export const fullNameValidation=(fullName)=>{
    const fullNameVal=/(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(fullName);
    if(!fullNameVal) return "Invalid Name";
    return null;
}