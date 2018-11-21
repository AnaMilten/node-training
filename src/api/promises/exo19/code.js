import 'colors'
import Assert from '../../../lib/assert'
import fetch from 'node-fetch'

/**
 * API
 */

/*
 * Décomposer la reponse de fetch pour extraire les headers et une partie du body
 */
const callUrl = async (url) => {
    const res = await fetch(url)
    const body = res.json()
    console.log(body)
    return {
        headers: {
            code: 200,
            'content-type': 'application/json'
        },
        body: {
            userId
        }
    }
}

const test = async () => {
    const response = await callUrl('https://jsonplaceholder.typicode.com/todos/1')
    Assert.objectEquals(response, {
        headers: { code: 200, 'content-type': 'application/json; charset=utf-8' },
        body: { userId: 1 }
    })
}

test()