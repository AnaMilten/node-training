import 'colors'
import Assert from '../../lib/assert'

/**
 * Manipulation des chaines de caractères
 */

// passer une chaine de caractère en minuscule

const string = 'ma super Chaine de Caractère'

const convertToLowerCase = (str) => {
    return str.toLowerCase()
}

Assert.equals(convertToLowerCase(string), 'ma super chaine de caractère')