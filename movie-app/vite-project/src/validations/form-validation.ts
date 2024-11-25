export interface Errors{
    empty:string
    onlySpaces:string
    maxLength:string
    specialCharacters:string
    noLetters:string
    sqlInjection:string
}
export function validateMovieSearch(input:string) {
    const errors: Errors = {
        empty:'',
        onlySpaces:'',
        maxLength:'',
        specialCharacters:'',
        noLetters:'',
        sqlInjection:''
    }
        
    

    // Eliminar espacios al inicio y al final
    const trimmedInput = input.trim();

    // 1. Validar que el campo no esté vacío
    if (trimmedInput === '') {
        errors.empty = "El campo está vacío.";
    }

    // 2. Validar que el campo no tenga solo espacios
    if (!/\S/.test(input)) {
        errors.onlySpaces = "El campo no puede tener solo espacios.";
    }

    // 3. Validar que el texto sea menor a un límite de caracteres
    const maxLength = 30;
    if (trimmedInput.length > maxLength) {
        errors.maxLength = `El texto no puede superar los ${maxLength} caracteres.`;
    }

    // 4. Validar que el texto no contenga caracteres especiales prohibidos
    if (!/^[a-zA-Z0-9\s]+$/.test(trimmedInput)) {
        errors.specialCharacters = "No se permiten caracteres especiales.";
    }

    // 5. Validar que el texto tenga al menos un carácter alfabético
    if (!/[a-zA-Z]/.test(trimmedInput)) {
        errors.noLetters = "Debe contener al menos una letra.";
    }

    // 6. Validar que no haya intentos de inyección SQL
    if (/(\bSELECT\b|\bDELETE\b|\bINSERT\b|\bDROP\b|\bUPDATE\b|\bWHERE\b)/i.test(trimmedInput)) {
        errors.sqlInjection = "Se detectaron patrones inseguros.";
    }

    return errors;
}

